import React, { useEffect, useMemo, useState } from "react";
import { Box, Stack, Divider, useTheme } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Button, Card, Badge, DSTypography } from "../components/design-system";
import { BlogLayout } from "../components/common/BlogLayout";
import { blogPosts } from "../content/blog/posts";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

export const BlogDetailPage = () => {
  const theme = useTheme();
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);
  const [Compiled, setCompiled] = useState<React.ComponentType | null>(null);
  const [mdxError, setMdxError] = useState<string | null>(null);

  type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & { children?: React.ReactNode };
  type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> & { children?: React.ReactNode };
  type ListProps = React.HTMLAttributes<HTMLUListElement> & { children?: React.ReactNode };
  type ListItemProps = React.LiHTMLAttributes<HTMLLIElement> & { children?: React.ReactNode };
  type BlockquoteProps = React.BlockquoteHTMLAttributes<HTMLQuoteElement> & {
    children?: React.ReactNode;
  };
  type InlineCodeProps = React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode };
  type PreProps = React.HTMLAttributes<HTMLPreElement> & { children?: React.ReactNode };

  const mdxComponents = useMemo(
    () => ({
      h1: (props: HeadingProps) => (
        <DSTypography component="h1" variant="h4" sx={{ fontWeight: 800, mb: 2 }} {...props} />
      ),
      h2: (props: HeadingProps) => (
        <DSTypography
          component="h2"
          variant="h5"
          sx={{ fontWeight: 700, mt: 3, mb: 1.5 }}
          {...props}
        />
      ),
      h3: (props: HeadingProps) => (
        <DSTypography
          component="h3"
          variant="h6"
          sx={{ fontWeight: 700, mt: 2.5, mb: 1 }}
          {...props}
        />
      ),
      p: (props: ParagraphProps) => (
        <DSTypography
          variant="body"
          sx={{ lineHeight: 1.7, mb: 1.5 }}
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
            fontSize: theme.custom.typography.fontSizes["base-sm"],
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
            fontSize: theme.custom.typography.fontSizes.sm,
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
    <BlogLayout>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button variant="outlined" size="small" component={RouterLink} to="/blog">
          Back to blog
        </Button>
        <Button variant="outlined" size="small" component={RouterLink} to="/">
          Portfolio
        </Button>
      </Stack>

      {!post ? (
        <Card variant="default" sx={{ p: { xs: 2.5, md: 3 } }}>
          <DSTypography variant="projectTitle" sx={{ mb: 1 }}>
            Post not found
          </DSTypography>
          <DSTypography variant="description">
            The requested article doesn&apos;t exist yet. Please choose another entry.
          </DSTypography>
        </Card>
      ) : (
        <Card variant="elevated" sx={{ p: { xs: 2.5, md: 3 } }}>
          <Stack spacing={1}>
            <Stack direction="row" spacing={1} alignItems="center">
              <DSTypography variant="dateRange">{post.readTime}</DSTypography>
              <Badge
                variant={post.status === "Draft" ? "teal" : post.status === "Published" ? "gold" : "spotify"}
                size="small"
                label={post.status}
              />
            </Stack>
            <DSTypography variant="hero">{post.title}</DSTypography>
            <DSTypography variant="description">{post.summary}</DSTypography>
          </Stack>

          <Divider sx={{ my: 2.5 }} />

          {post.mdx ? (
            mdxError ? (
              <DSTypography variant="body" sx={{ color: "error.main" }}>
                {mdxError}
              </DSTypography>
            ) : Compiled ? (
              <Compiled />
            ) : (
              <DSTypography variant="description">Loading MDX…</DSTypography>
            )
          ) : (
            <DSTypography variant="description">
              This article is coming soon. Check back shortly.
            </DSTypography>
          )}
        </Card>
      )}
    </BlogLayout>
  );
};

export default BlogDetailPage;
