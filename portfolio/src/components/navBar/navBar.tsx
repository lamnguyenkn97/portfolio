import { Stack, Box, useTheme, SxProps, Theme } from "@mui/material";
import { useEffect, useState, useMemo } from "react";
import { DSTypography } from "../design-system";

const getNavButtonStyles = (theme: Theme, itemColor: string): SxProps<Theme> => {
  const navStyles = theme.custom.componentStyles.navBar;
  return {
    display: "flex",
    alignItems: "center",
    width: "100%",
    gap: theme.spacing(navStyles.button.gap),
    padding: `${theme.spacing(navStyles.button.padding.y)} 0`,
    border: "none",
    background: "transparent",
    cursor: "pointer",
    transition: navStyles.button.transition,
    "&:hover .nav-text": {
      color: itemColor,
    },
    "&:hover .nav-bar": {
      bgcolor: itemColor,
      opacity: 1,
    },
  };
};

const getNavBarStyles = (theme: Theme, isActive: boolean, itemColor: string): SxProps<Theme> => {
  const navStyles = theme.custom.componentStyles.navBar;
  return {
    width: navStyles.bar.width,
    height: navStyles.bar.height,
    borderRadius: navStyles.bar.borderRadius,
    bgcolor: isActive ? itemColor : "divider",
    opacity: isActive ? 1 : navStyles.bar.inactiveOpacity,
    transition: navStyles.bar.transition,
  };
};

const getNavTextStyles = (theme: Theme, isActive: boolean, itemColor: string): SxProps<Theme> => {
  const navStyles = theme.custom.componentStyles.navBar;
  return {
    color: isActive ? itemColor : "text.primary",
    fontWeight: isActive ? navStyles.text.fontWeight.active : navStyles.text.fontWeight.inactive,
    fontSize: navStyles.text.fontSize,
    letterSpacing: navStyles.text.letterSpacing,
    textTransform: navStyles.text.textTransform,
    transition: navStyles.text.transition,
  };
};

export const NavBar = () => {
  const theme = useTheme();

  const navItems = useMemo(
    () => [
      { id: "about", label: "ABOUT", color: "primary.main" }, // Teal
      { id: "experience", label: "EXPERIENCE", color: "secondary.main" }, // Gold (piano)
      { id: "projects", label: "PROJECTS", color: theme.custom.colors.spotify.green }, // Spotify green
    ],
    [theme.custom.colors.spotify.green]
  );
  const [activeSection, setActiveSection] = useState("about");

  // Handle scroll to section
  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = parseInt(theme.custom.layout.section.scrollMarginTop, 10);
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const viewportProbe = window.scrollY + window.innerHeight * 0.3; // sample point ~30% down the viewport

      const resolved = navItems
        .map((item) => {
          const el = document.getElementById(item.id);
          if (!el) return null;
          const top = el.offsetTop;
          const height = el.offsetHeight;
          const bottom = top + height;
          return { id: item.id, top, bottom };
        })
        .filter(Boolean) as { id: string; top: number; bottom: number }[];

      const current =
        resolved.find(
          (section) => viewportProbe >= section.top && viewportProbe < section.bottom
        ) || resolved[resolved.length - 1];

      if (current && current.id !== activeSection) {
        setActiveSection(current.id);
      }
    };

    // Set initial active section
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, navItems]);

  const navStyles = theme.custom.componentStyles.navBar;
  return (
    <Stack spacing={theme.spacing(navStyles.itemSpacing)} component="nav" role="navigation" aria-label="Main navigation">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <Box
            key={item.id}
            component="button"
            onClick={() => handleScrollTo(item.id)}
            aria-label={`Navigate to ${item.label} section`}
            aria-current={isActive ? "true" : undefined}
            sx={getNavButtonStyles(theme, item.color)}
          >
            <Box className="nav-bar" sx={getNavBarStyles(theme, isActive, item.color)} />
            <DSTypography
              className="nav-text"
              variant="body"
              sx={getNavTextStyles(theme, isActive, item.color)}
            >
              {item.label}
            </DSTypography>
          </Box>
        );
      })}
    </Stack>
  );
};
