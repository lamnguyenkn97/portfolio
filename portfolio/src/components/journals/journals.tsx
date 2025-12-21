import React from "react";
import { Box, Stack, Button, useTheme } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { SectionHeader } from "../design-system";
import { Journal, JournalCard } from "./components/journalCard";
import { Link as RouterLink } from "react-router-dom";
import { blogPosts } from "../../content/blog/posts";

export const Journals = () => {
  const theme = useTheme();

  // Convert blog posts to journal format for display
  const journals: Journal[] = blogPosts.map((post) => ({
    title: post.title,
    summary: post.summary,
    tags: post.tags,
    readTime: post.readTime,
    status:
      post.status === "Published"
        ? "published"
        : post.status === "Coming Soon"
          ? "coming-soon"
          : "draft",
    href: post.mdx ? `/blog/${post.id}` : undefined,
  }));

  return (
    <Stack spacing={theme.custom.layout.section.spacing} sx={{ maxWidth: "740px" }}>
      <SectionHeader title="Frontend Journals" iconSize={18} />

      <Stack spacing={2.25}>
        {journals.map((journal) => (
          <JournalCard key={journal.title} journal={journal} />
        ))}
      </Stack>

      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Button
          variant="text"
          color="secondary"
          endIcon={<FontAwesomeIcon icon={faExternalLinkAlt} />}
          sx={{ textTransform: "none", fontWeight: 700 }}
          component={RouterLink}
          to="/blog"
        >
          View all on blog
        </Button>
      </Box>
    </Stack>
  );
};
