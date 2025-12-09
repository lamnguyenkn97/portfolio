import { Box, Stack, Typography, Chip } from "@mui/material";
import { MusicNoteIcon } from "../../common/MusicNoteIcon";
import { colors as spotifyColors } from "spotify-design-system/dist/styles/tokens/colors";
import { Button, ButtonSize, ButtonVariant } from "spotify-design-system";

export const DesignSystemShowcase = () => {
  const features = [
    "Component Library",
    "Design Tokens",
    "Accessibility",
    "Documentation",
    "TypeScript",
    "React",
  ];

  return (
    <Box
      sx={{
        position: "relative",
        p: 4,
        borderRadius: 2,
        border: "2px solid",
        borderColor: "rgba(29, 185, 84, 0.35)",
        bgcolor: "rgba(29, 185, 84, 0.08)",
        mb: 4,
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "4px",
          height: "100%",
          bgcolor: "#1DB954",
        },
        "&:hover": {
          borderColor: "rgba(29, 185, 84, 0.6)",
          bgcolor: "rgba(29, 185, 84, 0.12)",
          boxShadow: "0 12px 32px rgba(29, 185, 84, 0.2)",
        },
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <MusicNoteIcon size={24} color={spotifyColors.primary.brand} opacity={0.9} />
          <Typography
            variant="h5"
            sx={{
              color: spotifyColors.primary.brand,
              fontWeight: 700,
            }}
          >
            Spotify Design System
          </Typography>
        </Stack>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            lineHeight: 1.75,
          }}
        >
          A comprehensive design system inspired by Spotify&apos;s visual language. Built with
          modern frontend technologies, featuring a complete component library, design tokens,
          accessibility standards, and comprehensive documentation.
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap">
          {features.map((feature) => (
            <Chip
              key={feature}
              label={feature}
              size="small"
              sx={{
                bgcolor: "rgba(29, 185, 84, 0.12)",
                color: spotifyColors.primary.brand,
                border: "1px solid",
                borderColor: "rgba(29, 185, 84, 0.35)",
                fontWeight: 500,
                "&:hover": {
                  bgcolor: "rgba(29, 185, 84, 0.18)",
                  borderColor: spotifyColors.primary.brandHighlight,
                },
              }}
            />
          ))}
        </Stack>

        <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
          <Box component="a" href="#projects" sx={{ textDecoration: "none" }}>
            <Button variant={ButtonVariant.Primary} size={ButtonSize.Medium}>
              View Case Study
            </Button>
          </Box>
          <Box
            component="a"
            href="https://spotify-storybook.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: "none" }}
          >
            <Button variant={ButtonVariant.Secondary} size={ButtonSize.Medium}>
              Storybook
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};
