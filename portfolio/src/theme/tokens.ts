/**
 * Design Tokens for Portfolio
 * Music-inspired color palette with modern tech aesthetics
 */

export const colors = {
  // Core Colors
  core: {
    keyBlack: "#0E0E10",
    ivoryWhite: "#F5F5F2",
    graphite: "#2B2B2F",
    mutedIvory: "rgba(245, 245, 242, 0.55)",
  },

  // Accent Colors
  accents: {
    synthTeal: "#00C2B8",
    metronomeGold: "#F5C156",
  },

  // Support Colors
  support: {
    keyOutline: "rgba(245, 245, 242, 0.08)",
    softShadow: "rgba(0, 0, 0, 0.45)",
  },
} as const;

export const typography = {
  fontFamily: {
    primary: "Inter, sans-serif",
    variable: "InterVariable, sans-serif",
    code: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  },

  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

export const spacing = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  "2xl": "3rem", // 48px
  "3xl": "4rem", // 64px
  "4xl": "6rem", // 96px
} as const;

export const borderRadius = {
  none: "0",
  sm: "0.25rem", // 4px
  md: "0.5rem", // 8px
  lg: "0.75rem", // 12px
  xl: "1rem", // 16px
  "2xl": "1.5rem", // 24px
  full: "9999px",
} as const;

export const shadows = {
  none: "none",
  sm: `0 1px 2px ${colors.support.softShadow}`,
  md: `0 4px 6px ${colors.support.softShadow}`,
  lg: `0 10px 15px ${colors.support.softShadow}`,
  xl: `0 20px 25px ${colors.support.softShadow}`,
  inner: `inset 0 2px 4px ${colors.support.softShadow}`,

  // Specialized shadows
  card: `0 4px 12px ${colors.support.softShadow}`,
  cardHover: `0 8px 24px ${colors.support.softShadow}`,
  glow: `0 0 20px ${colors.accents.synthTeal}40`,
  goldGlow: `0 0 20px ${colors.accents.metronomeGold}40`,
} as const;

export const transitions = {
  fast: "150ms ease",
  base: "250ms ease",
  slow: "350ms ease",

  // Specialized transitions
  all: "all 250ms ease",
  transform: "transform 250ms ease",
  opacity: "opacity 250ms ease",
  colors: "color 250ms ease, background-color 250ms ease, border-color 250ms ease",
} as const;

export const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// Type exports for autocomplete
export type ColorTokens = typeof colors;
export type TypographyTokens = typeof typography;
export type SpacingTokens = typeof spacing;
export type BorderRadiusTokens = typeof borderRadius;
export type ShadowTokens = typeof shadows;
export type TransitionTokens = typeof transitions;
export type BreakpointTokens = typeof breakpoints;
