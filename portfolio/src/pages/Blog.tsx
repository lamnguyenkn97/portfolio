import React from "react";
import { Box, Button, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { MusicNoteIcon } from "../components/common/MusicNoteIcon";
import { Profile } from "../components/profile";
import { blogPosts } from "../content/blog/posts";

export const BlogPage = () => {
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
        {/* Left column keeps the main profile/sticky feel */}
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

        {/* Right column: blog content */}
        <Grid item xs={12} md={7} lg={7}>
          <Stack spacing={3.5}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Button
                variant="outlined"
                size="small"
                component={RouterLink}
                to="/"
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  borderColor: "primary.main",
                  color: "primary.main",
                  "&:hover": { borderColor: "primary.dark", color: "primary.dark" },
                }}
              >
                Back to portfolio
              </Button>
              <Chip
                label="MDX-ready — publishing soon"
                size="small"
                sx={{
                  bgcolor: "rgba(245,193,86,0.12)",
                  border: "1px solid rgba(245,193,86,0.35)",
                  color: "secondary.main",
                  fontWeight: 700,
                }}
              />
            </Stack>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 1,
                mt: -1,
                pl: 1.5,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: "50%",
                  transform: "translateY(-60%)",
                  height: 18,
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, rgba(238,200,106,0.32) 0 1px, transparent 1px 4px)",
                  opacity: 0.5,
                  pointerEvents: "none",
                  zIndex: 0,
                },
                zIndex: 1,
              }}
            >
              <MusicNoteIcon size={18} color="secondary.main" opacity={0.75} />
              <Typography
                variant="h6"
                sx={{
                  color: "text.primary",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Frontend Journals
              </Typography>
            </Box>

            <Stack spacing={2}>
              {blogPosts.map((post) => (
                <Box
                  key={post.title}
                  sx={{
                    p: 2.5,
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: "divider",
                    bgcolor: "background.paper",
                    transition: "all 240ms ease",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      borderColor: "primary.main",
                      boxShadow: (theme) =>
                        `0 6px 16px ${
                          theme.palette.mode === "dark" ? "rgba(0,0,0,0.32)" : "rgba(0,0,0,0.12)"
                        }`,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Stack spacing={1.25}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography
                        variant="overline"
                        sx={{ letterSpacing: "0.12em", color: "text.secondary", fontWeight: 700 }}
                      >
                        {post.readTime}
                      </Typography>
                      <Chip
                        label={post.status}
                        size="small"
                        sx={{
                          height: 22,
                          borderRadius: 999,
                          bgcolor:
                            post.status === "Draft"
                              ? "rgba(0,194,184,0.12)"
                              : "rgba(245,193,86,0.12)",
                          border: "1px solid",
                          borderColor:
                            post.status === "Draft"
                              ? "rgba(0,194,184,0.35)"
                              : "rgba(245,193,86,0.35)",
                          color: post.status === "Draft" ? "primary.main" : "secondary.main",
                          fontWeight: 700,
                        }}
                      />
                    </Stack>

                    <Typography
                      variant="h6"
                      sx={{
                        color: "text.primary",
                        fontWeight: 700,
                        fontSize: "1.15rem",
                        lineHeight: 1.35,
                      }}
                    >
                      {post.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", lineHeight: 1.75, opacity: 0.9 }}
                    >
                      {post.summary}
                    </Typography>

                    <Stack direction="row" spacing={0.75} flexWrap="wrap" alignItems="center">
                      {post.tags.map((tag) => (
                        <Box
                          key={tag}
                          sx={{
                            px: 1.1,
                            py: 0.5,
                            borderRadius: 999,
                            bgcolor: "rgba(255,255,255,0.04)",
                            border: "1px solid",
                            borderColor: "divider",
                            color: "text.secondary",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: "0.02em",
                          }}
                        >
                          {tag}
                        </Box>
                      ))}
                      <Box sx={{ flexGrow: 1 }} />
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          textTransform: "none",
                          fontWeight: 700,
                          borderColor: "primary.main",
                          color: "primary.main",
                          "&:hover": { borderColor: "primary.dark", color: "primary.dark" },
                        }}
                        component={RouterLink}
                        to={`/blog/${post.id}`}
                      >
                        {post.mdx ? "Read article" : "Coming soon"}
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              ))}
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "center" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", maxWidth: 540, opacity: 0.88 }}
              >
                MDX pipeline is ready—posts will live here so the music-inspired look and feel stays
                consistent. Want a preview or topic prioritized? Ping me and I’ll ship it next.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component="a"
                href="mailto:your.email@example.com?subject=Blog%20Request"
                sx={{
                  textTransform: "none",
                  fontWeight: 800,
                  boxShadow: "0 6px 14px rgba(0,0,0,0.22)",
                }}
              >
                Request a topic
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPage;
