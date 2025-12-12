import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { MusicNoteIcon } from "../common/MusicNoteIcon";
import { Journal, JournalCard } from "./components/journalCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Link as RouterLink } from "react-router-dom";

const journals: Journal[] = [
  {
    title: "Design System Hand-off Checklist",
    summary:
      "How I package tokens, accessibility notes, and component contracts so design and dev stay in sync. Covers docs, lint gates, and Storybook hand-off.",
    tags: ["Design Systems", "Tokens", "Docs"],
    readTime: "6 min",
    status: "coming-soon",
  },
  {
    title: "A11y & Perf: Frontend Guardrails",
    summary:
      "Keyboard traps, focus rings, ARIA patterns, and perf budgets I enforce by default. Includes quick checks I run before shipping.",
    tags: ["Accessibility", "Performance", "Front-End"],
    readTime: "5 min",
    status: "coming-soon",
  },
  {
    title: "CI for UI: Visual + Contract Tests",
    summary:
      "Jest/RTL, lightweight visual diffs, and API contract mocks that reduce regressions. Notes from shipping to regulated industries.",
    tags: ["CI/CD", "Testing", "Jest/RTL"],
    readTime: "7 min",
    status: "coming-soon",
  },
];

export const Journals = () => {
  return (
    <Stack spacing={3} sx={{ maxWidth: "740px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 1,
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
          Frontend Journals
        </Typography>
      </Box>

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
