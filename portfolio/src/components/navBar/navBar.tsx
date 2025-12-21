import { Stack, Box, useTheme } from "@mui/material";
import { useEffect, useState, useMemo } from "react";
import { DSTypography } from "../design-system";

export const NavBar = () => {
  const theme = useTheme();

  const navItems = useMemo(
    () => [
      { id: "about", label: "ABOUT", color: "primary.main" }, // Teal
      { id: "experience", label: "EXPERIENCE", color: "secondary.main" }, // Gold (piano)
      { id: "projects", label: "PROJECTS", color: theme.custom.colors.spotify.green }, // Spotify green
      { id: "journals", label: "JOURNALS", color: "secondary.main" },
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
    <Stack spacing={navStyles.itemSpacing}>
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <Box
            key={item.id}
            component="button"
            onClick={() => handleScrollTo(item.id)}
            aria-label={`Navigate to ${item.label} section`}
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: navStyles.button.gap,
              textDecoration: "none",
              cursor: "pointer",
              padding: `${theme.spacing(navStyles.button.padding.y)} 0`,
              border: "none",
              background: "transparent",
              transition: theme.custom.transitions.hover,
              "&:hover": {
                transform: navStyles.hoverTransform,
                "& .nav-text": {
                  color: item.color,
                },
                "& .nav-bar": {
                  bgcolor: item.color,
                  opacity: 1,
                },
              },
            }}
          >
            <Box
              className="nav-bar"
              sx={{
                width: navStyles.barWidth,
                height: navStyles.barHeight,
                borderRadius: theme.custom.borderRadius.full,
                bgcolor: isActive ? item.color : "divider",
                opacity: isActive ? 1 : navStyles.barInactiveOpacity,
                transition: theme.custom.transitions.hover,
              }}
            />
            <DSTypography
              className="nav-text"
              variant="body"
              sx={{
                color: isActive ? item.color : "text.primary",
                fontWeight: isActive ? navStyles.text.fontWeight.active : navStyles.text.fontWeight.inactive,
                fontSize: navStyles.fontSize,
                letterSpacing: navStyles.letterSpacing,
                textTransform: navStyles.text.textTransform,
                transition: theme.custom.transitions.hover,
              }}
            >
              {item.label}
            </DSTypography>
          </Box>
        );
      })}
    </Stack>
  );
};
