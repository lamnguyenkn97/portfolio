import { Grid, Typography } from "@mui/material";
import React from "react";
import { Project, ProjectCard } from "./components";

const projects: Project[] = [
  {
    title: "Project A",
    description: "Project A is a project that I have worked on for 3 months.",
    thumbnail:
      "https://images.unsplash.com/photo-1567861911437-538298e4232c?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Project B",
    description: "Project B is a project that I have worked on for 6 months.",
    thumbnail:
      "https://images.unsplash.com/photo-1633002239926-181ca9b48a3e?q=80&w=3153&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Project C",
    description: "Project C is a project that I have worked on for 9 months.",
    thumbnail:
      "https://images.unsplash.com/photo-1570630992840-0bdd5732442e?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export const Projects = () => {
  return (
    <Grid>
      <Typography variant="h6">Projects</Typography>
      <Grid spacing={2}>
        {projects.map((project) => (
          <Grid key={project.title}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
