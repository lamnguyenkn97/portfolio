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
export const SectionHeader = ({ title, iconSize, iconColor, iconOpacity }: SectionHeaderProps) => {
  const theme = useTheme();
  const sectionHeaderTokens = theme.custom.componentStyles.sectionHeader;

  // Use tokens with props as overrides
  const finalIconSize = iconSize ?? sectionHeaderTokens.icon.size;
  const finalIconColor = iconColor ?? sectionHeaderTokens.icon.color;
  const finalIconOpacity = iconOpacity ?? sectionHeaderTokens.icon.opacity;

  // Create staff lines using tokens
  const staffLines = Array.from({ length: sectionHeaderTokens.staffLines.count }, (_, i) => (
    <Box
      key={i}
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        top: `${
          sectionHeaderTokens.staffLines.startPosition +
          i * sectionHeaderTokens.staffLines.stepPosition
        }%`,
        height: sectionHeaderTokens.staffLines.height,
        bgcolor: sectionHeaderTokens.staffLines.color,
      }}
    />
  ));

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={sectionHeaderTokens.stackSpacing}
      sx={{
        mb: sectionHeaderTokens.spacingBottom,
        mt: sectionHeaderTokens.marginTop,
        pl: sectionHeaderTokens.paddingLeft,
        position: "relative",
        minHeight: sectionHeaderTokens.minHeight,
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
          fontSize: finalIconSize,
          color: finalIconColor,
          opacity: finalIconOpacity,
          transition: theme.custom.transitions.hover,
          position: "relative",
          zIndex: theme.custom.zIndex.base + 1,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = String(sectionHeaderTokens.icon.hoverOpacity);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = String(finalIconOpacity);
        }}
      />

      {/* Title text */}
      <DSTypography
        variant="sectionTitle"
        sx={{
          color: sectionHeaderTokens.title.color,
          position: "relative",
          zIndex: theme.custom.zIndex.base + 1,
        }}
      >
        {title}
      </DSTypography>
    </Stack>
  );
};
