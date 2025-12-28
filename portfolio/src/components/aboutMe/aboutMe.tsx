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
        For 4+ years at{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          Axon
        </Box>{" "}
        in the{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          Records Management
        </Box>{" "}
        department, I&apos;ve built{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          React/TypeScript
        </Box>{" "}
        applications for enterprise clients. I developed critical systems including{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          Training
        </Box>
        ,{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          EIS (Early Intervention System)
        </Box>
        ,{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          Report Writing
        </Box>
        , and{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          Personnel Management
        </Box>{" "}
        platforms with dynamic configuration capabilities.
      </DSTypography>

      <DSTypography variant="body">
        I own all testing for my projects, implementing{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          shift-left testing
        </Box>{" "}
        and{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          automation test writing
        </Box>{" "}
        to ensure reliability and accessibility standards across complex workflows.
      </DSTypography>

      <DSTypography variant="body">
        Prior to Axon, I spent 2 years at{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          Novobi
        </Box>{" "}
        building{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          ERP systems
        </Box>{" "}
        using{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          Python
        </Box>
        ,{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          Odoo
        </Box>
        , and{" "}
        <Box component="span" sx={{ fontWeight: 600 }}>
          JavaScript
        </Box>{" "}
        for B2B clients, gaining deep insight into complex enterprise workflows and business
        requirements.
      </DSTypography>

      <DSTypography variant="body">
        In my free time, I play piano and build side projects like{" "}
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
        (see{" "}
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
          Projects
        </Link>{" "}
        section below).
      </DSTypography>
    </Stack>
  );
};
