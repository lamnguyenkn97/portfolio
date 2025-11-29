import { Card, CardContent, Grid, Stack, Typography, Chip } from "@mui/material";

export type Experience = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  skillSet: string[];
};

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const { title, company, startDate, endDate, description, skillSet } = experience;
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <Typography variant="h6">
              {startDate} - {endDate}
            </Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              {title}, {company}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {description}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {skillSet.map((skill, idx) => (
                <Chip key={skill + idx.toString()} label={skill} variant="outlined" size="small" />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
