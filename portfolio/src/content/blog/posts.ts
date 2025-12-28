import { throttleLodashMdx } from "./throttleLodashMdx";

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
    id: "update-real-time-with-throttle-in-lodash",
    title: "Update Real Time with Throttle in Lodash",
    summary: "Optimizing real-time updates with lodash throttle for better performance and UX.",
    tags: ["JavaScript", "Performance", "Lodash"],
    status: "Published",
    readTime: "5 min",
    mdx: throttleLodashMdx,
  },
];
