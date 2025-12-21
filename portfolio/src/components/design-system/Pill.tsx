import React from "react";
import { Box, BoxProps, useTheme } from "@mui/material";

export type PillVariant = "default" | "spotify" | "teal" | "gold" | "skill";
export type PillSize = "small" | "medium";

export interface PillProps extends Omit<BoxProps, "component"> {
  children: React.ReactNode;
  variant?: PillVariant;
  size?: PillSize;
  startIcon?: React.ReactNode;
}

/**
 * Design System Pill Component
 * Unified pill/badge component for tech tags, skills, badges, and stats
 */
export const Pill = ({ children, variant = "default", size = "small", startIcon, sx, ...props }: PillProps) => {
  const theme = useTheme();

  const variantStyles = {
    default: {
      bgcolor: theme.custom.colorOpacity.white.subtle,
      color: "text.secondary",
      borderColor: theme.custom.colorOpacity.white.light,
      borderRadius: theme.custom.borderRadius.full,
    },
    spotify: {
      bgcolor: theme.custom.colorOpacity.spotify.medium,
      color: theme.custom.colors.spotify.green,
      borderColor: theme.custom.colorOpacity.spotify.hover,
      borderRadius: theme.custom.borderRadius.full,
    },
    teal: {
      bgcolor: theme.custom.colorOpacity.teal.light,
      color: "primary.main",
      borderColor: "transparent",
      borderRadius: theme.custom.borderRadius.full,
    },
    gold: {
      bgcolor: theme.custom.colorOpacity.gold.light,
      color: "secondary.main",
      borderColor: theme.custom.colorOpacity.gold.medium,
      borderRadius: theme.custom.borderRadius.full,
    },
    skill: {
      bgcolor: theme.custom.colorOpacity.white.subtle,
      color: "text.secondary",
      borderColor: theme.custom.colorOpacity.white.light,
      borderRadius: theme.custom.borderRadius.lg,
    },
  };

  const sizeStyles = {
    small: {
      px: 1.2,
      py: 0.5,
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
    medium: {
      px: 1.75,
      py: 0.75,
      fontSize: "0.875rem",
      fontWeight: 600,
      letterSpacing: "0.08em",
    },
  };

  const hoverStyles = variant === "skill" ? {
    transition: theme.custom.transitions.hover,
    cursor: "default",
    "&:hover": {
      borderColor: "secondary.main",
      color: "secondary.main",
      bgcolor: theme.custom.colorOpacity.gold.light,
    },
  } : {};

  const borderStyle = variant === "teal" ? "none" : "1px solid";
  const textTransform = variant === "gold" || variant === "teal" ? "uppercase" : "none";
  const letterSpacing = variant === "gold" || variant === "teal" ? "0.08em" : sizeStyles[size].letterSpacing;

  return (
    <Box
      {...props}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: startIcon ? 0.5 : 0,
        border: borderStyle,
        whiteSpace: "nowrap",
        ...sizeStyles[size],
        letterSpacing,
        ...variantStyles[variant],
        ...hoverStyles,
        textTransform,
        ...sx,
      }}
    >
      {startIcon}
      {children}
    </Box>
  );
};

