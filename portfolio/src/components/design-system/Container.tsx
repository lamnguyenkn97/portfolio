import React from "react";
import { Box, BoxProps, useTheme } from "@mui/material";

export type ContainerVariant = "default" | "elevated" | "subtle";

export interface ContainerProps extends BoxProps {
  variant?: ContainerVariant;
  children: React.ReactNode;
}

/**
 * Design System Container Component
 * Consistent container styling with padding and borders
 */
export const Container = ({ variant = "default", children, sx, ...props }: ContainerProps) => {
  const theme = useTheme();

  const variantStyles = {
    default: {
      p: 2.5,
      borderRadius: theme.custom.borderRadius.md,
      border: "1px solid",
      borderColor: "divider",
      bgcolor: "background.paper",
      backgroundImage: theme.custom.gradients.card,
      boxShadow: theme.custom.shadows.cardHover,
      transition: theme.custom.transitions.hover,
      "&:hover": {
        borderColor: "primary.main",
        boxShadow: theme.custom.shadows.card,
      },
    },
    elevated: {
      p: 2.5,
      borderRadius: theme.custom.borderRadius.md,
      border: "1px solid",
      borderColor: "divider",
      bgcolor: "background.paper",
      boxShadow: theme.custom.shadows.card,
    },
    subtle: {
      p: 2.5,
      borderRadius: theme.custom.borderRadius.md,
      border: "1px solid",
      borderColor: "divider",
      bgcolor: "background.paper",
    },
  };

  return (
    <Box {...props} sx={{ ...variantStyles[variant], ...sx }}>
      {children}
    </Box>
  );
};
