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
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        transition: theme.custom.transitions.hover,
        "&:hover": {
          borderColor: "primary.main",
          bgcolor: "rgba(0, 194, 184, 0.05)",
        },
      }}
    >
      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ color: "primary.main" }}>
        <FontAwesomeIcon icon={faMusic} style={{ fontSize: 20, opacity: 0.8 }} />
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <DSTypography
            variant="caption"
            sx={{
              fontSize: "0.7rem",
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
              fontSize: "0.8125rem",
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
              fontSize: "0.75rem",
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
              animation: "pulse 2s ease-in-out infinite",
              "@keyframes pulse": {
                "0%, 100%": {
                  opacity: 1,
                  transform: "scale(1)",
                },
                "50%": {
                  opacity: 0.5,
                  transform: "scale(1.2)",
                },
              },
            }}
          />
        )}
      </Stack>
    </Box>
  );
};
