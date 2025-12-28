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
  const currentlyPlayingStyles = theme.custom.componentStyles.profile.currentlyPlaying;

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
        mt: theme.spacing(currentlyPlayingStyles.marginTop),
        p: theme.spacing(currentlyPlayingStyles.padding),
        borderRadius: theme.spacing(currentlyPlayingStyles.borderRadius),
        ...theme.custom.borders.divider,
        bgcolor: "background.paper",
        transition: theme.custom.transitions.hover,
        "&:hover": {
          borderColor: "primary.main",
          bgcolor: theme.custom.colorOpacity.teal.light,
        },
      }}
    >
      <Stack
        direction="row"
        spacing={theme.spacing(currentlyPlayingStyles.spacing)}
        alignItems="center"
        sx={{ color: "primary.main" }}
      >
        <FontAwesomeIcon
          icon={faMusic}
          style={{
            fontSize: currentlyPlayingStyles.iconSize,
            opacity: currentlyPlayingStyles.iconOpacity,
          }}
        />
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <DSTypography
            variant="caption"
            sx={{
              fontSize: theme.custom.typography.fontSizes["2xs"],
              textTransform: "uppercase",
              letterSpacing: currentlyPlayingStyles.labelLetterSpacing,
              mb: theme.spacing(currentlyPlayingStyles.labelMarginBottom),
            }}
          >
            Currently Playing
          </DSTypography>
          <DSTypography
            variant="body"
            sx={{
              fontWeight: theme.custom.typography.fontWeights.medium,
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
              width: theme.spacing(currentlyPlayingStyles.playingIndicatorSize),
              height: theme.spacing(currentlyPlayingStyles.playingIndicatorSize),
              borderRadius: theme.custom.borderRadius.full,
              bgcolor: "primary.main",
            }}
          />
        )}
      </Stack>
    </Box>
  );
};
