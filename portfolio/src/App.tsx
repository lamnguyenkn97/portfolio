import React from "react";
import { Container, Grid, ThemeProvider, Box } from "@mui/material";
import { Profile } from "./components/profile";
import { AboutMe } from "./components/aboutMe";
import { Experiences } from "./components/experiences";
import { Projects } from "./components/projects";
import { Journals } from "./components/journals";
import { Footer } from "./components/footer";
import { theme } from "./theme/muiTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          mx: "auto",
          minHeight: "100vh",
          bgcolor: "background.default",
          py: 6,
          px: { xs: 3, sm: 3.5, md: 4.5, lg: 5.5 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 5, md: 6 }}
          columnSpacing={{ md: 4, lg: 6 }}
          alignItems="flex-start"
        >
          {/* Left Column - Profile & Navigation */}
          <Grid
            item
            xs={12}
            md={5}
            lg={5}
            sx={{
              position: { xs: "static", md: "sticky" },
              top: { md: 24 },
              alignSelf: "flex-start",
              height: "fit-content",
            }}
          >
            <Profile />
          </Grid>

          {/* Right Column - Content Sections */}
          <Grid item xs={12} md={7} lg={7}>
            <Box
              id="about"
              sx={{
                scrollMarginTop: "100px",
                mb: { xs: 6, md: 8 },
                pt: { xs: 3, md: 4 },
                position: "relative",
              }}
            >
              <AboutMe />
            </Box>

            <Box
              id="experience"
              sx={{
                scrollMarginTop: "100px",
                mb: { xs: 6, md: 8 },
                pt: { xs: 3, md: 4 },
                position: "relative",
              }}
            >
              <Experiences />
            </Box>

            <Box
              id="projects"
              sx={{
                scrollMarginTop: "100px",
                mb: { xs: 6, md: 8 },
                pt: { xs: 3, md: 4 },
                position: "relative",
              }}
            >
              <Projects />
            </Box>

            <Box
              id="journals"
              sx={{
                scrollMarginTop: "100px",
                mb: { xs: 6, md: 8 },
                pt: { xs: 3, md: 4 },
                position: "relative",
              }}
            >
              <Journals />
            </Box>
          </Grid>
        </Grid>

        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
