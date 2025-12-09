import React from "react";
import { Stack, Typography, Box, Chip, Button } from "@mui/material";
import { NavBar } from "../navBar";
import { SocialNetworks, CurrentlyPlaying } from "./components";
import { AudioWaveform } from "../common/AudioWaveform";
import avatarImage from "../../assets/img/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export const Profile = () => {
  return (
    <Stack spacing={3.25}>
      {/* Now Playing / Hero */}
      <Box
        sx={{
          p: 2.5,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        }}
      >
        <Stack spacing={2}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Box
              sx={{
                px: 1.5,
                py: 0.5,
                borderRadius: 999,
                bgcolor: "rgba(0,194,184,0.12)",
                color: "primary.main",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Now Playing
            </Box>
            <Stack direction="row" spacing={1}>
              <Chip
                label="Melbourne • 482"
                size="small"
                sx={{
                  bgcolor: "rgba(245,193,86,0.12)",
                  color: "secondary.main",
                  borderColor: "rgba(245,193,86,0.3)",
                  fontWeight: 600,
                }}
                variant="outlined"
              />
            </Stack>
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="center">
            {/* Avatar */}
            <Box
              sx={{
                width: { xs: "120px", sm: "140px" },
                height: { xs: "120px", sm: "140px" },
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid",
                borderColor: "divider",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              }}
            >
              <Box
                component="img"
                src={avatarImage}
                alt="Lam Nguyen"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 250ms ease",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              />
            </Box>

            {/* Track info */}
            <Stack spacing={1} sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "1.8rem", sm: "2.1rem", md: "2.4rem" },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  color: "text.primary",
                  wordBreak: "keep-all",
                }}
              >
                Lam Nguyen — Frontend Engineer
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  maxWidth: "640px",
                  lineHeight: 1.6,
                }}
              >
                Building accessible, performance-focused web experiences. I blend design systems,
                music-inspired craft, and reliable delivery.
              </Typography>
              <AudioWaveform height={28} color="primary.main" bars={18} />
            </Stack>
          </Stack>
        </Stack>
      </Box>

      {/* Navigation */}
      <Box sx={{ mt: 3 }}>
        <NavBar />
      </Box>

      {/* Social Networks */}
      <Box sx={{ mt: 1.5 }}>
        <SocialNetworks />
      </Box>

      {/* Resume CTA */}
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          href="#"
          disableElevation
          startIcon={<FontAwesomeIcon icon={faCirclePlay} size="sm" />}
          sx={{
            fontWeight: 800,
            textTransform: "none",
            letterSpacing: "0.04em",
            px: 2.8,
            py: 1.05,
            borderRadius: 999,
            bgcolor: "secondary.main",
            color: "#0d0f12",
            boxShadow: "0 10px 24px rgba(238,200,106,0.28)",
            "&:hover": {
              bgcolor: "#f1d17a",
              boxShadow: "0 12px 26px rgba(238,200,106,0.34)",
            },
            "&:active": {
              boxShadow: "0 6px 16px rgba(238,200,106,0.25)",
            },
          }}
        >
          View full resume
        </Button>
      </Box>

      {/* Currently Playing */}
      <CurrentlyPlaying />
    </Stack>
  );
};
