import React from "react";
import { Box, BoxProps, useTheme } from "@mui/material";

export interface AvatarProps extends Omit<BoxProps, "component"> {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
}

const sizeMap = {
  small: { xs: "80px", sm: "100px" },
  medium: { xs: "120px", sm: "140px" },
  large: { xs: "160px", sm: "180px" },
};

/**
 * Design System Avatar Component
 * Consistent avatar/image styling
 */
export const Avatar = ({ src, alt, size = "medium", sx, ...props }: AvatarProps) => {
  const theme = useTheme();
  const sizes = sizeMap[size];

  return (
    <Box
      {...props}
      sx={{
        width: sizes,
        height: sizes,
        borderRadius: theme.custom.borderRadius.lg,
        overflow: "hidden",
        ...theme.custom.borders.divider,
        ...sx,
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: theme.custom.transitions.hover,
          "&:hover": {},
        }}
      />
    </Box>
  );
};
