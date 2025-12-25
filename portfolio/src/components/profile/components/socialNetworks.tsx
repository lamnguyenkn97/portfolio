import React from "react";
import { Stack, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { config } from "../../../config/constants";

export const SocialNetworks = () => {
  const socialLinks = [
    { icon: faFacebook, href: config.social.facebook, label: "Facebook" },
    { icon: faLinkedin, href: config.social.linkedin, label: "LinkedIn" },
    { icon: faGithub, href: config.social.github, label: "GitHub" },
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
            },
          }}
        >
          <FontAwesomeIcon icon={Icon} />
        </IconButton>
      ))}
    </Stack>
  );
};
