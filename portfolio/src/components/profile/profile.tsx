import React from "react";
import { Stack, Typography } from "@mui/material";
import { NavBar } from "../navBar";
import { SocialNetworks } from "./components";

export const Profile = () => {
  return (
    <Stack
      alignItems={"center"}
      boxSizing={"border-box"}
      sx={{ height: "100%", pl: 2, pt: 5, pb: 5 }}
    >
      <Stack sx={{ mb: 5 }}>
        <Typography
          sx={{ mb: 2 }}
          fontWeight={"bold"}
          variant="h3"
          align="left"
        >
          Lam Nguyen
        </Typography>
        <Typography sx={{ mb: 2 }} variant="h5" align="left">
          Frontend Developer
        </Typography>
        <Typography sx={{ mb: 2 }} variant="body1" align="left">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </Typography>
        <NavBar />
      </Stack>
      <SocialNetworks />
    </Stack>
  );
};
