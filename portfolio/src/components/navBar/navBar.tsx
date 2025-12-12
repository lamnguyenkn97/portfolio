import { Stack, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "ABOUT", color: "primary.main" }, // Teal
  { id: "experience", label: "EXPERIENCE", color: "secondary.main" }, // Gold (piano)
  { id: "projects", label: "PROJECTS", color: "#1DB954" }, // Spotify green
  { id: "journals", label: "JOURNALS", color: "secondary.main" },
];

export const NavBar = () => {
  const [activeSection, setActiveSection] = useState("about");

  // Handle scroll to section
  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset from top
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
        resolved.find((section) => viewportProbe >= section.top && viewportProbe < section.bottom) ||
        resolved[resolved.length - 1];

      if (current && current.id !== activeSection) {
        setActiveSection(current.id);
      }
    };

    // Set initial active section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Stack spacing={1.25}>
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <Box
            key={item.id}
            component="button"
            onClick={() => handleScrollTo(item.id)}
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: 1.25,
              textDecoration: "none",
              cursor: "pointer",
              padding: "10px 0",
              border: "none",
              background: "transparent",
              transition: "all 220ms ease",
              "&:hover": {
                transform: "translateX(3px)",
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
                width: "5px",
                height: "28px",
                borderRadius: "999px",
                bgcolor: isActive ? item.color : "divider",
                opacity: isActive ? 1 : 0.5,
                transition: "all 220ms ease",
              }}
            />
            <Typography
              className="nav-text"
              variant="body1"
              sx={{
                color: isActive ? item.color : "text.primary",
                fontWeight: isActive ? 700 : 500,
                fontSize: "0.9rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "all 220ms ease",
              }}
            >
              {item.label}
            </Typography>
          </Box>
        );
      })}
    </Stack>
  );
};
