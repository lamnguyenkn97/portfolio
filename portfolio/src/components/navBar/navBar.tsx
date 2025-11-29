import { Stack, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/about-me", label: "About me" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
  ];

  return (
    <Stack spacing={2}>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Typography
            key={item.path}
            component={Link}
            to={item.path}
            variant="body1"
            sx={{
              textDecoration: "none",
              color: isActive ? "primary.main" : "text.primary",
              fontWeight: isActive ? 600 : 400,
              transition: "all 250ms ease",
              "&:hover": {
                color: "primary.main",
                transform: "translateX(4px)",
              },
            }}
          >
            {item.label}
          </Typography>
        );
      })}
    </Stack>
  );
};
