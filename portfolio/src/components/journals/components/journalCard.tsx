import { Box, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Card, Badge, Pill, DSTypography, Button } from "../../design-system";

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
    <Card
      variant="gold"
      sx={
        {
          // Padding is now handled by Card component default
        }
      }
    >
      <Stack spacing={1.2}>
        <Stack direction="row" spacing={1} alignItems="center">
          <DSTypography variant="projectTitle">{title}</DSTypography>
          {status && (
            <Badge
              label={
                status === "coming-soon"
                  ? "Coming soon"
                  : status === "draft"
                    ? "Draft"
                    : "Published"
              }
              variant="gold"
              size="small"
            />
          )}
          {readTime && <Badge label={readTime} variant="default" size="small" />}
        </Stack>

        <DSTypography variant="description">{summary}</DSTypography>

        <Stack direction="row" spacing={0.75} flexWrap="wrap">
          {tags.map((tag) => (
            <Pill key={tag} variant="default">
              {tag}
            </Pill>
          ))}
        </Stack>

        {href ? (
          <Button
            size="small"
            variant="outlined"
            endIcon={<FontAwesomeIcon icon={faArrowRightLong} />}
            sx={{
              alignSelf: "flex-start",
              borderColor: "divider",
              bgcolor: "background.paper",
              color: "secondary.main",
              "&:hover": {
                borderColor: "secondary.main",
                bgcolor: "rgba(255, 193, 7, 0.1)",
              },
            }}
            component={RouterLink}
            to={href}
            disabled={isComingSoon}
          >
            Read
          </Button>
        ) : null}
      </Stack>
    </Card>
  );
};
