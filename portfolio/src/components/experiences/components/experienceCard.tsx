import { Box, Stack, Typography } from "@mui/material";
import { MusicNoteIcon } from "../../common/MusicNoteIcon";

export type Experience = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  skillSet: string[];
  companyUrl?: string;
  highlights?: string[];
};
export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const { title, company, startDate, endDate, description, skillSet, companyUrl, highlights } =
    experience;

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "background.paper",
        borderRadius: 2,
        border: "1px solid",
        borderColor: "rgba(238,200,106,0.22)",
        overflow: "hidden",
        transition: "all 260ms ease",
        "&:hover": {
          borderColor: "rgba(238,200,106,0.4)",
          boxShadow: (theme) =>
            `0 10px 28px ${
              theme.palette.mode === "dark" ? "rgba(0, 0, 0, 0.35)" : "rgba(0, 0, 0, 0.15)"
            }`,
          transform: "translateY(-1px)",
          "& .accent-bar": {
            bgcolor: "secondary.main",
            opacity: 0.7,
          },
        },
      }}
    >
      <Stack direction="row" spacing={2} sx={{ p: { xs: 2.5, md: 3 }, alignItems: "flex-start" }}>
        {/* Left accent bar */}
        <Box
          className="accent-bar"
          sx={{
            width: "4px",
            height: "100%",
            minHeight: "160px",
            borderRadius: "999px",
            bgcolor: "divider",
            opacity: 0.5,
            transition: "all 200ms ease",
          }}
        />

        {/* Content Section */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          {/* Header */}
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontWeight: 600,
                fontSize: "0.85rem",
                letterSpacing: "0.02em",
              }}
            >
              {startDate} — {endDate}
            </Typography>
          </Stack>

          <Typography
            variant="h6"
            sx={{
              color: "text.primary",
              fontWeight: 700,
              fontSize: "1.25rem",
              letterSpacing: "-0.01em",
              mb: 0.25,
            }}
          >
            {title}
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
            {/* Company initial badge */}
            <Box
              sx={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                bgcolor:
                  "radial-gradient(circle at 30% 30%, rgba(0,194,184,0.18), rgba(245,193,86,0.15))",
                color: "secondary.main",
                fontWeight: 700,
                fontSize: "0.9rem",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {company.charAt(0).toUpperCase()}
            </Box>
            {companyUrl ? (
              <Typography
                variant="body2"
                component="a"
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "secondary.main",
                  fontWeight: 600,
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {company}
              </Typography>
            ) : (
              <Typography
                variant="body2"
                sx={{
                  color: "secondary.main",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                }}
              >
                {company}
              </Typography>
            )}
          </Stack>

          {/* Album Description */}
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              lineHeight: 1.7,
              mb: highlights?.length ? 1.25 : 2,
              fontSize: "0.875rem",
              opacity: 0.85,
            }}
          >
            {description}
          </Typography>

          {/* Highlights (impact bullets) */}
          {highlights?.length ? (
            <Stack
              component="ul"
              spacing={0.7}
              sx={{
                listStyle: "none",
                pl: 0,
                mb: 2,
                color: "text.secondary",
                lineHeight: 1.7,
              }}
            >
              {highlights.map((item, idx) => (
                <Box
                  component="li"
                  key={idx}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1,
                  }}
                >
                  <Box sx={{ mt: "3px", flexShrink: 0 }}>
                    <MusicNoteIcon size={10} color="secondary.main" opacity={0.7} />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "0.85rem",
                      opacity: 0.9,
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Stack>
          ) : null}

          {/* Track List (Skills) - Piano key badges */}
          <Stack direction="row" spacing={0.75} flexWrap="wrap">
            {skillSet.map((skill, idx) => {
              return (
                <Box
                  key={skill + idx.toString()}
                  sx={{
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    px: 1.1,
                    py: 0.5,
                    borderRadius: "10px",
                    bgcolor: "rgba(255,255,255,0.04)",
                    border: "1px solid",
                    borderColor: "rgba(255,255,255,0.12)",
                    transition: "all 180ms ease",
                    cursor: "default",
                    "&:hover": {
                      borderColor: "secondary.main",
                      color: "secondary.main",
                      bgcolor: "rgba(245,193,86,0.08)",
                    },
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {skill}
                  </Typography>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
