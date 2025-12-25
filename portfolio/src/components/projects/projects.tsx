import React, { useState } from "react";
import { Stack, Box, Dialog, DialogContent, useTheme } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Button, SectionHeader, Pill, DSTypography, Card } from "../design-system";
import { Project, ProjectCard } from "./components";

const projects: Project[] = [
  {
    title: "Spotify Design System",
    description:
      "A comprehensive design system inspired by Spotify&apos;s visual language. Built with React, TypeScript, and modern design principles. Features component library, design tokens, and documentation.",
    thumbnail:
      "https://images.unsplash.com/photo-1567861911437-538298e4232c?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveUrl: "https://spotify-storybook.vercel.app/",
    repoUrl: "https://github.com/lamnguyenkn97/spotify_design_system",
    npmUrl: "https://www.npmjs.com/package/spotify-design-system",
    demoUrl: "https://www.loom.com/embed/0d0db7fc585b40dfaaf6035278552394",
    techStack: [
      "React",
      "TypeScript",
      "Storybook",
    ],
    stats: {
      downloadsPerMonth: "2.3k",
    },
  },
];

export const Projects = () => {
  const theme = useTheme();
  const fanmadeDemoUrl = "https://www.loom.com/embed/171c400f6b574762872c22e1bfc2590b";
  const [openFanmadeDemo, setOpenFanmadeDemo] = useState(false);

  return (
    <Stack
      spacing={theme.custom.layout.section.spacing}
      sx={{
        width: "100%",
        maxWidth: theme.spacing(theme.custom.layout.section.maxWidth),
      }}
    >
      <SectionHeader title="Side Projects" iconSize={18} />

      {/* Spotify Fanmade hero */}
      <Card variant="spotify">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={theme.custom.componentStyles.projectCard.gap}
        >
          <Box
            component="img"
            alt="Spotify Fanmade"
            src="https://images.unsplash.com/photo-1633002239926-181ca9b48a3e?q=80&w=3153&auto=format&fit=crop"
            sx={{
              width: theme.custom.componentStyles.projectCard.imageWidth,
              height: theme.custom.componentStyles.projectCard.imageHeight,
              minWidth: theme.custom.componentStyles.projectCard.imageWidth,
              objectFit: "cover",
              borderRadius: theme.custom.borderRadius.md,
              ...theme.custom.borders.spotify,
            }}
          />
          <Box sx={{ flex: 1, pl: theme.spacing(theme.custom.componentStyles.projectCard.contentPaddingLeft) }}>
            <DSTypography variant="projectTitle" spotify>
              Spotify Fanmade
            </DSTypography>
            <Stack
              direction="row"
              spacing={theme.custom.componentStyles.projectCard.pillsSpacing}
              flexWrap="wrap"
              sx={{ mb: theme.spacing(theme.custom.componentStyles.projectCard.pillsMarginBottom) }}
            >
              {["React", "TypeScript", "Spotify Web API"].map((tech) => (
                <Pill key={tech} variant="spotify">
                  {tech}
                </Pill>
              ))}
            </Stack>
            <DSTypography variant="description">
              Fan-made Spotify experience with music discovery, playlists, and audio visualization.
              Built with React and Spotify Web API; features real-time data and interactive
              controls.
            </DSTypography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={theme.custom.componentStyles.projectCard.buttonsSpacing}
              rowGap={theme.custom.componentStyles.projectCard.buttonsSpacing}
              flexWrap="wrap"
              alignItems="flex-start"
              sx={{ mt: theme.spacing(theme.custom.componentStyles.projectCard.buttonsMarginTop) }}
            >
              {fanmadeDemoUrl && (
                <Button
                  variant="primary"
                  size="small"
                  onClick={() => setOpenFanmadeDemo(true)}
                  startIcon={<FontAwesomeIcon icon={faCirclePlay} />}
                >
                  Watch demo
                </Button>
              )}
              <Button
                variant="outlined"
                size="small"
                href="https://spotify-fanmade.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<FontAwesomeIcon icon={faExternalLinkAlt} />}
              >
                Live
              </Button>
              <Button
                variant="outlined"
                size="small"
                href="https://github.com/lamnguyenkn97/spotify_fanmade"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<FontAwesomeIcon icon={faGithub} />}
              >
                GitHub
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Card>

      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}

      {/* Fanmade demo modal */}
      <Dialog
        open={openFanmadeDemo}
        onClose={() => setOpenFanmadeDemo(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "background.default",
            border: theme.custom.componentStyles.dialog.paper.border,
            borderColor: theme.custom.colorOpacity.spotify.medium,
          },
        }}
      >
        <DialogContent sx={{ p: 0, position: "relative" }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              pb: theme.custom.componentStyles.dialog.iframeAspectRatio,
              overflow: "hidden",
              borderRadius: theme.custom.borderRadius.md,
            }}
          >
            <Box
              component="iframe"
              src={fanmadeDemoUrl}
              title="Spotify Fanmade demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </Stack>
  );
};
