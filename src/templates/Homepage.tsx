import React from "react";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Card from "../components/Card";

import { Avatar, HeaderWrapper } from "../styles";

const Homepage: React.FC<ComponentProps> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const config = data.site.siteMetadata;
  const avatarPhoto = data.profile.childImageSharp.fixed;
  const headerProp = {
    title: "okanjauhary",
    subtitle: "HI, I’m Sulhan Jauhary a front-end developer 👋",
    showBottomDivider: false,
  };

  return (
    <Layout header={headerProp}>
      <Helmet>
        <html lang={config.lang} />
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:url" content={config.baseUrl} />
        {/* <meta
          property="og:image"
          content={`${config.baseUrl}/meta-image-home.jpg`}
        /> */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {config.facebook && (
          <meta property="article:publisher" content={config.facebook} />
        )}
        {/* <meta
          name="google-site-verification"
          content={`${process.env.SITE_VERIFICATION}`}
        /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:url" content={config.baseUrl} />
        {/* <meta
          name="twitter:image"
          content={`${config.baseUrl}/meta-image-home.jpg`}
        /> */}
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split("https://twitter.com/")[1]}`}
          />
        )}
      </Helmet>

      <HeaderWrapper className="header-page-wrapper">
        <Avatar>
          <img src={avatarPhoto.src} alt={avatarPhoto.originalName} />
        </Avatar>
        <h1>{config.title}</h1>
        <p className="text-muted">{config.description}</p>
      </HeaderWrapper>
      <div>
        {posts.map(({ node }) => (
          <Card key={node.id} flat>
            <div>
              <span className="text-uppercase">{node.frontmatter.date} | </span>
              <Link to={`/tag/${node.frontmatter.tags[0]}`}>
                {node.frontmatter.tags[0]}
              </Link>
            </div>
            <Link to={node.fields.slug} className="link link--flat">
              <h3>{node.frontmatter.title}</h3>
            </Link>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default Homepage;

export const postQuery = graphql`
  query getPostQuery {
    profile: file(relativePath: { eq: "images/avatar.png" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          src
          originalName
        }
      }
    }
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
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD")
            tags
            title
          }
          timeToRead
          excerpt
          id
        }
      }
    }
  }
`;
