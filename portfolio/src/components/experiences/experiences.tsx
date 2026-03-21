import { Stack, useTheme } from "@mui/material";
import { SectionHeader } from "../design-system";
import { Experience, ExperienceCard } from "./components";

const experiences: Experience[] = [
  {
    startDate: "2022",
    endDate: "Current",
    isCurrent: true,
    title: "Frontend Engineer",
    company: "Axon",
    companyUrl: "https://axon.com",
    description:
      "Building React/TypeScript applications for enterprise clients in the Records Management department.",
    skillSet: ["React", "TypeScript", "Jest", "Design System", "E2E Testing", "pdfTron"],
    highlights: [
      "Led Training System — built course and curriculum management with learner management and bulk import",
      "Extended EIS — developed custom metric rule-based alerting with guardrails and review workflows",
      "Integrated pdfTron for PDF report review, improving workflow efficiency",
      "Built Personnel System — profile management and time tracking with dynamic configuration",
      "Own all testing — shift-left strategy with E2E, unit, and integration automation",
      "Improved accessibility — established focus management and ARIA patterns across all systems",
    ],
  },
  {
    startDate: "2020",
    endDate: "2022",
    title: "Software Engineer",
    company: "Novobi",
    companyUrl: "https://novobi.com/",
    description: "Developed enterprise ERP solutions and e-commerce integrations for B2B clients.",
    skillSet: ["Python", "Odoo", "JavaScript", "PostgreSQL", "Docker", "Shopify API"],
    highlights: [
      "Built ERP modules (Sales, Inventory, Accounting, Delivery) for B2B clients including GoodNature and FeelGoodz",
      "Built Shopify integration — real-time data sync between ERP and e-commerce platforms",
      "Upgraded Accounting Module v13 → v14, adding spreadsheet financial report functionality",
      "Led end-to-end Shopify integration — Sale → Inventory → Shipping workflow for multiple clients",
    ],
  },
];

export const Experiences = () => {
  const theme = useTheme();
  return (
    <Stack
      spacing={theme.custom.layout.section.spacing}
      sx={{
        width: "100%",
        maxWidth: theme.spacing(theme.custom.layout.section.maxWidth),
      }}
    >
      <SectionHeader title="Professional Experience" iconSize={18} />

      {experiences.map((experience) => (
        <ExperienceCard key={experience.title} experience={experience} />
      ))}
    </Stack>
  );
};
