import { sampleMdx } from "./sampleMdx";

export type BlogPost = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  readTime: string;
  status: "Draft" | "Coming Soon" | "Published";
  mdx?: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "optimizing-react-performance-with-memoization",
    title: "Optimizing React Performance with Memoization",
    summary: "Deep dive into React.memo, useCallback, and useMemo for building faster UIs.",
    tags: ["React", "Performance", "Hooks"],
    status: "Draft",
    readTime: "7 min",
    mdx: sampleMdx,
  },
  {
    id: "building-accessible-forms-in-typescript",
    title: "Building Accessible Forms in TypeScript",
    summary: "Best practices for semantic HTML, ARIA, and validation in modern forms.",
    tags: ["Accessibility", "TypeScript", "Forms"],
    status: "Coming Soon",
    readTime: "9 min",
  },
  {
    id: "demystifying-css-in-js-for-design-systems",
    title: "Demystifying CSS-in-JS for Design Systems",
    summary: "Exploring Styled Components and Emotion for scalable UI component styling.",
    tags: ["Design Systems", "CSS-in-JS", "Styled Components"],
    status: "Coming Soon",
    readTime: "10 min",
  },
];

