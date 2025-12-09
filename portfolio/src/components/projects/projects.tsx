import React, { useState } from "react";
import { Stack, Box, Typography, Button, Dialog, DialogContent } from "@mui/material";
import { Project, ProjectCard } from "./components";
import { MusicNoteIcon } from "../common/MusicNoteIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projects: Project[] = [
  {
    title: "Spotify Design System",
    description:
      "A comprehensive design system inspired by Spotify&apos;s visual language. Built with React, TypeScript, and modern design principles. Features component library, design tokens, and documentation.",
    thumbnail:
      "https://images.unsplash.com/photo-1567861911437-538298e4232c?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isSpotify: true,
    liveUrl: "https://spotify-storybook.vercel.app/",
    repoUrl: "https://github.com/lamnguyenkn97/spotify_design_system",
    npmUrl: "https://www.npmjs.com/package/spotify-design-system",
    demoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    techStack: ["React", "TypeScript", "Styled Components", "Storybook", "Design Tokens", "A11y/Perf"],
    stats: {
      downloadsPerMonth: "2.3k",
    },
  },
];

export const Projects = () => {
  const fanmadeDemoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  const [openFanmadeDemo, setOpenFanmadeDemo] = useState(false);

  return (
    <Stack spacing={4} sx={{ maxWidth: "640px" }}>
      {/* Section Header with Music Note */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 1,
          mt: -1,
          pl: 1.5,
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            right: 0,
            top: "50%",
            transform: "translateY(-60%)",
            height: 12,
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(238,200,106,0.32), rgba(238,200,106,0.32) 1px, transparent 1px, transparent 4px)",
            opacity: 0.45,
            pointerEvents: "none",
            zIndex: 0,
          },
          "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: -2,
            bottom: -2,
            width: "2px",
            borderRadius: "999px",
            background: "linear-gradient(180deg, rgba(238,200,106,0.6), rgba(238,200,106,0.15))",
            opacity: 0.8,
          },
          zIndex: 1,
        }}
      >
        <MusicNoteIcon size={18} color="secondary.main" opacity={0.75} />
        <Typography
          variant="h6"
          sx={{
            color: "text.primary",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Side Projects
        </Typography>
      </Box>

      {/* Spotify Fanmade hero */}
      <Box
        sx={{
          border: "1px solid",
          borderColor: "rgba(29, 185, 84, 0.4)",
          bgcolor: "rgba(29, 185, 84, 0.08)",
          borderRadius: 3,
          p: { xs: 3, sm: 4 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
          boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
        }}
      >
        <Box
          component="img"
          alt="Spotify Fanmade"
          src="https://images.unsplash.com/photo-1633002239926-181ca9b48a3e?q=80&w=3153&auto=format&fit=crop"
          sx={{
            width: { xs: "100%", sm: 180 },
            height: { xs: 160, sm: 180 },
            objectFit: "cover",
            borderRadius: 2,
            border: "1px solid",
            borderColor: "rgba(29, 185, 84, 0.3)",
          }}
        />
        <Box sx={{ flex: 1 }}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
            <MusicNoteIcon size={16} color="#1DB954" opacity={0.8} />
            <Typography
              variant="h6"
              sx={{ color: "#1DB954", fontWeight: 700, letterSpacing: "-0.01em" }}
            >
              Spotify Fanmade
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ mb: 1.25, flexWrap: "wrap" }}>
            {["React", "TypeScript", "Spotify Web API"].map((tech) => (
              <Box
                key={tech}
                sx={{
                  px: 1.2,
                  py: 0.5,
                  borderRadius: 999,
                  bgcolor: "rgba(29,185,84,0.12)",
                  color: "#1DB954",
                  border: "1px solid rgba(29,185,84,0.35)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                {tech}
              </Box>
            ))}
          </Stack>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              lineHeight: 1.7,
              mb: 2,
            }}
          >
            Fan-made Spotify experience with music discovery, playlists, and audio visualization.
            Built with React and Spotify Web API; features real-time data and interactive controls.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            rowGap={1}
            sx={{ flexWrap: "wrap", alignItems: "flex-start" }}
          >
            {fanmadeDemoUrl && (
              <Button
                variant="contained"
                size="small"
                onClick={() => setOpenFanmadeDemo(true)}
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  px: 2.4,
                  bgcolor: "#1DB954",
                  color: "#0b1a0f",
                  boxShadow: "0 6px 16px rgba(29,185,84,0.28)",
                  "&:hover": {
                    bgcolor: "#1ed760",
                    boxShadow: "0 8px 18px rgba(29,185,84,0.32)",
                  },
                }}
              >
                <FontAwesomeIcon icon={faCirclePlay} style={{ marginRight: 8 }} />
                Watch demo
              </Button>
            )}
            <Button
              variant="outlined"
              size="small"
              href="https://spotify-fanmade.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textTransform: "none",
                fontWeight: 700,
                borderColor: "rgba(29,185,84,0.5)",
                color: "#1DB954",
                px: 2,
                "&:hover": {
                  borderColor: "rgba(29,185,84,0.8)",
                },
              }}
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginRight: 6 }} />
              Live
            </Button>
            <Button
              variant="outlined"
              size="small"
              href="https://github.com/lamnguyenkn97/spotify_fanmade"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textTransform: "none",
                fontWeight: 700,
                borderColor: "rgba(29,185,84,0.5)",
                color: "#1DB954",
                px: 2,
                "&:hover": {
                  borderColor: "rgba(29,185,84,0.8)",
                },
              }}
            >
              <FontAwesomeIcon icon={faGithub} style={{ marginRight: 6 }} />
              GitHub
            </Button>
          </Stack>
        </Box>
      </Box>

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
            border: "1px solid",
            borderColor: "rgba(29,185,84,0.3)",
          },
        }}
      >
        <DialogContent sx={{ p: 0, position: "relative" }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              pb: "56.25%",
              overflow: "hidden",
              borderRadius: 1.5,
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
