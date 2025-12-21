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
    mutedIvory: "rgba(245, 245, 242, 0.7)",
  },

  // Accent Colors
  accents: {
    synthTeal: {
      main: "#00C2B8",
      light: "#33CFC7",
      dark: "#00A89F",
    },
    metronomeGold: {
      main: "#F5C156",
      light: "#F7CF7A",
      dark: "#D9A73D",
    },
  },

  // Spotify Brand Color (for Spotify-related projects)
  spotify: {
    green: "#1DB954",
  },

  // Support Colors
  support: {
    keyOutline: "rgba(245, 245, 242, 0.08)",
    softShadow: "rgba(0, 0, 0, 0.45)",
  },
} as const;

/**
 * Helper function to create rgba colors with opacity
 * Usage: rgba(colors.accents.metronomeGold.main, 0.12)
 * Supports both string colors and nested color objects
 */
export const rgba = (color: string | { main: string }, opacity: number): string => {
  // Handle nested color objects (e.g., colors.accents.synthTeal)
  const colorValue = typeof color === "string" ? color : color.main;
  // Convert hex to rgb
  const hex = colorValue.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

/**
 * Pre-defined opacity variants for common use cases
 */
export const colorOpacity = {
  // Gold opacity variants
  gold: {
    light: "rgba(245, 193, 86, 0.12)",
    medium: "rgba(245, 193, 86, 0.3)",
    dark: "rgba(245, 193, 86, 0.5)",
  },
  // Teal opacity variants
  teal: {
    light: "rgba(0, 194, 184, 0.12)",
    medium: "rgba(0, 194, 184, 0.2)",
    dark: "rgba(0, 194, 184, 0.35)",
  },
  // Spotify green opacity variants
  spotify: {
    light: "rgba(29, 185, 84, 0.05)",
    medium: "rgba(29, 185, 84, 0.12)",
    border: "rgba(29, 185, 84, 0.2)",
    hover: "rgba(29, 185, 84, 0.35)",
    shadow: "rgba(29, 185, 84, 0.15)",
    glow: "rgba(29, 185, 84, 0.2)",
  },
  // White/black opacity variants
  white: {
    subtle: "rgba(255, 255, 255, 0.04)",
    light: "rgba(255, 255, 255, 0.08)",
    medium: "rgba(255, 255, 255, 0.12)",
  },
  black: {
    light: "rgba(0, 0, 0, 0.2)",
    medium: "rgba(0, 0, 0, 0.3)",
    dark: "rgba(0, 0, 0, 0.45)",
  },
} as const;

// Background gradients for visual depth (defined after colorOpacity)
export const gradients = {
  hero: `linear-gradient(135deg, ${colors.core.keyBlack} 0%, ${colors.core.graphite} 100%)`,
  card: `linear-gradient(135deg, ${colors.core.graphite} 0%, ${colors.core.keyBlack} 100%)`,
  subtle: `linear-gradient(180deg, transparent 0%, ${colorOpacity.black.light} 100%)`,
  primary: `linear-gradient(135deg, ${colors.accents.synthTeal.light} 0%, ${colors.accents.synthTeal.main} 100%)`,
  secondary: `linear-gradient(135deg, ${colors.accents.metronomeGold.light} 0%, ${colors.accents.metronomeGold.main} 100%)`,
} as const;

export const typography = {
  fontFamily: {
    primary: "Inter, sans-serif",
  },

  fontSizes: {
    "2xs": "0.7rem", // 11.2px - for very small text (CurrentlyPlaying)
    xs: "0.75rem", // 12px - for pills, badges, small labels
    "xs-sm": "0.78rem", // 12.5px - for project card stats
    sm: "0.875rem", // 14px - for descriptions, buttons, body text
    "sm-md": "0.8125rem", // 13px - for CurrentlyPlaying text
    base: "1rem", // 16px - for body text, section titles
    "base-sm": "0.9rem", // 14.4px - for navBar, footer tagline
    "base-md": "0.85rem", // 13.6px - for dateRange, caption, links
    lg: "1.125rem", // 18px - for buttons (medium)
    xl: "1.25rem", // 20px - for project/experience titles
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    // Responsive hero sizes
    hero: {
      xs: "1.8rem", // 28.8px
      sm: "2.1rem", // 33.6px
      md: "2.4rem", // 38.4px
    },
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extraBold: 800,
  },

  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    // Additional line heights for specific use cases
    relaxedTight: 1.7,
    relaxedNormal: 1.6,
  },

  letterSpacing: {
    tight: "-0.02em",
    normal: "-0.01em",
    wide: "0.01em",
    wider: "0.02em",
    widest: "0.06em",
    extraWide: "0.14em",
  },
} as const;

// Opacity tokens for consistent opacity values across components
export const opacity = {
  // Text/content opacity
  subtle: 0.5, // For inactive states, secondary elements
  medium: 0.7, // For hover states, medium emphasis
  high: 0.8, // For icons, medium-high emphasis
  higher: 0.85, // For descriptions, secondary text
  highest: 0.9, // For buttons, high emphasis
  full: 0.92, // For taglines, almost full
  // Full opacity (1.0) is default, no token needed
} as const;

// Spacing tokens - Note: Most spacing uses MUI's theme.spacing() function
// Only keeping minimal tokens used in muiTheme.ts
export const spacing = {
  sm: "0.5rem", // 8px
  lg: "1.5rem", // 24px
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

// Border tokens for consistent border styling
export const borders = {
  // Standard border styles
  default: "1px solid",
  none: "none",
  // Common border color combinations
  divider: {
    border: "1px solid",
    borderColor: "divider",
  },
  // Spotify-themed borders
  spotify: {
    border: "1px solid",
    borderColor: colorOpacity.spotify.hover,
  },
  spotifyLight: {
    border: "1px solid",
    borderColor: colorOpacity.spotify.border,
  },
  // Gold-themed borders
  gold: {
    border: "1px solid",
    borderColor: colorOpacity.gold.light,
  },
  // Teal-themed borders
  teal: {
    border: "1px solid",
    borderColor: colorOpacity.teal.light,
  },
} as const;

export const shadows = {
  sm: `0 1px 2px ${colors.support.softShadow}`,
  md: `0 4px 6px ${colors.support.softShadow}`,
  lg: `0 10px 15px ${colors.support.softShadow}`,
  xl: `0 20px 25px ${colors.support.softShadow}`,

  // Specialized shadows
  card: `0 4px 12px ${colors.support.softShadow}`,
  cardHover: `0 8px 24px ${colors.support.softShadow}`,
  avatar: `0 8px 24px ${colorOpacity.black.light}`,
  spotify: {
    card: `0 4px 16px ${colorOpacity.spotify.shadow}`,
    glow: `0 12px 32px ${colorOpacity.spotify.glow}`,
  },
} as const;

// Core transitions for hover effects - centralized for consistency
export const transitions = {
  // Primary hover transition - use for all hover effects (colors, borders, shadows, transforms)
  hover: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
  // Transform-only transition - use when only animating transforms (scale, translate)
  transform: "transform 250ms cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

// Z-index scale for layering
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
} as const;

// Layout primitives to avoid hard-coded spacing in layout files
export const layout = {
  container: {
    paddingX: { xs: 3, sm: 3.5, md: 4.5, lg: 5.5 },
    paddingY: 6,
  },
  grid: {
    rowSpacing: { xs: 5, md: 6 },
    columnSpacing: { md: 4, lg: 6 },
    leftColumn: { md: 5, lg: 5 },
    rightColumn: { md: 7, lg: 7 },
    stickyTopSpacing: 3, // theme.spacing(3) = 24px
  },
  section: {
    scrollMarginTop: "100px",
    marginBottom: { xs: 5, md: 6 }, // Reduced from 8/10 to 5/6 (40px/48px)
    paddingTop: { xs: 2, md: 3 }, // Reduced from 4/5 to 2/3 (16px/24px)
    spacing: { xs: 4, md: 5 },
  },
} as const;

// Component-specific style tokens
export const componentStyles = {
  // Link styles
  link: {
    fontSize: typography.fontSizes["base-md"],
    fontWeight: 700,
    color: "secondary.main",
  },
  // Chip/Hobby styles
  hobbyChip: {
    bgcolor: colorOpacity.white.subtle,
    ...borders.divider,
    color: "text.secondary",
    fontWeight: 700,
    letterSpacing: "0.01em",
  },
  // Footer styles
  footer: {
    maxWidth: 780,
    marginTop: { xs: 6, md: 8 },
    paddingTop: { xs: 3.5, md: 4.5 },
    paddingBottom: { xs: 4, md: 5 },
    bridgeHeight: "14px",
    bridgeOpacity: 0.45,
    badge: {
      padding: { x: 1.25, y: 0.6 },
      gap: 1,
      borderRadius: borderRadius.full,
      accentBar: {
        width: "2px",
        height: "80%",
        opacity: 0.85,
      },
    },
    tagline: {
      fontSize: typography.fontSizes["base-md"],
      lineHeight: 1.6,
      fontWeight: 600,
      opacity: 0.92,
      gap: 0.6,
      iconSize: typography.fontSizes["base-sm"],
    },
    links: {
      spacing: 2.5,
      iconSpacing: "0.5rem",
    },
  },
  // NavBar styles
  navBar: {
    itemSpacing: 1.25,
    barWidth: "5px",
    barHeight: "28px",
    barInactiveOpacity: opacity.subtle,
    hoverTransform: "translateX(3px)",
    fontSize: typography.fontSizes["base-sm"],
    letterSpacing: "0.08em",
    button: {
      padding: { y: 1.25, x: 0 },
      gap: 1.25,
    },
    text: {
      fontWeight: { active: 700, inactive: 500 },
      textTransform: "uppercase",
    },
  },
  // Project hero styles
  projectHero: {
    borderRadius: 3,
    padding: { xs: 3, sm: 4 },
    gap: 3,
    imageWidth: { xs: "100%", sm: 180 },
    imageHeight: { xs: 160, sm: 180 },
    icon: {
      fontSize: 16,
      color: "#1DB954",
      opacity: opacity.high,
    },
    image: {
      objectFit: "cover",
      borderRadius: "1rem", // xl = 16px
      border: borders.default as string,
    },
    button: {
      borderColor: "rgba(29, 185, 84, 0.35)",
      color: "#1DB954",
    },
  },
  // Pill component styles (padding uses MUI's theme.spacing(), not hardcoded)
  pill: {
    small: {
      fontSize: typography.fontSizes.xs,
      fontWeight: typography.fontWeights.semibold,
      letterSpacing: typography.letterSpacing.wider,
    },
    medium: {
      fontSize: typography.fontSizes.sm,
      fontWeight: typography.fontWeights.semibold,
      letterSpacing: typography.letterSpacing.widest,
    },
    // Variant-specific letter spacing (for gold/teal variants)
    variantLetterSpacing: typography.letterSpacing.widest,
  },
  // Project card stats badge styles
  projectCardStats: {
    padding: { x: 1.15, y: 0.45 },
    borderRadius: borderRadius.full,
    fontSize: typography.fontSizes["xs-sm"],
    fontWeight: 700,
    letterSpacing: "0.01em",
    marginBottom: 0.75,
    default: {
      bgcolor: "rgba(255,255,255,0.04)",
      borderColor: "divider",
      color: "text.secondary",
    },
    spotify: {
      bgcolor: "rgba(29,185,84,0.12)",
      borderColor: "rgba(29,185,84,0.35)",
      color: "#1DB954",
    },
  },
  // Project card button styles
  projectCardButton: {
    spotify: {
      borderColor: "rgba(29,185,84,0.35)",
      color: "#1DB954",
    },
  },
  // Dialog/Modal styles
  dialog: {
    borderRadius: 1.5,
    iframeAspectRatio: "56.25%", // 16:9
    contentPadding: 0,
    paper: {
      border: borders.default,
    },
    iframe: {
      border: 0,
    },
    container: {
      position: "relative",
      width: "100%",
      overflow: "hidden",
    },
  },
  // Hero card styles
  heroCard: {
    backgroundGradient: gradients.hero,
    padding: { xs: 3, sm: 4 },
    borderRadius: 2,
    hoverTransform: "translateY(-2px) scale(1.01)",
  },
  // Enhanced card hover states
  cardHover: {
    transform: "translateY(-3px) scale(1.01)",
  },
  // Section header styles
  sectionHeader: {
    staffLineOpacity: 0.2,
    spacingBottom: 3,
  },
  // Experience card styles
  experienceCard: {
    padding: { xs: 2.5, md: 3 },
    borderRadius: borderRadius.md,
    borderColor: colorOpacity.gold.light,
    borderColorHover: colorOpacity.gold.medium,
    accentBar: {
      width: "4px",
      minHeight: "160px",
      borderRadius: borderRadius.full,
      opacity: opacity.subtle,
      opacityHover: opacity.medium,
    },
    companyBadge: {
      size: 28,
      fontSize: typography.fontSizes["base-sm"],
      fontWeight: 700,
    },
    description: {
      fontSize: typography.fontSizes.sm,
      opacity: opacity.higher,
      marginBottom: 1.25,
    },
    highlights: {
      spacing: 0.7,
      listStyle: "none",
      paddingLeft: 0,
      marginBottom: 2,
      iconSize: 10,
      iconOpacity: 0.7,
    },
  },
} as const;
