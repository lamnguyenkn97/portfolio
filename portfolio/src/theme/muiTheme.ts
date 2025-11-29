import { createTheme } from "@mui/material/styles";
import { colors, typography, spacing, borderRadius, shadows, transitions } from "./tokens";

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
      main: colors.accents.synthTeal,
      light: "#33CFC7",
      dark: "#00A89F",
      contrastText: colors.core.keyBlack,
    },
    secondary: {
      main: colors.accents.metronomeGold,
      light: "#F7CF7A",
      dark: "#D9A73D",
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
      active: colors.accents.synthTeal,
      hover: `${colors.accents.synthTeal}14`, // 8% opacity
      selected: `${colors.accents.synthTeal}1F`, // 12% opacity
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
    borderRadius: parseInt(borderRadius.md), // 8px default
  },

  // Shadows - Depth and elevation
  shadows: [
    "none",
    shadows.sm,
    shadows.sm,
    shadows.md,
    shadows.md,
    shadows.md,
    shadows.lg,
    shadows.lg,
    shadows.lg,
    shadows.xl,
    shadows.xl,
    shadows.xl,
    shadows.xl,
    shadows.xl,
    shadows.xl,
    shadows.xl,
    shadows.xl,
    shadows.xl,
    shadows.xl,
    shadows.xl,
    shadows.xl,
    shadows.xl,
    shadows.xl,
    shadows.xl,
    shadows.xl,
  ],

  // Component Overrides - Consistent design language
  components: {
    // Button - Primary interaction element
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.md,
          padding: `${spacing.sm} ${spacing.lg}`,
          transition: transitions.all,
          textTransform: "none",
          fontWeight: typography.fontWeights.semibold,

          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: shadows.cardHover,
          },
        },
        contained: {
          boxShadow: shadows.card,

          "&:hover": {
            boxShadow: shadows.cardHover,
          },
        },
        containedPrimary: {
          background: `linear-gradient(135deg, ${colors.accents.synthTeal} 0%, #00A89F 100%)`,

          "&:hover": {
            background: `linear-gradient(135deg, #33CFC7 0%, ${colors.accents.synthTeal} 100%)`,
            boxShadow: shadows.glow,
          },
        },
        containedSecondary: {
          background: `linear-gradient(135deg, ${colors.accents.metronomeGold} 0%, #D9A73D 100%)`,

          "&:hover": {
            background: `linear-gradient(135deg, #F7CF7A 0%, ${colors.accents.metronomeGold} 100%)`,
            boxShadow: shadows.goldGlow,
          },
        },
        outlined: {
          borderColor: colors.support.keyOutline,
          borderWidth: "1px",

          "&:hover": {
            borderColor: colors.accents.synthTeal,
            backgroundColor: `${colors.accents.synthTeal}0A`, // 4% opacity
            transform: "translateY(-2px)",
          },
        },
        text: {
          "&:hover": {
            backgroundColor: `${colors.accents.synthTeal}0A`,
            transform: "translateY(-1px)",
          },
        },
      },
    },

    // Card - Content containers (like piano keys)
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.core.graphite,
          borderRadius: borderRadius.lg,
          border: `1px solid ${colors.support.keyOutline}`,
          transition: transitions.all,
          boxShadow: shadows.card,

          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: shadows.cardHover,
            borderColor: `${colors.accents.synthTeal}33`, // 20% opacity
          },
        },
      },
    },

    // Paper - Base surface
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: colors.core.graphite,
          backgroundImage: "none",
          borderRadius: borderRadius.lg,
        },
      },
    },

    // Chip - Tags and labels
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.md,
          fontWeight: typography.fontWeights.medium,
          fontSize: typography.fontSizes.xs,
          transition: transitions.colors,
        },
        filled: {
          backgroundColor: colors.core.graphite,
          border: `1px solid ${colors.support.keyOutline}`,
          color: colors.core.ivoryWhite,

          "&:hover": {
            borderColor: colors.accents.synthTeal,
            backgroundColor: `${colors.accents.synthTeal}14`,
          },
        },
        outlined: {
          borderColor: colors.support.keyOutline,
          color: colors.core.ivoryWhite,

          "&:hover": {
            borderColor: colors.accents.synthTeal,
            backgroundColor: `${colors.accents.synthTeal}0A`,
          },
        },
      },
    },

    // Link - Navigation and external links
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors.accents.synthTeal,
          textDecoration: "none",
          transition: transitions.colors,
          fontWeight: typography.fontWeights.medium,

          "&:hover": {
            color: colors.accents.metronomeGold,
            textDecoration: "underline",
            textDecorationThickness: "2px",
            textUnderlineOffset: "2px",
          },
        },
      },
    },

    // Typography - Consistent text styling
    MuiTypography: {
      styleOverrides: {
        root: {
          transition: transitions.colors,
        },
      },
    },

    // Icon Button - Interactive icons
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: transitions.all,
          borderRadius: borderRadius.md,

          "&:hover": {
            backgroundColor: `${colors.accents.synthTeal}14`,
            transform: "scale(1.1)",
          },
        },
      },
    },

    // Divider - Section separators
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: colors.support.keyOutline,
          borderWidth: "1px",
        },
      },
    },

    // Stack - Layout component
    MuiStack: {
      defaultProps: {
        spacing: 2, // 16px default spacing
      },
    },

    // Grid - Layout system
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
      spacing: typeof spacing;
      borderRadius: typeof borderRadius;
      transitions: typeof transitions;
      shadows: typeof shadows;
    };
  }

  interface ThemeOptions {
    custom?: {
      spacing?: typeof spacing;
      borderRadius?: typeof borderRadius;
      transitions?: typeof transitions;
      shadows?: typeof shadows;
    };
  }
}

// Add custom properties to theme
export const themeWithCustom = {
  ...theme,
  custom: {
    spacing,
    borderRadius,
    transitions,
    shadows,
  },
};

export default theme;
