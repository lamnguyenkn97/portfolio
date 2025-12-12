import React, { useEffect, useMemo, useState } from "react";
import { Box, Button, Chip, Container, Grid, Stack, Typography, Divider } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Profile } from "../components/profile";
import { blogPosts } from "../content/blog/posts";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

export const BlogDetailPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);
  const [Compiled, setCompiled] = useState<React.ComponentType | null>(null);
  const [mdxError, setMdxError] = useState<string | null>(null);

  type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & { children?: React.ReactNode };
  type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> & { children?: React.ReactNode };
  type ListProps = React.HTMLAttributes<HTMLUListElement> & { children?: React.ReactNode };
  type ListItemProps = React.LiHTMLAttributes<HTMLLIElement> & { children?: React.ReactNode };
  type BlockquoteProps = React.BlockquoteHTMLAttributes<HTMLQuoteElement> & { children?: React.ReactNode };
  type InlineCodeProps = React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode };
  type PreProps = React.HTMLAttributes<HTMLPreElement> & { children?: React.ReactNode };

  const mdxComponents = useMemo(
    () => ({
      h1: (props: HeadingProps) => (
        <Typography component="h1" variant="h4" sx={{ fontWeight: 800, mb: 2 }} {...props} />
      ),
      h2: (props: HeadingProps) => (
        <Typography
          component="h2"
          variant="h5"
          sx={{ fontWeight: 700, mt: 3, mb: 1.5 }}
          {...props}
        />
      ),
      h3: (props: HeadingProps) => (
        <Typography
          component="h3"
          variant="h6"
          sx={{ fontWeight: 700, mt: 2.5, mb: 1 }}
          {...props}
        />
      ),
      p: (props: ParagraphProps) => (
        <Typography
          variant="body1"
          sx={{ lineHeight: 1.7, mb: 1.5, color: "text.primary" }}
          {...props}
        />
      ),
      ul: (props: ListProps) => (
        <Box
          component="ul"
          sx={{ pl: 3, mb: 2, color: "text.primary", lineHeight: 1.7 }}
          {...props}
        />
      ),
      li: (props: ListItemProps) => <Box component="li" sx={{ mb: 0.8 }} {...props} />,
      blockquote: (props: BlockquoteProps) => (
        <Box
          component="blockquote"
          sx={{
            borderLeft: "3px solid",
            borderColor: "secondary.main",
            pl: 2,
            ml: 0,
            my: 2,
            color: "text.secondary",
            fontStyle: "italic",
          }}
          {...props}
        />
      ),
      code: (props: InlineCodeProps) => (
        <Box
          component="code"
          sx={{
            px: 0.6,
            py: 0.25,
            borderRadius: 1,
            bgcolor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.14)",
            color: "#e8ecf1",
            fontSize: "0.9em",
            fontWeight: 600,
          }}
          {...props}
        />
      ),
      pre: (props: PreProps) => (
        <Box
          component="pre"
          sx={{
            p: 2.25,
            borderRadius: 1.5,
            bgcolor: "#0f1117",
            border: "1px solid rgba(255,255,255,0.08)",
            overflowX: "auto",
            fontSize: "0.95em",
            lineHeight: 1.65,
            mb: 2,
            color: "#e8ecf1",
            boxShadow: "0 10px 24px rgba(0,0,0,0.45)",
          }}
          {...props}
        />
      ),
      Divider,
    }),
    []
  );

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      if (!post?.mdx) {
        setCompiled(null);
        setMdxError(null);
        return;
      }
      try {
        const result = await evaluate(post.mdx, {
          ...runtime,
          useMDXComponents: () => mdxComponents,
        });
        if (!cancelled) {
          setCompiled(() => result.default as React.ComponentType);
          setMdxError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setCompiled(null);
          setMdxError(err instanceof Error ? err.message : String(err));
        }
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [post?.mdx, mdxComponents, post]);

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
      <Grid container spacing={{ xs: 5, md: 6 }} columnSpacing={{ md: 4, lg: 6 }} alignItems="flex-start">
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

        <Grid item xs={12} md={7} lg={7}>
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Button
                variant="outlined"
                size="small"
                component={RouterLink}
                to="/blog"
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  borderColor: "primary.main",
                  color: "primary.main",
                  "&:hover": { borderColor: "primary.dark", color: "primary.dark" },
                }}
              >
                Back to blog
              </Button>
              <Button
                variant="outlined"
                size="small"
                component={RouterLink}
                to="/"
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  borderColor: "secondary.main",
                  color: "secondary.main",
                  "&:hover": { borderColor: "secondary.dark", color: "secondary.dark" },
                }}
              >
                Portfolio
              </Button>
            </Stack>

            {!post ? (
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: "background.paper",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                  Post not found
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  The requested article doesn’t exist yet. Please choose another entry.
                </Typography>
              </Box>
            ) : (
              <Box
                sx={{
                  p: { xs: 2.5, md: 3 },
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: "background.paper",
                  boxShadow: (theme) =>
                    `0 10px 28px ${theme.palette.mode === "dark" ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.12)"}`,
                }}
              >
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="overline" sx={{ letterSpacing: "0.12em", fontWeight: 800 }}>
                      {post.readTime}
                    </Typography>
                    <Chip
                      label={post.status}
                      size="small"
                      sx={{
                        height: 22,
                        borderRadius: 999,
                        bgcolor:
                          post.status === "Draft" ? "rgba(0,194,184,0.12)" : "rgba(245,193,86,0.12)",
                        border: "1px solid",
                        borderColor:
                          post.status === "Draft" ? "rgba(0,194,184,0.35)" : "rgba(245,193,86,0.35)",
                        color: post.status === "Draft" ? "primary.main" : "secondary.main",
                        fontWeight: 700,
                      }}
                    />
                  </Stack>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: "text.primary" }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                    {post.summary}
                  </Typography>
                </Stack>

                <Divider sx={{ my: 2.5 }} />

                {post.mdx ? (
                  mdxError ? (
                    <Typography variant="body2" color="error">
                      {mdxError}
                    </Typography>
                  ) : Compiled ? (
                    <Compiled />
                  ) : (
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Loading MDX…
                    </Typography>
                  )
                ) : (
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This article is coming soon. Check back shortly.
                  </Typography>
                )}
              </Box>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogDetailPage;

