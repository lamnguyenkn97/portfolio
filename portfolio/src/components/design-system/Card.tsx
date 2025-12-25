import React from "react";
import { Box, BoxProps, useTheme } from "@mui/material";

export type CardVariant = "default" | "spotify" | "gold" | "elevated";

export interface CardProps extends BoxProps {
  variant?: CardVariant;
  children: React.ReactNode;
}

/**
 * Design System Card Component
 * Consistent card styling across the portfolio using design tokens
 */
export const Card = ({ variant = "default", children, sx, ...props }: CardProps) => {
  const theme = useTheme();

  // Default responsive padding for all cards - using tokens
  const defaultPadding = { xs: 2.5, md: 3 };

  const variantStyles = {
    default: {
      bgcolor: "background.paper",
      ...theme.custom.borders.divider,
      borderRadius: theme.custom.borderRadius.md,
      p: defaultPadding,
      width: "100%", // Consistent width - takes full width of container
      height: "auto", // Auto height based on content
      transition: theme.custom.transitions.hover,
      "&:hover": {
        borderColor: "primary.main",
      },
    },
    spotify: {
      bgcolor: theme.custom.colorOpacity.spotify.light,
      ...theme.custom.borders.spotify,
      borderRadius: theme.custom.borderRadius.md,
      p: defaultPadding,
      width: "100%", // Consistent width - takes full width of container
      height: "auto", // Auto height based on content
      position: "relative" as const,
      transition: theme.custom.transitions.hover,
      "&:hover": {
        borderColor: theme.custom.colorOpacity.spotify.medium,
        bgcolor: theme.custom.colorOpacity.spotify.medium,
      },
    },
    gold: {
      bgcolor: "background.paper",
      ...theme.custom.borders.gold,
      borderRadius: theme.custom.borderRadius.md,
      p: defaultPadding,
      width: "100%", // Consistent width - takes full width of container
      height: "auto", // Auto height based on content
      transition: theme.custom.transitions.hover,
      "&:hover": {
        borderColor: theme.custom.colorOpacity.gold.medium,
      },
    },
    elevated: {
      bgcolor: "background.paper",
      ...theme.custom.borders.divider,
      borderRadius: theme.custom.borderRadius.md,
      p: defaultPadding,
      width: "100%", // Consistent width - takes full width of container
      height: "auto", // Auto height based on content
      transition: theme.custom.transitions.hover,
      "&:hover": {
        borderColor: "primary.main",
      },
    },
  };

  return (
    <Box
      {...props}
      sx={{
        ...variantStyles[variant],
        // Enforce width and height to ensure consistency across all cards
        width: "100%",
        minWidth: 0, // Prevent flex shrinking
        height: "auto",
        boxSizing: "border-box", // Include padding in width calculation
        ...sx, // sx prop can override width/height if explicitly set
      }}
    >
      {children}
    </Box>
  );
};
