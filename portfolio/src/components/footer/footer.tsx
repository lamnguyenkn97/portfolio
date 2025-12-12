import React from "react";
import { Box, Stack, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        maxWidth: 780,
        mx: "auto",
        mt: { xs: 6, md: 8 },
        pt: { xs: 3.5, md: 4.5 },
        pb: { xs: 4, md: 5 },
        color: "text.secondary",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "14px",
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(238,200,106,0.35), rgba(238,200,106,0.35) 1px, transparent 1px, transparent 4px)",
          opacity: 0.45,
          pointerEvents: "none",
        },
      }}
    >
      <Stack spacing={1.2} alignItems="center" textAlign="center" sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            px: 1.25,
            py: 0.6,
            borderRadius: 999,
            bgcolor: "rgba(238,200,106,0.08)",
            border: "1px solid rgba(238,200,106,0.25)",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 8px 18px rgba(0,0,0,0.18)",
          }}
        >
          <Box
            sx={{
              width: "2px",
              height: "80%",
              borderRadius: "999px",
              bgcolor: "secondary.main",
              opacity: 0.85,
            }}
          />
          <Stack direction="row" spacing={1} flexWrap="wrap" alignItems="center">
            <Typography
              component="span"
              variant="body2"
              sx={{ color: "text.primary", fontWeight: 700 }}
            >
              Lam Nguyen
            </Typography>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: "text.secondary", fontWeight: 600 }}
            >
              •
            </Typography>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: "text.primary", fontWeight: 600 }}
            >
              Frontend Engineer
            </Typography>
          </Stack>
        </Box>

        <Typography
          variant="body2"
          sx={{
            fontSize: "0.85rem",
            lineHeight: 1.6,
            color: "text.primary",
            fontWeight: 600,
            opacity: 0.92,
            display: "inline-flex",
            alignItems: "center",
            gap: 0.6,
            width: "100%",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Box component="span" sx={{ color: "secondary.main", fontSize: "0.9rem" }}>
            ♪
          </Box>
          Grown up in Saigon • Crafting my next chapter in Melbourne
        </Typography>

        <Stack direction="row" spacing={1.5} flexWrap="wrap" justifyContent="center">
          <Link
            component={RouterLink}
            to="/blog"
            underline="hover"
            sx={{ color: "secondary.main", fontWeight: 700, fontSize: "0.85rem" }}
          >
            Blog
          </Link>
          <Link
            href="mailto:your.email@example.com"
            underline="hover"
            sx={{ color: "secondary.main", fontWeight: 700, fontSize: "0.85rem" }}
          >
            Email
          </Link>
          <Link
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{ color: "secondary.main", fontWeight: 700, fontSize: "0.85rem" }}
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{ color: "secondary.main", fontWeight: 700, fontSize: "0.85rem" }}
          >
            GitHub
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};
