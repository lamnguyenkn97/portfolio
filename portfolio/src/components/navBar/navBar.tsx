import { Stack, Typography } from "@mui/material";

export const NavBar = () => {
  return (
    <Stack justifyContent={"space-evenly"}>
      <Typography fontWeight={"normal"} variant={"body1"} sx={{ mb: 2 }}>
        About me
      </Typography>
      <Typography sx={{ mb: 2 }} variant={"body1"}>
        Projects
      </Typography>
      <Typography sx={{ mb: 2 }} variant={"body1"}>
        Experience
      </Typography>
    </Stack>
  );
};
