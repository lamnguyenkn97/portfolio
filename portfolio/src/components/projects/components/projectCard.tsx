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
    <Card variant="spotify">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={theme.custom.componentStyles.projectCard.gap}
      >
        <Box
          component="img"
          alt="project-thumbnail"
          src={project.thumbnail}
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
            {project.title}
          </DSTypography>
          {project.techStack?.length || project.stats?.downloadsPerMonth ? (
            <Stack
              direction="row"
              spacing={theme.custom.componentStyles.projectCard.pillsSpacing}
              flexWrap="wrap"
              sx={{ mb: theme.spacing(theme.custom.componentStyles.projectCard.pillsMarginBottom) }}
            >
              {project.techStack?.map((tech) => (
                <Pill key={tech} variant="spotify">
                  {tech}
                </Pill>
              ))}
              {project.stats?.downloadsPerMonth && (
                <Pill
                  variant="spotify"
                  startIcon={
                    <FontAwesomeIcon icon={faDownload} style={{ fontSize: theme.custom.typography.fontSizes.xs }} />
                  }
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
              spacing={theme.custom.componentStyles.projectCard.buttonsSpacing}
              rowGap={theme.custom.componentStyles.projectCard.buttonsSpacing}
              flexWrap="wrap"
              alignItems="flex-start"
              sx={{ mt: theme.spacing(theme.custom.componentStyles.projectCard.buttonsMarginTop) }}
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
            ...theme.custom.borders.spotify,
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
