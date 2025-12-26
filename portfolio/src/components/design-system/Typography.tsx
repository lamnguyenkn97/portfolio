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
      fontSize: {
        xs: theme.custom.typography.fontSizes.hero.xs,
        sm: theme.custom.typography.fontSizes.hero.sm,
        md: theme.custom.typography.fontSizes.hero.md,
      },
      fontWeight: theme.custom.typography.fontWeights.bold,
      lineHeight: theme.custom.typography.lineHeights.tight,
      letterSpacing: theme.custom.typography.letterSpacing.tight,
      color: "text.primary",
      wordBreak: "keep-all",
    },
    sectionTitle: {
      color: "text.primary",
      fontWeight: theme.custom.typography.fontWeights.bold,
      fontSize: theme.custom.typography.fontSizes.base,
      letterSpacing: theme.custom.typography.letterSpacing.widest,
      textTransform: "uppercase",
    },
    projectTitle: {
      color: spotify ? theme.custom.colors.spotify.green : "text.primary",
      fontWeight: theme.custom.typography.fontWeights.bold,
      fontSize: theme.custom.typography.fontSizes.xl,
      letterSpacing: theme.custom.typography.letterSpacing.normal,
      mb: theme.spacing(0.5),
    },
    experienceTitle: {
      color: "text.primary",
      fontWeight: theme.custom.typography.fontWeights.bold,
      fontSize: theme.custom.typography.fontSizes.xl,
      letterSpacing: theme.custom.typography.letterSpacing.normal,
      mb: theme.spacing(0.5), // 4px - spacing between title and company
    },
    dateRange: {
      color: "text.secondary",
      fontWeight: theme.custom.typography.fontWeights.semibold,
      fontSize: theme.custom.typography.fontSizes["base-md"],
      letterSpacing: theme.custom.typography.letterSpacing.wider,
    },
    companyName: {
      color: "secondary.main",
      fontWeight: theme.custom.typography.fontWeights.bold,
      fontSize: theme.custom.typography.fontSizes.lg, // Increased from base-md to lg (18px)
      letterSpacing: theme.custom.typography.letterSpacing.wide,
    },
    body: {
      color: "text.primary",
      lineHeight: theme.custom.typography.lineHeights.relaxed,
      fontSize: theme.custom.typography.fontSizes.base,
    },
    description: {
      color: "text.secondary",
      lineHeight: theme.custom.typography.lineHeights.relaxedTight,
      fontSize: theme.custom.typography.fontSizes.sm,
      opacity: theme.custom.opacity.higher,
    },
    caption: {
      color: "text.secondary",
      fontSize: theme.custom.typography.fontSizes["base-md"],
      lineHeight: theme.custom.typography.lineHeights.relaxedNormal,
    },
    overline: {
      letterSpacing: theme.custom.typography.letterSpacing.extraWide,
      color: "text.secondary",
      fontWeight: theme.custom.typography.fontWeights.extraBold,
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
