import { Stack, useTheme } from "@mui/material";
import { SectionHeader } from "../design-system";
import { Project, ProjectCard } from "./components";

const projects: Project[] = [
  {
    title: "Time Tracking & Timesheet Platform",
    description:
      "Frontend lead for a new time-tracking module in Axon's enterprise Records Management System, used by a law-enforcement customer. Officers log hours, supervisors approve them, and leadership tracks compliance metrics driven by strict, customer-specific rules that changed after almost every customer meeting. Delivered on time for go-live.",
    features: [
      "Four feature areas: weekly timesheet grid with draft/submit flow, timesheet history, supervisor approval workflow, and a team compliance dashboard",
      "Configuration-driven calculation engine for eligibility-based pay hours and time-allocation metrics, so formula changes shipped without code rewrites",
      "Sole engineer on the module for 6 months, working directly with the Product Manager; shipped across the React frontend, GraphQL gateway and backend microservices (30 merged PRs across 5 codebases)",
      "Fixed a production submission failure across 4 services in one day, then added regression tests so later formula changes can't silently break metrics",
      "Eligibility snapshot at submission time keeps historical reports accurate when roles change; permission-based views and feature-flagged rollout",
      "~115 source files with ~43 test files; used Claude Code and Cursor to speed up delivery and tests, with every AI change reviewed",
    ],
    techStack: [
      "React",
      "TypeScript",
      "GraphQL",
      "Apollo Client",
      "Node.js",
      "Jest",
      "LaunchDarkly",
    ],
  },
  {
    title: "Spotify Design System",
    description:
      "I love Spotify's UI — so I rebuilt their design system from scratch. 24 components, published to NPM, and fully accessible.",
    features: [
      "Open-source React component library with 24 reusable components, published to NPM",
      "WCAG AA accessibility compliance with keyboard navigation and ARIA patterns",
      "70+ test cases with comprehensive coverage",
    ],
    techStack: ["React", "TypeScript", "Storybook", "Styled Components"],
    repoUrl: "https://github.com/lamnguyenkn97/spotify_design_system",
    npmUrl: "https://www.npmjs.com/package/spotify-design-system",
    liveUrl: "https://spotifydesignsystem.vercel.app/",
    demoUrl: "https://www.loom.com/share/0d0db7fc585b40dfaaf6035278552394",
    stats: {
      downloadsPerMonth: "2.5k+",
    },
  },
  {
    title: "Spotify Fanmade",
    description:
      "A full-stack Spotify client I built because the real one didn't have everything I wanted. Real-time playback, listening analytics, drag-and-drop queue — plus a demo access system so anyone can try it.",
    features: [
      "Real-time audio playback with Spotify Web Playback SDK and 30s preview fallback for free users",
      "Listening analytics dashboard with Chart.js visualizations — donut, radar, and bar charts",
      "OAuth 2.0 PKCE authentication with HTTP-only cookies and automated demo request system",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Chart.js"],
    repoUrl: "https://github.com/lamnguyenkn97/spotify_fanmade",
    liveUrl: "https://spotify-fanmade.vercel.app/",
    demoUrl: "https://www.loom.com/share/171c400f6b574762872c22e1bfc2590b",
  },
];

export const Projects = () => {
  const theme = useTheme();
  return (
    <Stack
      spacing={theme.custom.layout.section.spacing}
      sx={{
        width: "100%",
        maxWidth: theme.spacing(theme.custom.layout.section.maxWidth),
      }}
    >
      <SectionHeader title="Projects" iconSize={18} />
      <Stack spacing={theme.custom.layout.section.spacing}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Stack>
    </Stack>
  );
};
