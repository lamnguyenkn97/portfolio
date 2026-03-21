import { Stack, useTheme } from "@mui/material";
import { SectionHeader } from "../design-system";
import { Project, ProjectCard } from "./components";

const projects: Project[] = [
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
