import React from "react";
import { Box, Stack, Link, useTheme } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMusic } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { DSTypography } from "../design-system";
import { config } from "../../config/constants";

export const Footer = () => {
  const theme = useTheme();
  const footerStyles = theme.custom.componentStyles.footer;
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        maxWidth: footerStyles.maxWidth,
        mx: "auto",
        mt: footerStyles.marginTop,
        pt: footerStyles.paddingTop,
        pb: footerStyles.paddingBottom,
        color: "text.secondary",
        position: "relative",
      }}
    >
      <Stack spacing={1.2} alignItems="center" textAlign="center">
        <DSTypography
          variant="caption"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: footerStyles.tagline.gap,
            width: "100%",
            justifyContent: "center",
            opacity: footerStyles.tagline.opacity,
          }}
        >
          <FontAwesomeIcon
            icon={faMusic}
            style={{ fontSize: footerStyles.tagline.iconSize, color: "inherit" }}
          />
          Frontend Engineer • Seeking opportunities in Australia with 482 visa sponsorship
        </DSTypography>

        <Stack
          direction="row"
          spacing={footerStyles.links.spacing}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Link
            href={`mailto:${config.email}`}
            underline="hover"
            sx={theme.custom.componentStyles.link}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ marginRight: footerStyles.links.iconSpacing }}
            />
            Email
          </Link>
          <Link
            href={config.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={theme.custom.componentStyles.link}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ marginRight: footerStyles.links.iconSpacing }}
            />
            LinkedIn
          </Link>
          <Link
            href={config.github}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={theme.custom.componentStyles.link}
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ marginRight: footerStyles.links.iconSpacing }}
            />
            GitHub
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};
