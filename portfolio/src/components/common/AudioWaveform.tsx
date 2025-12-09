import { Box } from "@mui/material";

interface AudioWaveformProps {
  height?: number;
  color?: string;
  bars?: number;
}

export const AudioWaveform = ({
  height = 40,
  color = "primary.main",
  bars = 12,
}: AudioWaveformProps) => {
  const barHeights = Array.from({ length: bars }, () => Math.random() * 0.6 + 0.2);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 0.5,
        height,
        width: "100%",
      }}
    >
      {barHeights.map((heightRatio, idx) => (
        <Box
          key={idx}
          sx={{
            width: "3px",
            height: `${heightRatio * 100}%`,
            bgcolor: color,
            borderRadius: "2px",
            animation: "waveform 1.2s ease-in-out infinite",
            animationDelay: `${idx * 0.1}s`,
            "@keyframes waveform": {
              "0%, 100%": {
                transform: "scaleY(0.3)",
                opacity: 0.5,
              },
              "50%": {
                transform: "scaleY(1)",
                opacity: 1,
              },
            },
          }}
        />
      ))}
    </Box>
  );
};
