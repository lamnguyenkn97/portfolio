import { useState } from "react";
import { Box, Stack, Dialog, DialogContent, useTheme } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faBoxOpen,
  faCirclePlay,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Card, Button, Pill, DSTypography } from "../../design-system";

export type Project = {
  title: string;
  description: string;
  thumbnail: string;
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
  const theme = useTheme();
  const [openDemo, setOpenDemo] = useState(false);

  return (
    <Card variant="spotify" sx={{ position: "relative" }}>
      {/* Spotify accent indicator */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "3px",
          height: "100%",
          bgcolor: theme.custom.colors.spotify.green,
          borderRadius: `${theme.custom.borderRadius.sm} 0 0 ${theme.custom.borderRadius.sm}`,
        }}
      />

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
            borderRadius: theme.custom.borderRadius.md,
            border: "1px solid",
            borderColor: theme.custom.colorOpacity.spotify.hover,
            boxShadow: theme.custom.shadows.sm,
          }}
        />
        <Box sx={{ flex: 1, pl: 1 }}>
          <DSTypography variant="projectTitle" spotify>
            {project.title}
          </DSTypography>
          {project.techStack?.length || project.stats?.downloadsPerMonth ? (
            <Stack direction="row" spacing={0.6} flexWrap="wrap" sx={{ mb: 1 }}>
              {project.techStack?.map((tech) => (
                <Pill key={tech} variant="spotify">
                  {tech}
                </Pill>
              ))}
              {project.stats?.downloadsPerMonth && (
                <Pill
                  variant="spotify"
                  startIcon={<FontAwesomeIcon icon={faDownload} style={{ fontSize: "0.75rem" }} />}
                >
                  Downloads: {project.stats.downloadsPerMonth}/month
                </Pill>
              )}
            </Stack>
          ) : null}
          <DSTypography variant="description">{project.description}</DSTypography>

          {(project.liveUrl || project.repoUrl || project.npmUrl || project.demoUrl) && (
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
              rowGap={1}
              flexWrap="wrap"
              alignItems="flex-start"
              sx={{ mt: 1.5 }}
            >
              {project.demoUrl && (
                <Button
                  variant="primary"
                  size="small"
                  onClick={() => setOpenDemo(true)}
                  startIcon={<FontAwesomeIcon icon={faCirclePlay} />}
                >
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
                  startIcon={<FontAwesomeIcon icon={faExternalLinkAlt} />}
                  sx={{
                    borderColor: theme.custom.componentStyles.projectCardButton.spotify.borderColor,
                    color: theme.custom.componentStyles.projectCardButton.spotify.color,
                    "&:hover": {
                      borderColor: theme.custom.colors.spotify.green,
                      bgcolor: theme.custom.colorOpacity.spotify.light,
                    },
                  }}
                >
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
                  startIcon={<FontAwesomeIcon icon={faGithub} />}
                  sx={{
                    borderColor: theme.custom.componentStyles.projectCardButton.spotify.borderColor,
                    color: theme.custom.componentStyles.projectCardButton.spotify.color,
                    "&:hover": {
                      borderColor: theme.custom.colors.spotify.green,
                      bgcolor: theme.custom.colorOpacity.spotify.light,
                    },
                  }}
                >
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
                  startIcon={<FontAwesomeIcon icon={faBoxOpen} />}
                  sx={{
                    borderColor: theme.custom.componentStyles.projectCardButton.spotify.borderColor,
                    color: theme.custom.componentStyles.projectCardButton.spotify.color,
                    "&:hover": {
                      borderColor: theme.custom.colors.spotify.green,
                      bgcolor: theme.custom.colorOpacity.spotify.light,
                    },
                  }}
                >
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
              borderRadius: theme.custom.borderRadius.md,
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
    </Card>
  );
};
