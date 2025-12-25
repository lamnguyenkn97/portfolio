import { Stack, Box, useTheme } from "@mui/material";
import { SectionHeader, DSTypography } from "../design-system";

export const AboutMe = () => {
  const theme = useTheme();
  return (
    <Stack
      spacing={theme.custom.layout.section.spacing}
      sx={{
        width: "100%",
        maxWidth: theme.spacing(theme.custom.layout.section.maxWidth),
      }}
    >
      <SectionHeader title="About" />
      <DSTypography variant="body">
        I&apos;m a Frontend Engineer passionate about crafting accessible, pixel-perfect user
        interfaces that blend thoughtful design with robust engineering. My work lives at the
        intersection of code and creativity, where I build experiences that not only look great but
        are meticulously crafted for performance and usability.
      </DSTypography>

      <DSTypography variant="body">
        Currently, I&apos;m a Front End Developer specializing in React and TypeScript. I contribute
        to the creation and maintenance of UI components and design systems, ensuring our platform
        meets web accessibility standards and best practices to deliver an inclusive user
        experience.
      </DSTypography>

      <DSTypography variant="body">
        In the past, I&apos;ve had the opportunity to develop software across a variety of settings
        — from{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          advertising agencies
        </Box>{" "}
        and{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          large corporations
        </Box>{" "}
        to{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          start-ups
        </Box>{" "}
        and{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          small digital product studios
        </Box>
        .
      </DSTypography>

      <DSTypography variant="body">
        When I&apos;m not coding, you&apos;ll find me playing piano, exploring new music, or working
        on side projects that combine my love for music and technology. I&apos;ve built projects
        like Spotify Design System and Spotify Fanmade, where I get to merge my passion for frontend
        engineering with my love for music.
      </DSTypography>
    </Stack>
  );
};
