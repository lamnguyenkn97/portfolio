import { Typography, Stack, Box } from "@mui/material";
import { MusicNoteIcon } from "../common/MusicNoteIcon";

export const AboutMe = () => {
  return (
    <Stack spacing={3} sx={{ maxWidth: "640px" }}>
      {/* Section title with subtle pill and note */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 1,
          mt: -1,
          pl: 1.5,
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            right: 0,
            top: "50%",
            transform: "translateY(-60%)",
            height: 18,
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(238,200,106,0.32) 0 1px, transparent 1px 4px)",
            opacity: 0.5,
            pointerEvents: "none",
            zIndex: 0,
          },
          zIndex: 1,
        }}
      >
        <MusicNoteIcon size={16} color="secondary.main" opacity={0.75} />
        <Typography
          variant="h6"
          sx={{
            color: "text.primary",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          About
        </Typography>
      </Box>
      <Typography
        variant="body1"
        sx={{
          color: "text.primary",
          lineHeight: 1.75,
          fontSize: "1rem",
        }}
      >
        I&apos;m a Frontend Engineer passionate about crafting accessible, pixel-perfect user
        interfaces that blend thoughtful design with robust engineering. My work lives at the
        intersection of code and creativity, where I build experiences that not only look great but
        are meticulously crafted for performance and usability.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "text.primary",
          lineHeight: 1.75,
          fontSize: "1rem",
        }}
      >
        Currently, I&apos;m a Front End Developer specializing in React and TypeScript. I contribute
        to the creation and maintenance of UI components and design systems, ensuring our platform
        meets web accessibility standards and best practices to deliver an inclusive user
        experience.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "text.primary",
          lineHeight: 1.75,
          fontSize: "1rem",
        }}
      >
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
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "text.primary",
          lineHeight: 1.75,
          fontSize: "1rem",
        }}
      >
        When I&apos;m not coding, you&apos;ll find me playing piano, exploring new music, or working
        on side projects that combine my love for music and technology. I&apos;ve built projects
        like Spotify Design System and Spotify Fanmade, where I get to merge my passion for frontend
        engineering with my love for music.
      </Typography>
    </Stack>
  );
};
