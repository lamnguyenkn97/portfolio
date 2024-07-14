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
        <Grid container>
          <Grid item md={1}>
            <img
              alt={"project-thumbnail"}
              src={project.thumbnail}
              width={60}
              height={60}
            />
          </Grid>
          <Grid item md={7}>
            <Typography justifyItems={"flex-start"} variant={"h6"}>
              {project.title}
            </Typography>
            <Typography variant={"body2"}>{project.description}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
