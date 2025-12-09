import { useState } from "react";
import { Box, Stack, Typography, Button, Dialog, DialogContent } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faBoxOpen, faCirclePlay, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export type Project = {
  title: string;
  description: string;
  thumbnail: string;
  isSpotify?: boolean; // Flag for Spotify-related projects
  liveUrl?: string;
  repoUrl?: string;
  npmUrl?: string;
   demoUrl?: string;
  techStack?: string[];
  stats?: {
    downloadsPerMonth?: string;
  };
};

export const ProjectCard = ({ project }: { project: Project }) => {
  const isSpotify = project.isSpotify || project.title.toLowerCase().includes("spotify");
  const [openDemo, setOpenDemo] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        p: 2.5,
        borderRadius: 2,
        border: "1px solid",
        borderColor: isSpotify ? "rgba(29, 185, 84, 0.2)" : "divider",
        bgcolor: isSpotify ? "rgba(29, 185, 84, 0.05)" : "transparent",
        transition: "all 300ms ease",
        "&:hover": {
          borderColor: isSpotify ? "rgba(29, 185, 84, 0.4)" : "divider",
          bgcolor: isSpotify ? "rgba(29, 185, 84, 0.08)" : "background.paper",
          transform: "translateY(-2px)",
          boxShadow: (theme) =>
            isSpotify
              ? `0 4px 16px rgba(29, 185, 84, 0.15)`
              : `0 4px 12px ${theme.palette.mode === "dark" ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)"}`,
        },
      }}
    >
      {/* Spotify accent indicator */}
      {isSpotify && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "3px",
            height: "100%",
            bgcolor: "#1DB954",
            borderRadius: "2px 0 0 2px",
          }}
        />
      )}

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Box
          component="img"
          alt="project-thumbnail"
          src={project.thumbnail}
          sx={{
            width: { xs: "100%", sm: 80 },
            height: { xs: "auto", sm: 80 },
            minWidth: { sm: 80 },
            objectFit: "cover",
            borderRadius: 1.5,
            border: "1px solid",
            borderColor: isSpotify ? "rgba(29, 185, 84, 0.3)" : "divider",
            boxShadow: isSpotify ? "0 2px 8px rgba(29, 185, 84, 0.1)" : "none",
          }}
        />
        <Box sx={{ flex: 1, pl: isSpotify ? 1 : 0 }}>
          <Typography
            variant="h6"
            sx={{
              color: isSpotify ? "#1DB954" : "text.primary",
              fontWeight: 600,
              mb: 0.5,
            }}
          >
            {project.title}
          </Typography>
          {project.techStack?.length ? (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.6,
                alignItems: "center",
                mb: 1,
              }}
            >
              {project.techStack.map((tech) => (
                <Box
                  key={tech}
                  sx={{
                    px: 1.1,
                    py: 0.45,
                    borderRadius: 999,
                    minHeight: 26,
                    display: "inline-flex",
                    alignItems: "center",
                    bgcolor: isSpotify ? "rgba(29,185,84,0.12)" : "rgba(255,255,255,0.04)",
                    color: isSpotify ? "#1DB954" : "text.secondary",
                    border: "1px solid",
                    borderColor: isSpotify ? "rgba(29,185,84,0.35)" : "divider",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Box>
          ) : null}
          {project.stats?.downloadsPerMonth ? (
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                px: 1.15,
                py: 0.45,
                borderRadius: 999,
                bgcolor: isSpotify ? "rgba(29,185,84,0.12)" : "rgba(255,255,255,0.04)",
                border: "1px solid",
                borderColor: isSpotify ? "rgba(29,185,84,0.35)" : "divider",
                color: isSpotify ? "#1DB954" : "text.secondary",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.01em",
                mb: 0.75,
                gap: 0.5,
              }}
            >
              <FontAwesomeIcon icon={faDownload} style={{ fontSize: "0.75rem" }} />
              Downloads: {project.stats.downloadsPerMonth}/month
            </Box>
          ) : null}
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              lineHeight: 1.75,
            }}
          >
            {project.description}
          </Typography>

          {(project.liveUrl || project.repoUrl || project.npmUrl || project.demoUrl) && (
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
              rowGap={1}
              sx={{ mt: 1.5, flexWrap: "wrap", alignItems: "flex-start" }}
            >
              {project.demoUrl && (
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => setOpenDemo(true)}
                  sx={{
                    textTransform: "none",
                    fontWeight: 700,
                    px: 2.4,
                    bgcolor: isSpotify ? "#1DB954" : "primary.main",
                    color: isSpotify ? "#0b1a0f" : "#0d0f12",
                    boxShadow: isSpotify
                      ? "0 6px 16px rgba(29,185,84,0.28)"
                      : "0 6px 16px rgba(0,0,0,0.18)",
                    "&:hover": {
                      bgcolor: isSpotify ? "#1ed760" : "primary.light",
                      boxShadow: isSpotify
                        ? "0 8px 18px rgba(29,185,84,0.32)"
                        : "0 8px 18px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faCirclePlay} style={{ marginRight: 8 }} />
                  Watch demo
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  variant="outlined"
                  size="small"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textTransform: "none",
                    borderColor: isSpotify ? "rgba(29,185,84,0.5)" : "divider",
                    color: isSpotify ? "#1DB954" : "text.primary",
                  }}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginRight: 6 }} />
                  Live
                </Button>
              )}
              {project.repoUrl && (
                <Button
                  variant="outlined"
                  size="small"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textTransform: "none",
                    borderColor: isSpotify ? "rgba(29,185,84,0.5)" : "divider",
                    color: isSpotify ? "#1DB954" : "text.primary",
                  }}
                >
                  <FontAwesomeIcon icon={faGithub} style={{ marginRight: 6 }} />
                  GitHub
                </Button>
              )}
              {project.npmUrl && (
                <Button
                  variant="outlined"
                  size="small"
                  href={project.npmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textTransform: "none",
                    borderColor: isSpotify ? "rgba(29,185,84,0.5)" : "divider",
                    color: isSpotify ? "#1DB954" : "text.primary",
                  }}
                >
                  <FontAwesomeIcon icon={faBoxOpen} style={{ marginRight: 6 }} />
                  npm
                </Button>
              )}
            </Stack>
          )}
        </Box>
      </Stack>

      {/* Demo modal */}
      <Dialog
        open={openDemo}
        onClose={() => setOpenDemo(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "background.default",
            border: "1px solid",
            borderColor: isSpotify ? "rgba(29,185,84,0.3)" : "divider",
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
              src={project.demoUrl}
              title={`${project.title} demo`}
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
    </Box>
  );
};
