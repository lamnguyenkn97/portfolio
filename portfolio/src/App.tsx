import React from "react";
import { Container, Grid, ThemeProvider, Box, useTheme } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Profile } from "./components/profile";
import { AboutMe } from "./components/aboutMe";
import { Experiences } from "./components/experiences";
import { Projects } from "./components/projects";
import { Journals } from "./components/journals";
import { Footer } from "./components/footer";
import { theme } from "./theme/muiTheme";
import { BlogPage } from "./pages/Blog";
import { BlogDetailPage } from "./pages/BlogDetail";

const HomePage = () => {
  const theme = useTheme();
  const layout = theme.custom.layout;

  const sections = [
    { id: "about", content: <AboutMe /> },
    { id: "experience", content: <Experiences /> },
    { id: "projects", content: <Projects /> },
    { id: "journals", content: <Journals /> },
  ];

  const sectionSx = {
    scrollMarginTop: layout.section.scrollMarginTop,
    mb: layout.section.marginBottom,
    pt: layout.section.paddingTop,
    position: "relative",
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        width: "100%",
        mx: "auto",
        minHeight: "100vh",
        bgcolor: "background.default",
        py: layout.container.paddingY,
        px: layout.container.paddingX,
      }}
    >
      <Grid
        container
        spacing={layout.grid.rowSpacing}
        columnSpacing={layout.grid.columnSpacing}
        alignItems="flex-start"
      >
        {/* Left Column - Profile & Navigation */}
        <Grid
          item
          xs={12}
          md={layout.grid.leftColumn.md}
          lg={layout.grid.leftColumn.lg}
          sx={{
            position: { xs: "static", md: "sticky" },
            top: { md: theme.spacing(layout.grid.stickyTopSpacing) },
            alignSelf: "flex-start",
            height: "fit-content",
          }}
        >
          <Profile />
        </Grid>

        {/* Right Column - Content Sections */}
        <Grid item xs={12} md={layout.grid.rightColumn.md} lg={layout.grid.rightColumn.lg}>
          {sections.map((section) => (
            <Box key={section.id} id={section.id} sx={sectionSx}>
              {section.content}
            </Box>
          ))}
        </Grid>
      </Grid>

      <Footer />
    </Container>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
