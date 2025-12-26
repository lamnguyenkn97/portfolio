import { Stack, useTheme } from "@mui/material";
import { SectionHeader } from "../design-system";
import { Project, ProjectCard } from "./components";

const projects: Project[] = [
  {
    title: "Spotify Design System",
    features: [
      "Open-source React component library with 24 reusable components, published to NPM",
      "Built with TypeScript and Storybook, featuring atomic design methodology and design tokens",
      "WCAG AA accessibility compliance with comprehensive keyboard navigation and ARIA patterns",
      "Production-ready code quality with comprehensive test coverage (70+ test cases)",
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
    features: [
      "Full-stack music application built with Next.js 15 and React 18",
      "Real-time audio playback with Spotify Web Playback SDK (Premium) and 30s preview fallback (Free users)",
      "Listening analytics dashboard with interactive Chart.js visualizations (donut, radar, bar charts)",
      "Advanced queue management with drag-and-drop reordering and visual drawer",
      "OAuth 2.0 PKCE authentication with HTTP-only cookies and automated demo request system",
      "Enterprise-level architecture using React Context, SWR for data fetching, and strategy design patterns",
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
