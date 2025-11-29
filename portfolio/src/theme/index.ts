/**
 * Design System Exports
 * Central export point for all design tokens and theme configuration
 */

export * from "./tokens";
export { theme, default as muiTheme } from "./muiTheme";

// Re-export commonly used design tokens for convenience
export { colors, typography, spacing, borderRadius, shadows, transitions } from "./tokens";
