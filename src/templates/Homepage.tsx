import React from "react";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import Button from "../components/partials/Button";
import styled from "@emotion/styled";

const Pagination = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .my-button:first-of-type {
    margin-left: 0;
  }

  .my-button:last-of-type {
    margin-right: 0;
  }
`;

const Homepage: React.FC<ComponentProps<HomepageContext>> = ({
  data,
  pageContext,
}) => {
  const posts = data.allMarkdownRemark.edges;
  const config = data.site.siteMetadata;
  // const avatarPhoto = data.profile.childImageSharp.fixed;
  const headerProp = {
    title: "okanjauhary",
    subtitle: "HI, I’m Sulhan Jauhary a front-end developer 👋",
    showBottomDivider: false,
  };
  const { page, totalPage } = pageContext;
  const isFirstPage = page === 1;
  const isLastPage = page === totalPage;
  const prevPageSlug = page - 1 === 1 ? "/" : (page - 1).toString();
  const nextPageSlug = (page + 1).toString();

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

      <div>
        {posts.map(({ node }) => (
          <PostCard
            key={node.id}
            title={node.frontmatter.title}
            author={node.frontmatter.author.name}
            content={node.excerpt}
            tags={node.frontmatter.tags}
            timeToRead={`${node.timeToRead} min read`}
            slug={node.fields.slug}
            createdAt={node.frontmatter.date}
          />
        ))}
      </div>

      {totalPage > 1 && (
        <Pagination>
          <Link to={prevPageSlug}>
            <Button disabled={isFirstPage} medium>
              Prev
            </Button>
          </Link>
          <Link to={nextPageSlug}>
            <Button disabled={isLastPage} medium>
              Next
            </Button>
          </Link>
        </Pagination>
      )}
    </Layout>
  );
};

export default Homepage;

export const postQuery = graphql`
  query getPostQuery($limit: Int!, $offset: Int!) {
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
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD")
            tags
            title
            author {
              name
            }
          }
          timeToRead
          excerpt
          id
        }
      }
    }
  }
`;
