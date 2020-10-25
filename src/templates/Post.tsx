import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

const Post: React.FC<ComponentProps> = ({ data }) => {
  const { markdownRemark: post } = data;
  const config = data.site.siteMetadata;

  return (
    <Layout>
      <Helmet>
        <html lang={config.lang} />
        <title>
          {post && post.frontmatter.title} • {config.title}
        </title>

        <meta name="description" content={post && post.excerpt} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post && post.frontmatter.title} />
        <meta property="og:description" content={post && post.excerpt} />
        <meta property="og:url" content={config.baseUrl + post.fields.slug} />
        {post?.frontmatter?.banner?.childImageSharp && (
          <meta
            property="og:image"
            content={`${config.baseUrl}${post.frontmatter.banner.childImageSharp.fluid.src}`}
          />
        )}

        <meta
          property="article:published_time"
          content={post && post.frontmatter.date}
        />

        {post && post.frontmatter.tags && (
          <meta property="article:tag" content={post.frontmatter.tags[0]} />
        )}

        {config.facebook && (
          <meta property="article:publisher" content={config.facebook} />
        )}
        {config.facebook && (
          <meta property="article:author" content={config.facebook} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post && post.frontmatter.title} />
        <meta name="twitter:description" content={post && post.excerpt} />
        <meta name="twitter:url" content={config.baseUrl + post.fields.slug} />
        {post?.frontmatter?.banner?.childImageSharp && (
          <meta
            name="twitter:image"
            content={`${config.baseUrl}${post.frontmatter.banner.childImageSharp.fluid.src}`}
          />
        )}
        <meta name="twitter:label1" content="Written by" />
        <meta
          name="twitter:data1"
          content={post && post.frontmatter.author.id}
        />
        <meta name="twitter:label2" content="Filed under" />
        {post?.frontmatter.tags && (
          <meta name="twitter:data2" content={post.frontmatter.tags[0]} />
        )}
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split("https://twitter.com/")[1]}`}
          />
        )}
        {config.twitter && (
          <meta
            name="twitter:creator"
            content={`@${config.twitter.split("https://twitter.com/")[1]}`}
          />
        )}
      </Helmet>

      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export default Post;

export const postQuery = graphql`
  query($slug: String) {
    site {
      siteMetadata {
        title
        description
        author
        baseUrl
        twitter
        linkedin
        lang
        github
        facebook
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMM YYYY HH:mm:ss")
        author {
          id
        }
      }
    }
  }
`;
