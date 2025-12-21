import React from "react";
import { Button as MuiButton, ButtonProps as MuiButtonProps, useTheme } from "@mui/material";

export type ButtonVariant = "primary" | "secondary" | "spotify" | "text" | "outlined";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps extends Omit<MuiButtonProps, "variant" | "size" | "color"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  to?: string;
}

/**
 * Design System Button Component
 * Consistent button styling across the portfolio using design tokens
 */
export const Button = ({
  variant = "primary",
  size = "medium",
  children,
  sx,
  ...props
}: ButtonProps) => {
  const theme = useTheme();

  const variantStyles = {
    primary: {
      bgcolor: "primary.main",
      color: theme.custom.colors.core.keyBlack,
      "&:hover": {
        bgcolor: "primary.light",
        transform: "scale(1.02)",
      },
    },
    secondary: {
      bgcolor: "secondary.main",
      color: theme.custom.colors.core.keyBlack,
      "&:hover": {
        bgcolor: "secondary.light",
        transform: "scale(1.02)",
      },
    },
    spotify: {
      bgcolor: theme.custom.colors.spotify.green,
      color: theme.custom.colors.core.ivoryWhite,
      "&:hover": {
        bgcolor: theme.custom.colors.spotify.green,
        opacity: 0.9,
        transform: "scale(1.02)",
      },
    },
    text: {
      color: "text.primary",
      "&:hover": {
        bgcolor: theme.custom.colorOpacity.teal.light,
      },
    },
    outlined: {
      borderColor: "divider",
      color: "text.primary",
      "&:hover": {
        borderColor: "primary.main",
        bgcolor: theme.custom.colorOpacity.teal.light,
      },
    },
  };

  const sizeStyles = {
    small: {
      px: theme.spacing(1.5),
      py: theme.spacing(0.75),
      fontSize: "0.875rem",
    },
    medium: {
      px: theme.spacing(2.5),
      py: theme.spacing(1.25),
      fontSize: "1rem",
    },
    large: {
      px: theme.spacing(3.5),
      py: theme.spacing(1.75),
      fontSize: "1.125rem",
    },
  };

  return (
    <MuiButton
      {...props}
      variant={variant === "outlined" ? "outlined" : "contained"}
      sx={{
        borderRadius: theme.custom.borderRadius.md,
        fontWeight: 700,
        letterSpacing: "0.02em",
        textTransform: "none",
        transition: theme.custom.transitions.hover,
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...sx,
      }}
    >
      {children}
    </MuiButton>
  );
};
