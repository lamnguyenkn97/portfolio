import {
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

export type Experience = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  skillSet: string[];
};

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const { title, company, startDate, endDate, description, skillSet } =
    experience;
  return (
    <Card>
      <CardContent>
        <Grid container spacing={0} alignItems={"flex-start"}>
          <Grid item md={1}>
            <Typography variant={"h6"}>
              {startDate} - {endDate}
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography variant={"body1"}>
              {title}, {company}
            </Typography>
            <Typography variant={"body2"}>{description}</Typography>
            <Stack direction={"row"}>
              {skillSet.map((skill, idx) => (
                <Chip
                  key={skill + idx.toString()}
                  sx={{ mr: 1 }}
                  variant={"outlined"}
                  label={skill}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
