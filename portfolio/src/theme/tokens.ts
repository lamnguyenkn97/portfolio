/**
 * Design Tokens for Portfolio
 * Music-inspired color palette with modern tech aesthetics
 */

// Opacity constants for color variants
const opacityValues = {
  verySubtle: 0.04,
  subtle: 0.08,
  light: 0.12,
  medium: 0.2,
  mediumHigh: 0.3,
  high: 0.35,
  muted: 0.7,
} as const;

// Opacity constants for UI elements (text/content)
const uiOpacity = {
  subtle: 0.5,
  medium: 0.7,
  high: 0.8,
  higher: 0.85,
  highest: 0.9,
  full: 0.92,
} as const;

// Spacing constants (semantic names for MUI spacing units)
// MUI provides 8px base unit: theme.spacing(1) = 8px, theme.spacing(3) = 24px
// All values are multiples of 0.5 (4px) for consistency and clean pixel values
// This ensures: 0.5=4px, 1=8px, 1.5=12px, 2=16px, 2.5=20px, 3=24px, etc.
const spacingValues = {
  xs: 0.5, // 4px
  sm: 1, // 8px
  md: 1.5, // 12px
  lg: 2, // 16px
  xl: 2.5, // 20px
  "2xl": 3, // 24px
  "3xl": 4, // 32px
  "4xl": 5, // 40px
  "5xl": 6, // 48px
  "6xl": 7, // 56px
  "7xl": 8, // 64px
  "8xl": 10, // 80px
  "9xl": 12, // 96px
  "10xl": 16, // 128px
  "40xl": 40, // 320px
  "80xl": 80, // 640px
} as const;

// Pixel size constants
const pixelSizes = {
  xs: "2px",
  sm: "5px",
  md: "14px",
  lg: "28px",
  xl: "60px",
  "2xl": "100px",
} as const;

// Percentage constants
const percentages = {
  full: "100%",
  eighty: "80%",
  fiftySix: "56.25%", // 16:9 aspect ratio
  fifteen: 15,
} as const;

// Border width constants
const borderWidths = {
  thin: "1px",
  thick: "1.5px",
} as const;

// Note: Use theme.transitions.duration.short (250ms) from MUI
// No need to define transition duration - MUI provides it

// Other numeric constants
const otherValues = {
  accentBarWidth: 0.375, // 3px = 0.375 * 8px
  staffLineCount: 5,
  footerMaxWidth: 780,
  sectionMaxWidth: 80, // 640px = 80 * 8px
  companyBadgeSize: 28,
  lineHeightCustom: 1.6,
} as const;

export const colors = {
  // Core Colors
  core: {
    keyBlack: "#0E0E10",
    ivoryWhite: "#F5F5F2",
    graphite: "#2B2B2F",
    // Derived from ivoryWhite with opacity
    mutedIvory: `rgba(245, 245, 242, ${opacityValues.muted})`,
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
    // Derived from ivoryWhite with low opacity
    keyOutline: `rgba(245, 245, 242, ${opacityValues.subtle})`,
  },
} as const;

/**
 * Pre-defined opacity variants for common use cases
 * Use MUI's alpha() function for dynamic opacity: alpha(theme.palette.primary.main, 0.12)
 */
// Helper to create rgba from hex color
const hexToRgba = (hex: string, opacity: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const colorOpacity = {
  // Gold opacity variants - derived from colors.accents.metronomeGold.main
  gold: {
    light: hexToRgba(colors.accents.metronomeGold.main, opacityValues.light),
    medium: hexToRgba(colors.accents.metronomeGold.main, opacityValues.mediumHigh),
  },
  // Teal opacity variants - derived from colors.accents.synthTeal.main
  teal: {
    light: hexToRgba(colors.accents.synthTeal.main, opacityValues.light),
    medium: hexToRgba(colors.accents.synthTeal.main, opacityValues.medium),
  },
  // Spotify green opacity variants - derived from colors.spotify.green
  spotify: {
    light: hexToRgba(colors.spotify.green, opacityValues.light),
    medium: hexToRgba(colors.spotify.green, opacityValues.high), // Used for hover/border
  },
  // White opacity variants
  white: {
    subtle: `rgba(255, 255, 255, ${opacityValues.verySubtle})`,
    light: `rgba(255, 255, 255, ${opacityValues.subtle})`,
  },
} as const;

// Background gradients for visual depth
export const gradients = {
  hero: `linear-gradient(135deg, ${colors.core.keyBlack} 0%, ${colors.core.graphite} 100%)`,
} as const;

export const typography = {
  fontFamily: {
    primary: "Inter, sans-serif",
  },

  fontSizes: {
    "2xs": "0.7rem", // 11.2px - for very small text (CurrentlyPlaying)
    xs: "0.75rem", // 12px - for pills, badges, small labels
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
  subtle: uiOpacity.subtle, // For inactive states, secondary elements
  medium: uiOpacity.medium, // For hover states, medium emphasis
  high: uiOpacity.high, // For icons, medium-high emphasis
  higher: uiOpacity.higher, // For descriptions, secondary text
  highest: uiOpacity.highest, // For buttons, high emphasis
  full: uiOpacity.full, // For taglines, almost full
  // Full opacity (1.0) is default, no token needed
} as const;

// Spacing: Use MUI's theme.spacing() function directly
// MUI uses 8px base unit: theme.spacing(1) = 8px, theme.spacing(3) = 24px

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
const borderStyle = `${borderWidths.thin} solid`;
const borderStyleThick = `${borderWidths.thick} solid`;

export const borders = {
  // Standard border styles
  default: borderStyle,
  thick: borderStyleThick,
  none: "none",
  // Common border color combinations
  divider: {
    border: borderStyle,
    borderColor: "divider",
  },
  // Spotify-themed borders
  spotify: {
    border: borderStyle,
    borderColor: colorOpacity.spotify.medium,
  },
  spotifyThick: {
    border: borderStyleThick,
    borderColor: colorOpacity.spotify.medium,
  },
  // Gold-themed borders
  gold: {
    border: borderStyle,
    borderColor: colorOpacity.gold.light,
  },
  // Teal-themed borders
  teal: {
    border: borderStyle,
    borderColor: colorOpacity.teal.light,
  },
} as const;

// Shadows removed for clean, professional design
export const shadows = {
  none: "none",
} as const;

// Transitions: Use MUI's theme.transitions.create() directly in components
// For styleOverrides, use static strings (MUI's default short duration is 250ms)
// Usage in components: theme.transitions.create(["all"], { duration: theme.transitions.duration.short })
export const transitions = {
  // Static transition strings for styleOverrides (MUI's default: 250ms, easeInOut)
  // Uses MUI's default transition duration (250ms) and easing (cubic-bezier(0.4, 0, 0.2, 1))
  hover: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

// Z-index: Use MUI's theme.zIndex utilities
// MUI provides: mobileStepper (1000), speedDial (1050), appBar (1100), drawer (1200),
//               modal (1300), snackbar (1400), tooltip (1500)
// Access via: theme.zIndex.modal, theme.zIndex.tooltip, etc.
// Only define custom z-index values that don't exist in MUI
export const zIndex = {
  base: 0,
  // Use MUI's zIndex for: dropdown (mobileStepper), sticky (appBar), fixed (drawer),
  // modalBackdrop (modal), modal (snackbar), popover (tooltip), tooltip (tooltip)
} as const;

// Layout primitives to avoid hard-coded spacing in layout files
// Values are in MUI spacing units (use theme.spacing() to convert to pixels)
export const layout = {
  container: {
    paddingX: {
      xs: spacingValues["2xl"],
      sm: spacingValues["3xl"],
      md: spacingValues["4xl"],
      lg: spacingValues["5xl"],
    }, // 24px, 32px, 40px, 48px
    paddingY: spacingValues["5xl"], // 48px
  },
  grid: {
    rowSpacing: { xs: spacingValues["4xl"], md: spacingValues["5xl"] }, // 40px, 48px
    columnSpacing: { md: spacingValues["3xl"], lg: spacingValues["5xl"] }, // 32px, 48px
    leftColumn: { md: spacingValues["4xl"], lg: spacingValues["4xl"] }, // 40px
    rightColumn: { md: spacingValues["6xl"], lg: spacingValues["6xl"] }, // 56px
    stickyTopSpacing: spacingValues["2xl"], // 24px
  },
  section: {
    scrollMarginTop: pixelSizes["2xl"],
    marginBottom: { xs: spacingValues["4xl"], md: spacingValues["5xl"] }, // 40px, 48px
    paddingTop: { xs: spacingValues.lg, md: spacingValues["2xl"] }, // 16px, 24px
    spacing: { xs: spacingValues["3xl"], md: spacingValues["4xl"] }, // 32px, 40px
    maxWidth: otherValues.sectionMaxWidth, // 640px = 80 * 8px
  },
} as const;

// Common spacing patterns (reusable across components)
// Values are in MUI spacing units (use theme.spacing() to convert to pixels)
const commonSpacing = {
  xs: spacingValues.xs, // 4px
  sm: spacingValues.sm, // 8px
  md: spacingValues.md, // 12px
  lg: spacingValues.lg, // 16px
  xl: spacingValues.xl, // 20px
  "2xl": spacingValues["2xl"], // 24px
} as const;

// Common typography patterns
const commonTypography = {
  secondaryText: {
    fontSize: typography.fontSizes["base-md"],
    fontWeight: typography.fontWeights.bold,
  },
  smallText: {
    fontSize: typography.fontSizes["base-sm"],
  },
} as const;

// Component-specific style tokens
export const componentStyles = {
  // Link styles
  link: {
    ...commonTypography.secondaryText,
    color: "secondary.main",
  },
  // Chip/Hobby styles
  hobbyChip: {
    bgcolor: colorOpacity.white.subtle,
    ...borders.divider,
    color: "text.secondary",
    fontWeight: typography.fontWeights.bold,
    letterSpacing: typography.letterSpacing.wide,
  },
  // Footer styles
  footer: {
    maxWidth: otherValues.footerMaxWidth,
    marginTop: { xs: spacingValues["5xl"], md: spacingValues["7xl"] }, // 48px, 64px
    paddingTop: { xs: spacingValues["3xl"], md: spacingValues["4xl"] }, // 32px, 40px
    paddingBottom: { xs: spacingValues["3xl"], md: spacingValues["4xl"] }, // 32px, 40px
    bridgeHeight: pixelSizes.md,
    bridgeOpacity: opacity.subtle,
    badge: {
      padding: { x: commonSpacing.md, y: commonSpacing.xs }, // 12px, 4px
      gap: commonSpacing.sm, // 8px
      borderRadius: borderRadius.full,
      accentBar: {
        width: pixelSizes.xs,
        height: percentages.eighty,
        opacity: opacity.higher,
      },
    },
    tagline: {
      fontSize: commonTypography.secondaryText.fontSize,
      lineHeight: otherValues.lineHeightCustom,
      fontWeight: typography.fontWeights.semibold,
      opacity: opacity.full,
      gap: commonSpacing.xs, // 4px
      iconSize: commonTypography.smallText.fontSize,
    },
    links: {
      spacing: spacingValues["2xl"], // 24px
      iconSpacing: "0.5rem",
    },
  },
  // NavBar styles
  navBar: {
    itemSpacing: commonSpacing.md,
    button: {
      padding: { y: commonSpacing.md, x: 0 },
      gap: commonSpacing.md,
      transition: transitions.hover,
    },
    bar: {
      width: pixelSizes.sm,
      height: pixelSizes.lg,
      borderRadius: borderRadius.full,
      inactiveOpacity: opacity.subtle,
      transition: transitions.hover,
    },
    text: {
      fontSize: commonTypography.smallText.fontSize,
      letterSpacing: typography.letterSpacing.widest,
      fontWeight: { active: typography.fontWeights.bold, inactive: typography.fontWeights.medium },
      textTransform: "uppercase",
      transition: transitions.hover,
    },
  },
  // Pill component styles (padding uses MUI's theme.spacing(), not hardcoded)
  pill: {
    small: {
      padding: { x: spacingValues.md, y: spacingValues.xs }, // 12px, 4px
      fontSize: typography.fontSizes.xs,
      fontWeight: typography.fontWeights.semibold,
      letterSpacing: typography.letterSpacing.wider,
    },
    medium: {
      padding: { x: spacingValues.lg, y: spacingValues.sm }, // 16px, 8px
      fontSize: typography.fontSizes.sm,
      fontWeight: typography.fontWeights.semibold,
      letterSpacing: typography.letterSpacing.widest,
    },
    iconGap: spacingValues.xs, // 4px
    // Variant-specific letter spacing (for gold/teal variants)
    variantLetterSpacing: typography.letterSpacing.widest,
  },
  // Project card layout styles (for consistency with projectHero)
  projectCard: {
    gap: commonSpacing.xl, // Stack spacing between image and content
    imageWidth: { xs: percentages.full, sm: spacingValues["40xl"] }, // 320px = 40 * 8px
    imageHeight: { xs: "auto", sm: spacingValues["40xl"] }, // 320px = 40 * 8px
    contentPaddingLeft: commonSpacing.sm, // Left padding for content to account for accent bar
    titleMarginBottom: 0, // No margin by default (ProjectCard doesn't have mb)
    pillsMarginBottom: commonSpacing.md, // Increased from sm for better spacing
    pillsSpacing: commonSpacing.xs,
    descriptionMarginBottom: commonSpacing.md, // Added spacing before buttons
    featuresSpacing: spacingValues.md, // 12px - spacing between feature bullets
    buttonsMarginTop: commonSpacing.lg,
    buttonsSpacing: commonSpacing.sm,
    accentBarWidth: otherValues.accentBarWidth, // 3px = 0.375 * 8px
  },
  // Dialog/Modal styles
  dialog: {
    borderRadius: spacingValues.md, // 12px
    iframeAspectRatio: percentages.fiftySix, // 16:9
    contentPadding: 0,
    paper: {
      border: borders.default,
    },
    iframe: {
      border: 0,
    },
    container: {
      position: "relative",
      width: percentages.full,
      overflow: "hidden",
    },
  },
  // Section header styles
  sectionHeader: {
    spacingBottom: spacingValues["2xl"], // 24px
    marginTop: -1,
    paddingLeft: commonSpacing.lg, // 16px
    minHeight: pixelSizes.xl,
    stackSpacing: commonSpacing.sm, // 8px
    icon: {
      size: typography.fontSizes.base, // 16px
      color: "white",
      opacity: opacity.full,
      hoverOpacity: opacity.high,
    },
    title: {
      color: "white",
    },
    staffLines: {
      count: otherValues.staffLineCount,
      startPosition: percentages.fifteen, // percentage
      stepPosition: percentages.fifteen, // percentage step between lines
      height: "0.1px",
      color: `rgba(255, 255, 255, ${opacity.medium})`,
    },
  },
  // Profile styles
  profile: {
    containerSpacing: spacingValues["3xl"], // 32px
    heroSpacing: spacingValues.lg, // 16px
    heroHeaderSpacing: spacingValues.lg, // 16px
    heroBadgeSpacing: spacingValues.md, // 12px
    audioWaveformWidth: 80, // 80px
    audioWaveformMaxWidth: 120, // 120px
    audioWaveformHeight: 18, // 18px
    trackInfoSpacing: spacingValues.sm, // 8px
    descriptionMaxWidth: otherValues.sectionMaxWidth, // 640px = 80 * 8px
    descriptionLineHeight: otherValues.lineHeightCustom, // 1.6
    hobbiesSpacing: spacingValues.sm, // 8px
    hobbyChipIconGap: spacingValues.sm, // 8px
    navMarginTop: spacingValues["2xl"], // 24px
    socialMarginTop: spacingValues.md, // 12px
    resumeMarginTop: spacingValues.lg, // 16px
    resumeButton: {
      fontWeight: typography.fontWeights.medium,
      fontSize: typography.fontSizes.base,
      padding: { x: spacingValues.xl, y: spacingValues.sm },
    },
    moodCard: {
      marginTop: spacingValues.lg, // 16px
      padding: spacingValues.md, // 12px
      gap: spacingValues.sm, // 8px
    },
    moodHeaderSpacing: spacingValues.xs, // 4px
    moodIconButtonPadding: spacingValues.xs, // 4px
    moodIframeHeight: 152, // 152px
    currentlyPlaying: {
      marginTop: spacingValues["2xl"], // 24px
      padding: spacingValues.lg, // 16px
      borderRadius: spacingValues.lg, // 16px
      spacing: spacingValues.md, // 12px
      iconSize: 20, // 20px
      iconOpacity: opacity.high,
      labelLetterSpacing: typography.letterSpacing.extraWide,
      labelMarginBottom: spacingValues.xs, // 4px
      playingIndicatorSize: spacingValues.sm, // 8px
    },
  },
  // Experience card styles
  experienceCard: {
    headerSpacing: commonSpacing.sm, // 8px
    headerMarginBottom: commonSpacing.lg, // 16px
    companyMarginBottom: spacingValues["3xl"], // 28px - increased from 24px
    descriptionMarginBottom: spacingValues.lg, // 16px - increased from 12px
    descriptionMarginBottomNoHighlights: spacingValues["2xl"], // 24px
    highlightsMarginBottom: spacingValues["2xl"], // 24px
    highlightsSpacing: spacingValues.md, // 12px
    highlightsGroupSpacing: spacingValues.lg, // 16px - spacing before quality/testing group
    highlightMarker: {
      size: spacingValues.sm, // 8px - increased from 4px for better visibility
      borderRadius: borderRadius.full,
      opacity: opacity.medium, // 0.7 - increased from 0.6 for better visibility
      padding: spacingValues.lg, // 16px - left padding for text to accommodate marker
    },
    skillsSpacing: spacingValues.sm, // 8px
    skillsMarginTop: spacingValues["2xl"], // 24px
    companyBadge: {
      size: otherValues.companyBadgeSize,
      fontSize: commonTypography.smallText.fontSize,
      fontWeight: typography.fontWeights.bold,
    },
  },
} as const;
