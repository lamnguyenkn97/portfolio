import { Box, Stack, Typography, Chip, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export type Journal = {
  title: string;
  summary: string;
  tags: string[];
  readTime?: string;
  status?: "draft" | "coming-soon" | "published";
  href?: string;
};

export const JournalCard = ({ journal }: { journal: Journal }) => {
  const { title, summary, tags, readTime, status, href } = journal;
  const isComingSoon = status === "coming-soon";

  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "rgba(238,200,106,0.25)",
        bgcolor: "rgba(255,255,255,0.02)",
        borderRadius: 2,
        p: 2.25,
        transition: "all 220ms ease",
        "&:hover": {
          borderColor: "rgba(238,200,106,0.45)",
          boxShadow: "0 8px 18px rgba(0,0,0,0.22)",
          transform: "translateY(-1px)",
        },
      }}
    >
      <Stack spacing={1.2}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography
            variant="h6"
            sx={{
              color: "text.primary",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </Typography>
          {status ? (
            <Chip
              label={status === "coming-soon" ? "Coming soon" : status === "draft" ? "Draft" : "Published"}
              size="small"
              sx={{
                height: 22,
                fontSize: "0.7rem",
                fontWeight: 700,
                borderRadius: 999,
                bgcolor: "rgba(238,200,106,0.12)",
                color: "secondary.main",
                border: "1px solid rgba(238,200,106,0.3)",
              }}
            />
          ) : null}
          {readTime ? (
            <Chip
              label={readTime}
              size="small"
              sx={{
                height: 22,
                fontSize: "0.7rem",
                fontWeight: 700,
                borderRadius: 999,
                bgcolor: "rgba(255,255,255,0.05)",
                color: "text.secondary",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          ) : null}
        </Stack>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            lineHeight: 1.65,
          }}
        >
          {summary}
        </Typography>

        <Stack direction="row" spacing={0.75} flexWrap="wrap">
          {tags.map((tag) => (
            <Box
              key={tag}
              sx={{
                px: 1,
                py: 0.4,
                borderRadius: 999,
                bgcolor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "text.secondary",
                letterSpacing: "0.01em",
              }}
            >
              {tag}
            </Box>
          ))}
        </Stack>

        {href ? (
          <Button
            size="small"
            variant="text"
            color="secondary"
            endIcon={<FontAwesomeIcon icon={faArrowRightLong} />}
            sx={{ alignSelf: "flex-start", textTransform: "none", fontWeight: 700, pl: 0 }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            disabled={isComingSoon}
          >
            Read
          </Button>
        ) : null}
      </Stack>
    </Box>
  );
};

