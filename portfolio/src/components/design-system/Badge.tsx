import React from "react";
import { Pill, PillProps } from "./Pill";

export type BadgeVariant = "teal" | "gold" | "spotify" | "default";
export type BadgeSize = "small" | "medium";

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
}

/**
 * Design System Badge Component
 * Legacy wrapper - use Pill component directly
 * @deprecated Use Pill component with variant and size props
 */
export const Badge = ({ label, variant = "default", size = "small" }: BadgeProps) => {
  return <Pill variant={variant as PillProps["variant"]} size={size}>{label}</Pill>;
};

