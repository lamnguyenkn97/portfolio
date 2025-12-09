import { Box } from "@mui/material";

interface TrebleClefIconProps {
  size?: number;
  color?: string;
  opacity?: number;
}

export const TrebleClefIcon = ({
  size = 24,
  color = "secondary.main",
  opacity = 0.15,
}: TrebleClefIconProps) => {
  return (
    <Box
      sx={{
        width: size,
        height: size * 1.4,
        opacity,
        transition: "opacity 300ms ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width={size}
        height={size * 1.4}
        viewBox="0 0 18 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Minimal treble clef - simple curved lines */}
        <path
          d="M5 2C4 2 3 3 3 4V18C3 19 4 20 5 20C6 20 7 19 7 18V9C8 8 9.5 8 10.5 9V18C10.5 19 11.5 20 12.5 20C13.5 20 14.5 19 14.5 18V5C14.5 3.5 13 2 11.5 2C10 2 8.5 3.5 7 5V4C7 3 6 2 5 2Z"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </Box>
  );
};
