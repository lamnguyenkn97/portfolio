import React from "react";
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
  useTheme,
  SxProps,
  Theme,
} from "@mui/material";

export type TypographyVariant =
  | "hero"
  | "sectionTitle"
  | "projectTitle"
  | "experienceTitle"
  | "dateRange"
  | "companyName"
  | "body"
  | "description"
  | "caption"
  | "overline";

export interface TypographyProps extends Omit<MuiTypographyProps, "variant"> {
  variant?: TypographyVariant | MuiTypographyProps["variant"];
  spotify?: boolean; // For project titles that can be Spotify green
}

/**
 * Design System Typography Component
 * Consistent typography styling across the portfolio using design tokens
 */
export const Typography = ({
  variant = "body",
  spotify = false,
  children,
  sx,
  ...props
}: TypographyProps) => {
  const theme = useTheme();

  // If it's a standard MUI variant, pass it through
  if (
    typeof variant === "string" &&
    [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "body1",
      "body2",
      "caption",
      "overline",
      "subtitle1",
      "subtitle2",
    ].includes(variant)
  ) {
    return (
      <MuiTypography variant={variant as MuiTypographyProps["variant"]} sx={sx} {...props}>
        {children}
      </MuiTypography>
    );
  }

  const variantStyles: Record<TypographyVariant, SxProps<Theme>> = {
    hero: {
      fontSize: { xs: "1.8rem", sm: "2.1rem", md: "2.4rem" },
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      color: "text.primary",
      wordBreak: "keep-all",
    },
    sectionTitle: {
      color: "text.primary",
      fontWeight: 700,
      fontSize: "1rem",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
    },
    projectTitle: {
      color: spotify ? theme.custom.colors.spotify.green : "text.primary",
      fontWeight: 700,
      fontSize: "1.25rem",
      letterSpacing: "-0.01em",
      mb: 0.5,
    },
    experienceTitle: {
      color: "text.primary",
      fontWeight: 700,
      fontSize: "1.25rem",
      letterSpacing: "-0.01em",
      mb: 0.25,
    },
    dateRange: {
      color: "text.secondary",
      fontWeight: 600,
      fontSize: "0.85rem",
      letterSpacing: "0.02em",
    },
    companyName: {
      color: "secondary.main",
      fontWeight: 600,
      letterSpacing: "0.01em",
    },
    body: {
      color: "text.primary",
      lineHeight: 1.75,
      fontSize: "1rem",
    },
    description: {
      color: "text.secondary",
      lineHeight: 1.7,
      fontSize: "0.875rem",
      opacity: 0.85,
    },
    caption: {
      color: "text.secondary",
      fontSize: "0.85rem",
      lineHeight: 1.6,
    },
    overline: {
      letterSpacing: "0.14em",
      color: "text.secondary",
      fontWeight: 800,
    },
  };

  // Map design system variants to MUI variants for semantic HTML
  const muiVariantMap: Record<TypographyVariant, MuiTypographyProps["variant"]> = {
    hero: "h1",
    sectionTitle: "h6",
    projectTitle: "h6",
    experienceTitle: "h6",
    dateRange: "body2",
    companyName: "body2",
    body: "body1",
    description: "body2",
    caption: "body2",
    overline: "overline",
  };

  const muiVariant = muiVariantMap[variant as TypographyVariant];
  const baseStyles = variantStyles[variant as TypographyVariant];

  // Combine styles properly - MUI sx prop supports arrays
  const finalSx = sx ? [baseStyles, sx] : baseStyles;

  return (
    <MuiTypography variant={muiVariant} sx={finalSx as any} {...props}>
      {children}
    </MuiTypography>
  );
};
