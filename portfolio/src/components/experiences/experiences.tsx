import { Stack, Button, Typography } from "@mui/material";
import { Experience, ExperienceCard } from "./components";

const experiences: Experience[] = [
  {
    startDate: "2020",
    endDate: "2022",
    title: "Python Developer",
    company: "Novobi",
    description: "I built ERP application for US customers using Python and Odoo framework.",
    skillSet: ["Python", "Odoo", "PostgreSQL", "Docker"],
  },
  {
    startDate: "2012",
    endDate: "Current",
    title: "Frontend Developer",
    company: "Axon",
    description: "I built web applications for US officer clients using React",
    skillSet: ["React", "TypeScript", "Jest", "Material-UI"],
  },
];

export const Experiences = () => {
  return (
    <Stack spacing={3} sx={{ mb: 4 }}>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.title} experience={experience} />
      ))}
      <Button variant="contained" onClick={() => {}}>
        <Typography variant="body2">View full resume</Typography>
      </Button>
    </Stack>
  );
};
