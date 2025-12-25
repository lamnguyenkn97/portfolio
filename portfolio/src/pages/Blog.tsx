import React from "react";
import { Box, Stack, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Button, Card, Badge, SectionHeader, DSTypography } from "../components/design-system";
import { BlogLayout } from "../components/common/BlogLayout";
import { blogPosts } from "../content/blog/posts";
import { config } from "../config/constants";

export const BlogPage = () => {
  const theme = useTheme();
  return (
    <BlogLayout>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button variant="outlined" size="small" component={RouterLink} to="/">
          Back to portfolio
        </Button>
        <Badge variant="gold" size="small" label="Published" />
      </Stack>

      <SectionHeader title="Frontend Journals" iconSize={18} />

      <Stack spacing={2}>
        {blogPosts.map((post) => (
          <Card key={post.title} variant="default" sx={{ p: 2.5 }}>
            <Stack spacing={1.25}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <DSTypography variant="dateRange">{post.readTime}</DSTypography>
                <Badge
                  variant={post.status === "Draft" ? "teal" : post.status === "Published" ? "gold" : "spotify"}
                  size="small"
                  label={post.status}
                />
              </Stack>

              <DSTypography variant="projectTitle">{post.title}</DSTypography>

              <DSTypography variant="description">{post.summary}</DSTypography>

              <Stack direction="row" spacing={0.75} flexWrap="wrap" alignItems="center">
                {post.tags.map((tag) => (
                  <Box
                    key={tag}
                    sx={{
                      px: 1.1,
                      py: 0.5,
                      borderRadius: 999,
                      bgcolor: "rgba(255,255,255,0.04)",
                      ...theme.custom.borders.divider,
                      color: "text.secondary",
                      fontSize: theme.custom.typography.fontSizes.xs,
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
                  component={RouterLink}
                  to={`/blog/${post.id}`}
                >
                  {post.mdx ? "Read article" : "Coming soon"}
                </Button>
              </Stack>
            </Stack>
          </Card>
        ))}
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1.5}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        sx={{ mt: 3 }}
      >
        <DSTypography variant="description" sx={{ maxWidth: 540 }}>
          Technical articles and insights on frontend development, performance optimization, and
          modern web technologies. More posts coming soon!
        </DSTypography>
        <Button
          variant="primary"
          size="small"
          component="a"
          href={`mailto:${config.email}?subject=Blog%20Request`}
        >
          Request a topic
        </Button>
      </Stack>
    </BlogLayout>
  );
};

export default BlogPage;
