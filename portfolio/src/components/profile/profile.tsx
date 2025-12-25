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

  const profileStyles = theme.custom.componentStyles.profile;

  return (
    <Stack spacing={theme.spacing(profileStyles.containerSpacing)}>
      {/* Now Playing / Hero */}
      <Container
        variant="default"
        sx={{
          backgroundImage: theme.custom.gradients.hero,
          borderColor: theme.custom.colorOpacity.teal.light,
        }}
      >
        <Stack spacing={theme.spacing(profileStyles.heroSpacing)}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={theme.spacing(profileStyles.heroHeaderSpacing)}>
            <Stack direction="row" alignItems="center" spacing={theme.spacing(profileStyles.heroBadgeSpacing)}>
              <Badge label="Now Playing" variant="teal" />
              <Box sx={{ width: profileStyles.audioWaveformWidth, maxWidth: profileStyles.audioWaveformMaxWidth }}>
                <AudioWaveform height={profileStyles.audioWaveformHeight} color="primary.main" bars={12} />
              </Box>
            </Stack>
            <Stack direction="row" spacing={theme.spacing(profileStyles.heroSpacing)}>
              <Badge label="Open for 482" variant="gold" />
            </Stack>
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={theme.spacing(profileStyles.heroSpacing)} alignItems="center">
            <Avatar src={avatarImage} alt="Lam Nguyen" size="medium" />

            {/* Track info */}
            <Stack spacing={theme.spacing(profileStyles.trackInfoSpacing)} sx={{ flex: 1, minWidth: 0 }}>
              <DSTypography variant="hero">Lam Nguyen — Frontend Engineer</DSTypography>
              <DSTypography 
                variant="description" 
                sx={{ 
                  maxWidth: theme.spacing(profileStyles.descriptionMaxWidth), 
                  lineHeight: profileStyles.descriptionLineHeight 
                }}
              >
                Building accessible, performance-focused web experiences. I blend design systems,
                music-inspired craft, and reliable delivery.
              </DSTypography>

              {/* Hobbies / interests */}
              <Stack direction="row" spacing={theme.spacing(profileStyles.hobbiesSpacing)} flexWrap="wrap">
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
                          gap: theme.spacing(profileStyles.hobbyChipIconGap),
                        }}
                      >
                        <FontAwesomeIcon
                          icon={item.icon}
                          style={{ fontSize: theme.custom.typography.fontSizes.sm }}
                        />
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
      <Box sx={{ mt: theme.spacing(profileStyles.navMarginTop) }}>
        <NavBar />
      </Box>

      {/* Social Networks */}
      <Box sx={{ mt: theme.spacing(profileStyles.socialMarginTop) }}>
        <SocialNetworks />
      </Box>

      {/* Resume CTA */}
      <Box sx={{ mt: theme.spacing(profileStyles.resumeMarginTop) }}>
        <Button
          variant="outlined"
          size="small"
          href={config.resumeUrl}
          target={config.resumeUrl !== "#" ? "_blank" : undefined}
          rel={config.resumeUrl !== "#" ? "noopener noreferrer" : undefined}
          startIcon={<FontAwesomeIcon icon={faFile} size="sm" />}
          aria-label="View full resume"
          sx={{
            textTransform: "none",
            fontWeight: profileStyles.resumeButton.fontWeight,
            fontSize: profileStyles.resumeButton.fontSize,
            color: "text.primary",
            bgcolor: "background.paper",
            borderColor: "divider",
            borderWidth: 1,
            borderRadius: theme.custom.borderRadius.md,
            px: theme.spacing(profileStyles.resumeButton.padding.x),
            py: theme.spacing(profileStyles.resumeButton.padding.y),
            "&:hover": {
              borderColor: "primary.main",
              bgcolor: "background.paper",
              color: "primary.main",
            },
          }}
        >
          View full resume
        </Button>
      </Box>

      {/* Current mood embed */}
      <Card
        variant="default"
        sx={{
          mt: theme.spacing(profileStyles.moodCard.marginTop),
          p: theme.spacing(profileStyles.moodCard.padding),
          display: "grid",
          gap: theme.spacing(profileStyles.moodCard.gap),
          backgroundImage: currentMood.background ?? "none",
        }}
      >
        <Stack spacing={theme.spacing(profileStyles.moodHeaderSpacing)} direction="row" alignItems="center">
          <DSTypography variant="overline" color={"white"}>
            current mood
          </DSTypography>
          <IconButton
            size="small"
            onClick={shuffleMood}
            sx={{
              color: "secondary.main",
              "&:hover": { color: "secondary.dark", backgroundColor: "transparent" },
              p: theme.spacing(profileStyles.moodIconButtonPadding),
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
            height: profileStyles.moodIframeHeight,
            display: "block",
          }}
        />
      </Card>

      {/* Currently Playing */}
      <CurrentlyPlaying />
    </Stack>
  );
};
