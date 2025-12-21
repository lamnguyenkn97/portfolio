import React from "react";
import { Pill } from "./Pill";

export interface SkillPillProps {
  label: string;
}

/**
 * Design System Skill Pill Component
 * Legacy wrapper - use Pill component directly
 * @deprecated Use Pill component with variant="skill"
 */
export const SkillPill = ({ label }: SkillPillProps) => {
  return <Pill variant="skill">{label}</Pill>;
};

