import { Stack, Typography, Box } from "@mui/material";
import { Experience, ExperienceCard } from "./components";
import { MusicNoteIcon } from "../common/MusicNoteIcon";

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
  return (
    <Stack spacing={4} sx={{ maxWidth: "640px" }}>
      {/* Section Header with Music Note */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 2,
          mt: -1,
          pl: 1.5,
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            right: 0,
            top: "50%",
            transform: "translateY(-60%)",
            height: 18,
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(238,200,106,0.32) 0 1px, transparent 1px 4px)",
            opacity: 0.5,
            pointerEvents: "none",
            zIndex: 0,
          },
          zIndex: 1,
        }}
      >
        <MusicNoteIcon size={18} color="secondary.main" opacity={0.75} />
        <Typography
          variant="h6"
          sx={{
            color: "text.primary",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Professional Experience
        </Typography>
      </Box>

      {experiences.map((experience) => (
        <ExperienceCard key={experience.title} experience={experience} />
      ))}
    </Stack>
  );
};
