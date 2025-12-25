import { Box, Stack, useTheme } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { DSTypography } from "../../design-system";

interface CurrentlyPlayingProps {
  track?: {
    name: string;
    artist: string;
    albumArt?: string;
    isPlaying?: boolean;
  };
}

export const CurrentlyPlaying = ({ track }: CurrentlyPlayingProps) => {
  const theme = useTheme();
  // Placeholder data - replace with Spotify API integration
  const currentTrack = track || {
    name: "Not playing",
    artist: "Connect Spotify API",
    isPlaying: false,
  };

  if (!currentTrack.isPlaying && !track) {
    return null; // Don't show if not playing and no track provided
  }

  return (
    <Box
      sx={{
        mt: 3,
        p: 2,
        borderRadius: 2,
        ...theme.custom.borders.divider,
        bgcolor: "background.paper",
        transition: theme.transitions.create(["all"], {
          duration: theme.transitions.duration.short,
        }),
        "&:hover": {
          borderColor: "primary.main",
          bgcolor: "rgba(0, 194, 184, 0.05)",
        },
      }}
    >
      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ color: "primary.main" }}>
        <FontAwesomeIcon
          icon={faMusic}
          style={{ fontSize: 20, opacity: theme.custom.opacity.high }}
        />
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <DSTypography
            variant="caption"
            sx={{
              fontSize: theme.custom.typography.fontSizes["2xs"],
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              mb: 0.25,
            }}
          >
            Currently Playing
          </DSTypography>
          <DSTypography
            variant="body"
            sx={{
              fontWeight: 500,
              fontSize: theme.custom.typography.fontSizes["sm-md"],
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {currentTrack.name}
          </DSTypography>
          <DSTypography
            variant="caption"
            sx={{
              fontSize: theme.custom.typography.fontSizes.xs,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {currentTrack.artist}
          </DSTypography>
        </Box>
        {currentTrack.isPlaying && (
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: "primary.main",
            }}
          />
        )}
      </Stack>
    </Box>
  );
};
