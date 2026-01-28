import { createTheme, alpha, Theme } from "@mui/material/styles";
import {
  colors,
  typography,
  borderRadius,
  borders,
  shadows,
  transitions,
  layout,
  colorOpacity,
  opacity,
  componentStyles,
  gradients,
  zIndex,
} from "./tokens";

// Re-export typography for convenience
export { typography };

/**
 * Comprehensive Design System Theme
 * Minimalist, music-inspired portfolio design
 *
 * Design Language:
 * - Color Palette: Music-inspired (key black, ivory white, synth teal, metronome gold)
 * - Typography: Clean, readable Inter font family
 * - Spacing: Consistent 8px base unit system
 * - Shaping: Subtle rounded corners (piano key aesthetic)
 * - Motion: Smooth, elegant transitions (like musical flow)
 */
export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.accents.synthTeal.main,
      light: colors.accents.synthTeal.light,
      dark: colors.accents.synthTeal.dark,
      contrastText: colors.core.keyBlack,
    },
    secondary: {
      main: colors.accents.metronomeGold.main,
      light: colors.accents.metronomeGold.light,
      dark: colors.accents.metronomeGold.dark,
      contrastText: colors.core.keyBlack,
    },
    background: {
      default: colors.core.keyBlack,
      paper: colors.core.graphite,
    },
    text: {
      primary: colors.core.ivoryWhite,
      secondary: colors.core.mutedIvory,
    },
    divider: colors.support.keyOutline,
    action: {
      active: colors.accents.synthTeal.main,
      hover: colorOpacity.teal.light,
      selected: colorOpacity.teal.medium,
      disabled: colors.core.mutedIvory,
      disabledBackground: colors.support.keyOutline,
    },
  },

  // Typography System
  typography: {
    fontFamily: typography.fontFamily.primary,

    // Headings - Clean, bold hierarchy
    h1: {
      fontSize: typography.fontSizes["5xl"],
      fontWeight: typography.fontWeights.bold,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: typography.fontSizes["4xl"],
      fontWeight: typography.fontWeights.bold,
      lineHeight: typography.lineHeights.tight,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: typography.fontSizes["3xl"],
      fontWeight: typography.fontWeights.semibold,
      lineHeight: typography.lineHeights.tight,
    },
    h4: {
      fontSize: typography.fontSizes["2xl"],
      fontWeight: typography.fontWeights.semibold,
      lineHeight: typography.lineHeights.normal,
    },
    h5: {
      fontSize: typography.fontSizes.xl,
      fontWeight: typography.fontWeights.medium,
      lineHeight: typography.lineHeights.normal,
    },
    h6: {
      fontSize: typography.fontSizes.lg,
      fontWeight: typography.fontWeights.medium,
      lineHeight: typography.lineHeights.normal,
    },

    // Body text - Readable, comfortable
    body1: {
      fontSize: typography.fontSizes.base,
      lineHeight: typography.lineHeights.relaxed,
      fontWeight: typography.fontWeights.regular,
    },
    body2: {
      fontSize: typography.fontSizes.sm,
      lineHeight: typography.lineHeights.normal,
      fontWeight: typography.fontWeights.regular,
    },

    // Specialized
    subtitle1: {
      fontSize: typography.fontSizes.lg,
      fontWeight: typography.fontWeights.medium,
      lineHeight: typography.lineHeights.normal,
    },
    subtitle2: {
      fontSize: typography.fontSizes.base,
      fontWeight: typography.fontWeights.medium,
      lineHeight: typography.lineHeights.normal,
    },
    button: {
      fontSize: typography.fontSizes.sm,
      fontWeight: typography.fontWeights.semibold,
      textTransform: "none",
      letterSpacing: "0.02em",
    },
    caption: {
      fontSize: typography.fontSizes.xs,
      lineHeight: typography.lineHeights.normal,
      fontWeight: typography.fontWeights.regular,
    },
    overline: {
      fontSize: typography.fontSizes.xs,
      fontWeight: typography.fontWeights.semibold,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
  },

  // Spacing System - 8px base unit (consistent layout rhythm)
  spacing: 8, // Base unit: 8px

  // Shaping Language - Subtle, elegant curves (piano key aesthetic)
  shape: {
    borderRadius: 8, // 8px default - matches borderRadius.md
  },

  // Shadows - Removed for clean, professional design
  shadows: Array(25).fill("none") as Theme["shadows"],

  // Component Overrides - Only override components actually used directly
  // Best Practice: Only override what's necessary for global consistency
  // Custom wrapper components (Button, Card, DSTypography, Pill) handle their own styling
  components: {
    // Paper - Used by Dialog, Menu, Popover, etc. (MUI internal components)
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: colors.core.graphite,
          backgroundImage: "none",
          borderRadius: borderRadius.lg,
        },
      },
    },

    // Chip - Used directly in profile.tsx (keep minimal override)
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.md,
          fontWeight: typography.fontWeights.medium,
          fontSize: typography.fontSizes.xs,
          transition: transitions.hover,
        },
        filled: {
          backgroundColor: colors.core.graphite,
          border: `1px solid ${colors.support.keyOutline}`,
          color: colors.core.ivoryWhite,
          "&:hover": {
            borderColor: colors.accents.synthTeal.main,
            backgroundColor: colorOpacity.teal.light,
          },
        },
        outlined: {
          borderColor: colors.support.keyOutline,
          color: colors.core.ivoryWhite,
          "&:hover": {
            borderColor: colors.accents.synthTeal.main,
            backgroundColor: alpha(colors.accents.synthTeal.main, 0.04),
          },
        },
      },
    },

    // Typography - Minimal override (custom DSTypography handles most styling)
    // Only adding transition for consistency
    MuiTypography: {
      styleOverrides: {
        root: {
          transition: transitions.hover,
        },
      },
    },

    // Link - Navigation and external links
    MuiLink: {
      styleOverrides: {
        root: {
          transition: transitions.hover,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },

    // Icon Button - Used directly in socialNetworks.tsx and profile.tsx
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: transitions.hover,
          borderRadius: borderRadius.md,
          "&:hover": {
            backgroundColor: alpha(colors.accents.synthTeal.main, 0.08),
          },
        },
      },
    },

    // Stack - Layout utility (defaultProps only, no style overrides)
    MuiStack: {
      defaultProps: {
        spacing: 2, // 16px default spacing
      },
    },

    // Grid - Layout utility (defaultProps only, no style overrides)
    MuiGrid: {
      defaultProps: {
        spacing: 2, // 16px default spacing
      },
    },
  },
});

// Extend theme with custom properties for easy access
declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      borderRadius: typeof borderRadius;
      borders: typeof borders;
      opacity: typeof opacity;
      transitions: typeof transitions;
      shadows: typeof shadows;
      layout: typeof layout;
      colors: typeof colors;
      colorOpacity: typeof colorOpacity;
      typography: typeof typography;
      componentStyles: typeof componentStyles;
      gradients: typeof gradients;
      zIndex: typeof zIndex;
    };
  }
}

// Add custom properties directly to the theme instance
// Type assertion is safe here because we've declared the type in module augmentation above
(theme as Theme).custom = {
  borderRadius,
  borders,
  opacity,
  transitions,
  shadows,
  layout,
  colors,
  colorOpacity,
  typography,
  componentStyles,
  gradients,
  zIndex,
};

export default theme;
