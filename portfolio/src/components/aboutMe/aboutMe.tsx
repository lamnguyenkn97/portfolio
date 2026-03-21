import { Stack, Box, Link, useTheme } from "@mui/material";
import { SectionHeader, DSTypography } from "../design-system";

export const AboutMe = () => {
  const theme = useTheme();

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      const offset = parseInt(theme.custom.layout.section.scrollMarginTop, 10);
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

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
        I&apos;m a frontend engineer who&apos;s spent 4+ years at{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          Axon
        </Box>{" "}
        building{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          React/TypeScript
        </Box>{" "}
        applications for enterprise clients, and 2 years before that at{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          Novobi
        </Box>{" "}
        working on{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          ERP systems
        </Box>
        . I care about clean interfaces, solid testing, and the kind of details most people
        don&apos;t notice.
      </DSTypography>

      <DSTypography variant="body">
        Outside of work, I play piano, hit the gym, and build side projects like{" "}
        <Link
          href="#projects"
          onClick={scrollToProjects}
          sx={{
            fontWeight: 600,
            color: "primary.main",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Spotify Design System
        </Link>{" "}
        and{" "}
        <Link
          href="#projects"
          onClick={scrollToProjects}
          sx={{
            fontWeight: 600,
            color: "primary.main",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Spotify Fanmade
        </Link>{" "}
        — because sometimes the best way to learn something is to rebuild it from scratch.
      </DSTypography>
    </Stack>
  );
};
