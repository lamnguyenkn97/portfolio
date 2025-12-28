import { Stack, useTheme } from "@mui/material";
import { SectionHeader } from "../design-system";
import { Experience, ExperienceCard } from "./components";

const experiences: Experience[] = [
  {
    startDate: "2022",
    endDate: "Current",
    title: "Frontend Engineer",
    company: "Axon",
    companyUrl: "https://axon.com",
    description:
      "Building React/TypeScript applications in the Records Management department for enterprise clients, developing Training, EIS, Report Writing, and Personnel Management systems with dynamic configuration capabilities.",
    skillSet: ["React", "TypeScript", "Jest", "Design System", "E2E Testing", "pdfTron"],
    highlights: [
      "Led Training System development—built scalable course and curriculum management platform with learner management and bulk import capabilities, serving multiple enterprise clients",
      "Extended EIS (Early Intervention System)—developed custom metric rule-based alerting system with guardrails and review workflows, enabling data-driven decision making",
      "Integrated Report PDF Review—implemented pdfTron integration for PDF report display, significantly improving workflow efficiency and user experience",
      "Built Personnel System—developed profile management and time tracking platform with dynamic configuration, supporting complex organizational requirements",
      "Own all testing—implemented shift-left testing strategy with comprehensive automation (E2E, unit, integration), ensuring high code quality and reducing regressions",
      "Improved accessibility standards—established focus management, ARIA patterns, and component-level accessibility patterns across all systems, ensuring inclusive user experience",
    ],
  },
  {
    startDate: "2020",
    endDate: "2022",
    title: "Software Engineer",
    company: "Novobi",
    companyUrl: "https://novobi.com/",
    description:
      "Developed enterprise ERP solutions with customization and integration for B2B clients, building Sales, Inventory, Accounting, Delivery modules, and e-commerce integrations.",
    skillSet: ["Python", "Odoo", "JavaScript", "PostgreSQL", "Docker", "Shopify API"],
    highlights: [
      "Developed enterprise ERP modules (Sales, Inventory, Accounting, Delivery) for multiple B2B clients including GoodNature and FeelGoodz, customizing workflows to meet complex business requirements",
      "Built Shopify integration—developed seamless data synchronization between ERP and e-commerce platforms, enabling real-time inventory and order management",
      "Upgraded Accounting Module (company product) from version 13 to 14—added spreadsheet financial report functionality, enhancing financial reporting capabilities for enterprise clients",
      "Led Shopify integration project—architected end-to-end business workflow integration from Sale → Inventory → Shipping, streamlining operations for multiple clients",
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
