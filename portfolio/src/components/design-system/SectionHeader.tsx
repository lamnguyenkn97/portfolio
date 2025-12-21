import React from "react";
import { Stack, useTheme, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Typography as DSTypography } from "./Typography";

export interface SectionHeaderProps {
  title: string;
  iconSize?: number;
  iconColor?: string;
  iconOpacity?: number;
}

/**
 * Design System Section Header Component
 * Consistent section headers with music note icon and staff line background
 * Features 5 horizontal staff lines (musical staff) behind music note icon and white text
 */
export const SectionHeader = ({
  title,
  iconSize = 16,
  iconColor = "white",
  iconOpacity = 1,
}: SectionHeaderProps) => {
  const theme = useTheme();

  // Create 5 horizontal lines for the musical staff - evenly spaced across full height
  const staffLines = Array.from({ length: 5 }, (_, i) => (
    <Box
      key={i}
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        top: `${15 + i * 15}%`, // Tighter spacing: 15%, 30%, 45%, 60%, 75% - fits full height
        height: "1px",
        bgcolor: "rgba(255, 255, 255, 0.3)", // Visible gray lines
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
      }}
    />
  ));

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{
        mb: theme.custom.componentStyles.sectionHeader.spacingBottom,
        mt: -1,
        pl: 1.5,
        position: "relative",
        minHeight: "60px", // Ensure enough height for staff lines
        zIndex: theme.custom.zIndex.base + 1,
      }}
    >
      {/* Staff lines background - 5 horizontal lines spanning full height */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: theme.custom.zIndex.base,
        }}
      >
        {staffLines}
      </Box>

      {/* Music note icon */}
      <FontAwesomeIcon
        icon={faMusic}
        style={{
          fontSize: iconSize,
          color: iconColor,
          opacity: iconOpacity,
          transition: theme.custom.transitions.hover,
          position: "relative",
          zIndex: theme.custom.zIndex.base + 1,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.8";
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = String(iconOpacity);
          e.currentTarget.style.transform = "scale(1)";
        }}
      />

      {/* Title text */}
      <DSTypography
        variant="sectionTitle"
        sx={{
          color: "white",
          position: "relative",
          zIndex: theme.custom.zIndex.base + 1,
        }}
      >
        {title}
      </DSTypography>
    </Stack>
  );
};
