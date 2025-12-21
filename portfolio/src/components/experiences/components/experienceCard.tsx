import React from "react";
import { Box, Stack, useTheme } from "@mui/material";
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

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const theme = useTheme();
  const { title, company, startDate, endDate, description, skillSet, companyUrl, highlights } =
    experience;
  const expStyles = theme.custom.componentStyles.experienceCard;

  return (
    <Card
      variant="gold"
      sx={{
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-1px)",
          "& .accent-bar": {
            bgcolor: "secondary.main",
            opacity: expStyles.accentBar.opacityHover,
          },
        },
      }}
    >
      <Stack direction="row" spacing={2} alignItems="flex-start">
        {/* Left accent bar */}
        <Box
          className="accent-bar"
          sx={{
            width: expStyles.accentBar.width,
            height: "100%",
            minHeight: expStyles.accentBar.minHeight,
            borderRadius: expStyles.accentBar.borderRadius,
            bgcolor: "divider",
            opacity: expStyles.accentBar.opacity,
            transition: theme.custom.transitions.hover,
          }}
        />

        {/* Content Section */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          {/* Header */}
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
            <DSTypography variant="dateRange">
              {startDate} — {endDate}
            </DSTypography>
          </Stack>

          <DSTypography variant="experienceTitle">{title}</DSTypography>

          {companyUrl ? (
            <Box
              component="a"
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: "none",
                display: "inline-block",
                mb: 1.5,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              <DSTypography variant="companyName" sx={{ fontWeight: 700 }}>
                {company}
              </DSTypography>
            </Box>
          ) : (
            <DSTypography variant="companyName" sx={{ fontWeight: 700, mb: 1.5 }}>
              {company}
            </DSTypography>
          )}

          {/* Description */}
          <DSTypography
            variant="description"
            sx={{
              mb: highlights?.length ? expStyles.description.marginBottom : 2,
              // fontSize and opacity are now handled by DSTypography variant="description"
            }}
          >
            {description}
          </DSTypography>

          {/* Highlights (impact bullets) */}
          {highlights?.length ? (
            <Box
              component="ul"
              sx={{
                listStyle: "disc",
                pl: 2.5,
                mb: expStyles.highlights.marginBottom,
                color: "text.secondary",
                lineHeight: 1.7,
              }}
            >
              {highlights.map((item, idx) => (
                <Box component="li" key={idx} sx={{ mb: expStyles.highlights.spacing }}>
                  <DSTypography variant="caption">{item}</DSTypography>
                </Box>
              ))}
            </Box>
          ) : null}

          {/* Skills */}
          <Stack direction="row" spacing={0.75} flexWrap="wrap">
            {skillSet.map((skill, idx) => (
              <Pill key={skill + idx.toString()} variant="skill">
                {skill}
              </Pill>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
};
