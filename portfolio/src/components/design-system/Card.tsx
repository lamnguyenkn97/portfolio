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

  // Default responsive padding for all cards
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
        boxShadow: theme.custom.shadows.cardHover,
        transform: theme.custom.componentStyles.cardHover.transform,
      },
    },
    spotify: {
      bgcolor: theme.custom.colorOpacity.spotify.light,
      ...theme.custom.borders.spotifyLight,
      borderRadius: theme.custom.borderRadius.md,
      p: defaultPadding,
      width: "100%", // Consistent width - takes full width of container
      height: "auto", // Auto height based on content
      position: "relative" as const,
      transition: theme.custom.transitions.hover,
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: theme.spacing(0.5),
        height: "100%",
        bgcolor: theme.custom.colors.spotify.green,
        borderRadius: `${theme.custom.borderRadius.sm} 0 0 ${theme.custom.borderRadius.sm}`,
      },
      "&:hover": {
        borderColor: theme.custom.colorOpacity.spotify.hover,
        bgcolor: theme.custom.colorOpacity.spotify.medium,
        boxShadow: theme.custom.shadows.spotify.card,
        transform: theme.custom.componentStyles.cardHover.transform,
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
        boxShadow: theme.custom.shadows.cardHover,
        transform: theme.custom.componentStyles.cardHover.transform,
      },
    },
    elevated: {
      bgcolor: "background.paper",
      ...theme.custom.borders.divider,
      borderRadius: theme.custom.borderRadius.md,
      p: defaultPadding,
      width: "100%", // Consistent width - takes full width of container
      height: "auto", // Auto height based on content
      boxShadow: theme.custom.shadows.card,
      transition: theme.custom.transitions.hover,
      "&:hover": {
        boxShadow: theme.custom.shadows.cardHover,
        transform: "translateY(-4px)",
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
        height: "auto",
        ...sx, // sx prop can override width/height if explicitly set
      }}
    >
      {children}
    </Box>
  );
};
