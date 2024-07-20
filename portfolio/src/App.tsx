import React from "react";
import { Outlet } from "react-router-dom";
import { Profile } from "./components/profile";
import { createTheme, Grid, ThemeProvider, Typography } from "@mui/material";
import { Experiences } from "./components/experiences";
import { Projects } from "./components/projects";
import appBackground from "./assets/img/saigon_background_2.jpg";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        className="App"
        height={"100vh"}
        sx={{
          backgroundImage: `url(${appBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      >
        <Grid item xs={3}>
          <Profile />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6">
            I am a frontend developer with a deep love for music, blending my
            technical expertise with a creative flair to craft visually stunning
            and user-friendly web interfaces. With a strong foundation in HTML,
            CSS, and JavaScript, I specialize in creating responsive and
            engaging digital experiences that resonate with users.
          </Typography>
          <Experiences />
          <Projects />
        </Grid>
        <Outlet />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
