import { SvgIcon } from "@mui/material";

interface MusicNoteIconProps {
  size?: number;
  color?: string;
  opacity?: number;
}

export const MusicNoteIcon = ({
  size = 16,
  color = "text.secondary",
  opacity = 0.3,
}: MusicNoteIconProps) => {
  return (
    <SvgIcon
      sx={{
        width: size,
        height: size,
        color,
        opacity,
        transition: "all 250ms ease",
        "&:hover": {
          opacity: 0.6,
          transform: "scale(1.1)",
        },
      }}
    >
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
    </SvgIcon>
  );
};
