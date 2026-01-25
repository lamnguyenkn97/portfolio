import { useState, useEffect } from "react";
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
  description?: string; // Optional - can use features instead
  features?: string[]; // Bullet points for key features
  thumbnail?: string; // Optional since thumbnails are not displayed
  liveUrl?: string;
  repoUrl?: string;
  npmUrl?: string;
  demoUrl?: string;
  techStack?: string[];
  stats?: {
    downloadsPerMonth?: string;
  };
};

// Format number to readable format (e.g., 2500 -> "2.5k", 1500000 -> "1.5M")
const formatDownloads = (count: number): string => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
};

// Fetch NPM download stats
const useNpmDownloads = (npmUrl: string | undefined) => {
  const [downloads, setDownloads] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!npmUrl) return;

    // Extract package name from npm URL
    // e.g., https://www.npmjs.com/package/spotify-design-system -> spotify-design-system
    const packageMatch = npmUrl.match(/package\/([^/?]+)/);
    if (!packageMatch) return;

    const packageName = packageMatch[1];
    setLoading(true);

    // Fetch last month's downloads
    fetch(`https://api.npmjs.org/downloads/range/last-month/${packageName}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.downloads && Array.isArray(data.downloads)) {
          // Sum all downloads in the range
          const totalDownloads = data.downloads.reduce(
            (sum: number, day: { downloads: number }) => sum + (day.downloads || 0),
            0
          );
          setDownloads(formatDownloads(totalDownloads));
        }
      })
      .catch((error) => {
        console.error("Failed to fetch NPM downloads:", error);
        // Keep null on error - will fall back to static value if provided
      })
      .finally(() => {
        setLoading(false);
      });
  }, [npmUrl]);

  return { downloads, loading };
};

export const ProjectCard = ({ project }: { project: Project }) => {
  const theme = useTheme();
  const [openDemo, setOpenDemo] = useState(false);
  const { downloads: npmDownloads } = useNpmDownloads(project.npmUrl);

  // Use real-time NPM downloads if available, otherwise fall back to static value
  const displayDownloads = npmDownloads || project.stats?.downloadsPerMonth;

  // Convert Loom share URL to embed URL
  const getEmbedUrl = (url: string | undefined): string => {
    if (!url) return "";
    // Convert https://www.loom.com/share/VIDEO_ID to https://www.loom.com/embed/VIDEO_ID
    return url.replace("/share/", "/embed/");
  };

  return (
    <Card variant="spotify">
      <Box sx={{ flex: 1 }}>
        <DSTypography variant="projectTitle" spotify>
          {project.title}
        </DSTypography>
        {project.techStack?.length || displayDownloads ? (
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
            {displayDownloads && (
              <Pill
                variant="spotify"
                startIcon={
                  <FontAwesomeIcon
                    icon={faDownload}
                    style={{ fontSize: theme.custom.typography.fontSizes.xs }}
                  />
                }
              >
                Downloads: {displayDownloads}/month
              </Pill>
            )}
          </Stack>
        ) : null}
        {/* Description or Features */}
        {project.features?.length ? (
          <Stack
            spacing={theme.spacing(theme.custom.componentStyles.projectCard.featuresSpacing)}
            sx={{
              mb: theme.spacing(theme.custom.componentStyles.projectCard.descriptionMarginBottom),
            }}
          >
            {project.features.map((feature, idx) => {
              const expStyles = theme.custom.componentStyles.experienceCard;
              return (
                <DSTypography
                  key={idx}
                  variant="caption"
                  sx={{
                    color: "text.primary",
                    lineHeight: 1.6,
                    position: "relative",
                    pl: theme.spacing(expStyles.highlightMarker.padding), // Use same token as experience card
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: "0.5em", // Align with first line of text
                      transform: "translateY(-50%)", // Center vertically with first line
                      width: "3px", // 3px - slightly bigger bullet point
                      height: "3px", // 3px - slightly bigger bullet point
                      borderRadius: theme.custom.borderRadius.full,
                      bgcolor: "primary.main",
                      opacity: expStyles.highlightMarker.opacity,
                    },
                  }}
                >
                  {feature}
                </DSTypography>
              );
            })}
          </Stack>
        ) : project.description ? (
          <DSTypography
            variant="description"
            sx={{
              mb: theme.spacing(theme.custom.componentStyles.projectCard.descriptionMarginBottom),
              lineHeight: 1.6,
            }}
          >
            {project.description}
          </DSTypography>
        ) : null}

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
                aria-label="View live demo"
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
                aria-label="View source code on GitHub"
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
                aria-label="View on NPM registry"
              >
                npm
              </Button>
            )}
          </Stack>
        )}
      </Box>

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
              src={getEmbedUrl(project.demoUrl)}
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
