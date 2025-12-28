import React from "react";
import { Container, Grid, Stack } from "@mui/material";
import { Profile } from "../profile";

interface BlogLayoutProps {
  children: React.ReactNode;
}

/**
 * Reusable layout component for Blog pages
 * Provides consistent two-column layout with sticky profile sidebar
 */
export const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        width: "100%",
        mx: "auto",
        minHeight: "100vh",
        bgcolor: "background.default",
        py: 6,
        px: { xs: 3, sm: 3.5, md: 4.5, lg: 5.5 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 5, md: 6 }}
        columnSpacing={{ md: 4, lg: 6 }}
        alignItems="flex-start"
      >
        {/* Left column - Profile sidebar */}
        <Grid
          item
          xs={12}
          md={5}
          lg={5}
          sx={{
            position: { xs: "static", md: "sticky" },
            top: { md: 24 },
            alignSelf: "flex-start",
            height: "fit-content",
          }}
        >
          <Profile />
        </Grid>

        {/* Right column - Blog content */}
        <Grid item xs={12} md={7} lg={7}>
          <Stack spacing={3.5}>{children}</Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
