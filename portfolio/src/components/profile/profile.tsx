import React, { useState } from "react";
import { Stack, Box, Chip, IconButton, useTheme } from "@mui/material";
import { Button, Badge, Container, Avatar, Card, DSTypography } from "../design-system";
import { NavBar } from "../navBar";
import { SocialNetworks, CurrentlyPlaying } from "./components";
import { AudioWaveform } from "../common/AudioWaveform";
import avatarImage from "../../assets/img/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMusic, faDumbbell, faShuffle, faFile } from "@fortawesome/free-solid-svg-icons";
import moodsData from "../../data/moods.json";
import { config } from "../../config/constants";

export type Mood = {
  id: string;
  label: string;
  artist: string;
  embedUrl: string;
  background: string;
};

export const Profile = () => {
  const theme = useTheme();
  const moods: Mood[] = moodsData.moods;
  const [currentMood, setCurrentMood] = useState<Mood>(moods[0]);

  const shuffleMood = () => {
    const others = moods.filter((m) => m.id !== currentMood.id);
    const next = others[Math.floor(Math.random() * others.length)];
    setCurrentMood(next || currentMood);
  };

  return (
    <Stack spacing={3.25}>
      {/* Now Playing / Hero */}
      <Container
        variant="default"
        sx={{
          backgroundImage: theme.custom.gradients.hero,
          borderColor: theme.custom.colorOpacity.teal.light,
        }}
      >
        <Stack spacing={2}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
            <Stack direction="row" alignItems="center" spacing={1.25}>
              <Badge label="Now Playing" variant="teal" />
              <Box sx={{ width: 80, maxWidth: 120 }}>
                <AudioWaveform height={18} color="primary.main" bars={12} />
              </Box>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Badge label="Open for 482" variant="gold" />
            </Stack>
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="center">
            <Avatar src={avatarImage} alt="Lam Nguyen" size="medium" />

            {/* Track info */}
            <Stack spacing={1} sx={{ flex: 1, minWidth: 0 }}>
              <DSTypography variant="hero">Lam Nguyen — Frontend Engineer</DSTypography>
              <DSTypography variant="description" sx={{ maxWidth: "640px", lineHeight: 1.6 }}>
                Building accessible, performance-focused web experiences. I blend design systems,
                music-inspired craft, and reliable delivery.
              </DSTypography>

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
                      <Box
                        component="span"
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: theme.spacing(0.75),
                        }}
                      >
                        <FontAwesomeIcon icon={item.icon} style={{ fontSize: "0.875rem" }} />
                        <span>{item.label}</span>
                      </Box>
                    }
                    size="small"
                    sx={theme.custom.componentStyles.hobbyChip}
                  />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>

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
          variant="primary"
          size="small"
          href={config.resumeUrl}
          target={config.resumeUrl !== "#" ? "_blank" : undefined}
          rel={config.resumeUrl !== "#" ? "noopener noreferrer" : undefined}
          startIcon={<FontAwesomeIcon icon={faFile} size="sm" />}
          aria-label="View full resume"
        >
          View full resume
        </Button>
      </Box>

      {/* Current mood embed */}
      <Card
        variant="default"
        sx={{
          mt: 2,
          p: 1.5,
          display: "grid",
          gap: 1,
          backgroundImage: currentMood.background ?? "none",
        }}
      >
        <Stack spacing={0.4} direction="row" alignItems="center">
          <DSTypography variant="overline">current mood</DSTypography>
          <IconButton
            size="small"
            onClick={shuffleMood}
            sx={{
              color: "secondary.main",
              "&:hover": { color: "secondary.dark", backgroundColor: "transparent" },
              p: theme.spacing(0.25),
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
      </Card>

      {/* Currently Playing */}
      <CurrentlyPlaying />
    </Stack>
  );
};
