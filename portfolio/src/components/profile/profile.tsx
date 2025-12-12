import React, { useState } from "react";
import { Stack, Typography, Box, Chip, Button, IconButton } from "@mui/material";
import { NavBar } from "../navBar";
import { SocialNetworks, CurrentlyPlaying } from "./components";
import { AudioWaveform } from "../common/AudioWaveform";
import avatarImage from "../../assets/img/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCode, faMusic, faDumbbell, faShuffle } from "@fortawesome/free-solid-svg-icons";

export const Profile = () => {
  const folkloreCover = "https://i.scdn.co/image/ab67616d00001e02dea0d4c1b2b473e7abf48b18";
  const fallbackCover =
    "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=400&q=80";

  const moods = [
    {
      id: "folklore",
      label: "Folklore — Taylor Swift",
      sublabel: "Deep work",
      embedUrl: "https://open.spotify.com/embed/album/1pzvBxYgT6OVwJLtHkrdQK?utm_source=generator",
    },
    {
      id: "golden-hour",
      label: "Golden Hour — Kacey Musgraves",
      sublabel: "Glow mode",
      embedUrl: "https://open.spotify.com/embed/album/7fRrTyKvE4Skh93v97gtcU?utm_source=generator",
    },
    {
      id: "red-taylors-version",
      label: "Red (Taylor’s Version) — Taylor Swift",
      sublabel: "Energetic focus",
      embedUrl: "https://open.spotify.com/embed/album/6kZ42qRrzov54LcAk4onW9?utm_source=generator",
    },
    {
      id: "25-adele",
      label: "25 — Adele",
      sublabel: "Reflective",
      embedUrl: "https://open.spotify.com/embed/album/3AvPX1B1HiFROvYjLb5Qwi?utm_source=generator",
    },
  ];

  const [currentMood, setCurrentMood] = useState(moods[0]);
  const shuffleMood = () => {
    const others = moods.filter((m) => m.id !== currentMood.id);
    const next = others[Math.floor(Math.random() * others.length)];
    setCurrentMood(next || currentMood);
  };

  const moodBackgrounds: Record<string, string> = {
    folklore: "linear-gradient(135deg, rgba(120,120,120,0.18), rgba(60,60,60,0.28))",
    "golden-hour": "linear-gradient(135deg, rgba(255,197,122,0.24), rgba(255,160,90,0.24))",
    "red-taylors-version": "linear-gradient(135deg, rgba(190,40,40,0.2), rgba(130,30,30,0.24))",
    "25-adele": "linear-gradient(135deg, rgba(80,80,80,0.22), rgba(30,30,30,0.26))",
  };

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
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
            <Stack direction="row" alignItems="center" spacing={1.25}>
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
                  whiteSpace: "nowrap",
                }}
              >
                Now Playing
              </Box>
              <Box sx={{ width: 80, maxWidth: 120 }}>
                <AudioWaveform height={18} color="primary.main" bars={12} />
              </Box>
            </Stack>
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

              {/* Hobbies / interests */}
              <Stack direction="row" spacing={0.75} flexWrap="wrap">
                {[
                  { label: "Coding", icon: faCode },
                  { label: "Music", icon: faMusic },
                  { label: "Working out", icon: faDumbbell },
                ].map((item) => (
                  <Chip
                    key={item.label}
                    label={
                      <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.6 }}>
                        <FontAwesomeIcon icon={item.icon} />
                        <span>{item.label}</span>
                      </Box>
                    }
                    size="small"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.04)",
                      border: "1px solid",
                      borderColor: "divider",
                      color: "text.secondary",
                      fontWeight: 700,
                      letterSpacing: "0.01em",
                    }}
                  />
                ))}
              </Stack>
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

      {/* Current mood embed */}
      <Box
        sx={{
          mt: 2,
          borderRadius: 1.5,
          border: "1px solid",
          borderColor: "divider",
          boxShadow: "0 10px 22px rgba(0,0,0,0.16)",
          bgcolor: "background.paper",
          p: 1.5,
          display: "grid",
          gap: 1,
          backgroundImage: moodBackgrounds[currentMood.id] ?? "none",
        }}
      >
        <Stack spacing={0.4} direction="row" alignItems="center">
          <Typography
            variant="overline"
            sx={{ letterSpacing: "0.14em", color: "text.secondary", fontWeight: 800 }}
          >
            current mood
          </Typography>
          <IconButton
            size="small"
            onClick={shuffleMood}
            sx={{
              color: "secondary.main",
              "&:hover": { color: "secondary.dark", backgroundColor: "transparent" },
              p: 0.25,
            }}
            aria-label="Shuffle mood"
          >
            <FontAwesomeIcon icon={faShuffle} />
          </IconButton>
        </Stack>
        <Box
          component="iframe"
          src={currentMood.embedUrl}
          title={currentMood.label}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          sx={{
            border: 0,
            width: "100%",
            height: 152,
            display: "block",
          }}
        />
      </Box>

      {/* Currently Playing */}
      <CurrentlyPlaying />
    </Stack>
  );
};
