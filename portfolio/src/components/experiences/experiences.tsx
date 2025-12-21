import { Stack, useTheme } from "@mui/material";
import { SectionHeader } from "../design-system";
import { Experience, ExperienceCard } from "./components";

const experiences: Experience[] = [
  {
    startDate: "2020",
    endDate: "2022",
    title: "Python Developer",
    company: "Novobi",
    companyUrl: "https://novobi.com/",
    description: "I built ERP application for US customers using Python and Odoo framework.",
    skillSet: ["Python", "Odoo", "PostgreSQL", "Docker"],
    highlights: [
      "Cut ERP page load from 4–5s to under 2s via API batching and UI-level caching, improving workflow efficiency for US clients",
      "Improved form accessibility with ARIA patterns and complete keyboard support across finance and order flows",
      "Reduced regressions ~30% by enforcing API contracts and adding UI smoke tests in CI",
    ],
  },
  {
    startDate: "2012",
    endDate: "Current",
    title: "Frontend Developer (Lead Modules)",
    company: "Axon",
    companyUrl: "https://axon.com",
    description: "I built web applications for US officer clients using React",
    skillSet: ["React", "TypeScript", "Jest", "Material-UI"],
    highlights: [
      "Led front-end development for Axon’s Training System—architected curriculum, course, learner management, and bulk import flows used by officer agencies",
      "Designed the Custom EIS Metric UI, enabling agencies to configure rule-based alerts across officer signals with guardrails and review flows",
      "Improved officer workflows to 98+ Lighthouse a11y with focus management, ARIA, and component-level patterns",
      "Lowered UI regressions ~30% by strengthening Jest/RTL coverage and adding CI checks on critical modules",
    ],
  },
];

export const Experiences = () => {
  const theme = useTheme();
  return (
    <Stack spacing={theme.custom.layout.section.spacing} sx={{ maxWidth: "640px" }}>
      <SectionHeader title="Professional Experience" iconSize={18} />

      {experiences.map((experience) => (
        <ExperienceCard key={experience.title} experience={experience} />
      ))}
    </Stack>
  );
};
