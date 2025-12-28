import React from "react";
import { Box, Stack, Link, useTheme } from "@mui/material";
import { Card, Pill, DSTypography } from "../../design-system";

export type Experience = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  skillSet: string[];
  companyUrl?: string;
  highlights?: string[];
};

const renderHighlightWithLinks = (text: string) => {
  // Map of client names to their URLs
  const clientLinks: Record<string, string> = {
    GoodNature: "https://www.goodnature.com/",
    FeelGoodz: "https://feelgoodz.com/",
  };

  // Project/system names to make bold (ordered by length - longer first to avoid partial matches)
  const projectNames = [
    "Early Intervention System",
    "Training System",
    "Report PDF Review",
    "Personnel System",
    "Accounting Module",
    "Shopify integration",
    "ERP modules",
    "EIS",
  ];

  // Client names (only public/commercial clients, not agency names)
  const clientNames = ["GoodNature", "FeelGoodz"];

  // Build regex pattern for all project names (escape special chars)
  const projectPattern = projectNames
    .map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");

  // Build regex pattern for client/agency names
  const clientNamePattern = clientNames
    .map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");

  // Combined pattern: client links OR project names OR client/agency names
  const combinedPattern = new RegExp(
    `(${projectPattern}|${clientNamePattern}|GoodNature|FeelGoodz)`,
    "gi"
  );

  const parts = text.split(combinedPattern);
  const result: React.ReactNode[] = [];

  parts.forEach((part, idx) => {
    if (!part) return; // Skip empty strings

    const lowerPart = part.toLowerCase();

    // Check if it's a client link
    if (clientLinks[part]) {
      result.push(
        <Link
          key={`link-${idx}`}
          href={clientLinks[part]}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontWeight: 600,
            color: "primary.main",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {part}
        </Link>
      );
      return;
    }

    // Check if it's a project name (case-insensitive)
    const isProjectName = projectNames.some((name) => name.toLowerCase() === lowerPart);

    if (isProjectName) {
      result.push(
        <Box key={`project-${idx}`} component="span" sx={{ fontWeight: 600 }}>
          {part}
        </Box>
      );
      return;
    }

    // Check if it's a client/agency name (case-insensitive)
    const isClientName = clientNames.some((name) => name.toLowerCase() === lowerPart);

    if (isClientName) {
      result.push(
        <Box key={`client-${idx}`} component="span" sx={{ fontWeight: 600, color: "primary.main" }}>
          {part}
        </Box>
      );
      return;
    }

    // Regular text
    result.push(<span key={`text-${idx}`}>{part}</span>);
  });

  return <>{result}</>;
};

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const theme = useTheme();
  const { title, company, startDate, endDate, description, skillSet, companyUrl, highlights } =
    experience;
  const expStyles = theme.custom.componentStyles.experienceCard;

  return (
    <Card variant="gold">
      <Box sx={{ flex: 1, minWidth: 0 }}>
        {/* Header */}
        <Stack
          direction="row"
          spacing={theme.spacing(expStyles.headerSpacing)}
          alignItems="center"
          sx={{ mb: theme.spacing(expStyles.headerMarginBottom) }}
        >
          <DSTypography variant="dateRange">
            {startDate} — {endDate}
          </DSTypography>
        </Stack>

        <DSTypography variant="experienceTitle">{title}</DSTypography>

        {companyUrl ? (
          <Link
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mb: theme.spacing(expStyles.companyMarginBottom) }}
          >
            <DSTypography variant="companyName">{company}</DSTypography>
          </Link>
        ) : (
          <DSTypography
            variant="companyName"
            sx={{ mb: theme.spacing(expStyles.companyMarginBottom) }}
          >
            {company}
          </DSTypography>
        )}

        {/* Description */}
        <DSTypography
          variant="description"
          sx={{
            mb: highlights?.length
              ? theme.spacing(expStyles.descriptionMarginBottom)
              : theme.spacing(expStyles.descriptionMarginBottomNoHighlights),
          }}
        >
          {description}
        </DSTypography>

        {/* Highlights (impact bullets) */}
        {highlights?.length ? (
          <Stack
            spacing={theme.spacing(expStyles.highlightsSpacing)}
            sx={{ mb: theme.spacing(expStyles.highlightsMarginBottom) }}
          >
            {highlights.map((item, idx) => {
              // Determine if this is a project highlight or quality/testing highlight
              // For Axon: first 4 are projects, last 2 are quality/testing
              // For Novobi: all are projects, no divider needed
              const isProjectHighlight = (company === "Axon" && idx < 4) || company === "Novobi"; // Novobi: all bullets are projects

              // Add extra spacing before quality/testing highlights
              const isQualityHighlight = !isProjectHighlight;
              const previousIsProject = company === "Axon" && idx === 4; // Only show divider for Axon

              return (
                <Box
                  key={idx}
                  sx={{
                    pt: previousIsProject ? theme.spacing(expStyles.highlightsGroupSpacing) : 0,
                    position: "relative",
                  }}
                >
                  {previousIsProject && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "1px",
                        background: `linear-gradient(to right, transparent, ${theme.palette.divider}, transparent)`,
                        opacity: 0.5, // Increased from 0.3 for better visibility
                      }}
                    />
                  )}
                  <DSTypography
                    variant="caption"
                    sx={{
                      color: "text.primary",
                      lineHeight: 1.6,
                      position: "relative",
                      pl: theme.spacing(expStyles.highlightMarker.padding), // Use token for padding
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
                    {renderHighlightWithLinks(item)}
                  </DSTypography>
                </Box>
              );
            })}
          </Stack>
        ) : null}

        {/* Skills */}
        <Stack
          direction="row"
          spacing={theme.spacing(expStyles.skillsSpacing)}
          flexWrap="wrap"
          sx={{ mt: theme.spacing(expStyles.skillsMarginTop) }}
        >
          {skillSet.map((skill, idx) => (
            <Pill key={skill + idx.toString()} variant="skill">
              {skill}
            </Pill>
          ))}
        </Stack>
      </Box>
    </Card>
  );
};
