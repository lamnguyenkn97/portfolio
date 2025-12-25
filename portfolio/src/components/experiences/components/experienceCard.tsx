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
            <DSTypography variant="companyName" sx={{ fontWeight: 700 }}>
              {company}
            </DSTypography>
          </Link>
        ) : (
          <DSTypography variant="companyName" sx={{ fontWeight: 700, mb: theme.spacing(expStyles.companyMarginBottom) }}>
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
          <Stack spacing={theme.spacing(expStyles.highlightsSpacing)} sx={{ mb: theme.spacing(expStyles.highlightsMarginBottom) }}>
            {highlights.map((item, idx) => (
              <DSTypography key={idx} variant="caption" sx={{ color: "text.primary" }}>{item}</DSTypography>
            ))}
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
