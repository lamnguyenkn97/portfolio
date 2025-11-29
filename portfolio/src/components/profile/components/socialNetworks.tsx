import React from "react";
import { Stack, IconButton } from "@mui/material";
import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";

export const SocialNetworks = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: LinkedIn, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: GitHub, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <Stack direction="row" spacing={2}>
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <IconButton
          key={label}
          component="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          sx={{
            color: "text.primary",
            "&:hover": {
              color: "primary.main",
              transform: "scale(1.1)",
            },
          }}
        >
          <Icon />
        </IconButton>
      ))}
    </Stack>
  );
};
