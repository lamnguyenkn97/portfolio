import { Card, CardContent, Grid, Typography } from "@mui/material";

export type Project = {
  title: string;
  description: string;
  thumbnail: string;
};

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
            <img
              alt="project-thumbnail"
              src={project.thumbnail}
              style={{ width: 60, height: 60, objectFit: "cover", borderRadius: 8 }}
            />
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant="h6">{project.title}</Typography>
            <Typography variant="body2">{project.description}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
