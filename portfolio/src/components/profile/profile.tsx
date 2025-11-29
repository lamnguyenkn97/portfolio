import React from "react";
import { Stack, Typography } from "@mui/material";
import { NavBar } from "../navBar";
import { SocialNetworks } from "./components";

export const Profile = () => {
  return (
    <Stack alignItems="center" sx={{ height: "100%", pl: 2, pt: 5, pb: 5 }}>
      <Stack sx={{ mb: 5 }}>
        <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
          Lam Nguyen
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Frontend Developer
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          I build pixel-perfect, engaging, and accessible digital experiences.
        </Typography>
        <NavBar />
      </Stack>
      <SocialNetworks />
    </Stack>
  );
};
