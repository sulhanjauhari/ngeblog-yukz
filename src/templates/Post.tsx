import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Image from "gatsby-image";
import Layout from "../components/Layout";
import { Title } from "../styles/text";
import PostInfo from "../components/partials/PostInfo";
import styled from "@emotion/styled";
import OtherPostSection from "../components/OtherPostSection";
import PostShareSection from "../components/PostShareSection";

const Block = styled.div`
  display: block;
  margin-bottom: 1.5rem;
`;

interface DetailPostContext extends OtherPostSectionProp {
  slug: string;
}

const Post: React.FC<ComponentProps<DetailPostContext>> = ({
  data,
  pageContext,
}) => {
  const { markdownRemark: post } = data;
  const config = data.site.siteMetadata;
  const postData = post.frontmatter;
  const bannerFluid = post.frontmatter.banner.childImageSharp.fluid;
  const { prev, next } = pageContext;

  return (
    <Layout header={{ showBottomDivider: true }}>
      <Helmet>
        <html lang={config.lang} />
        <title>
          {postData.title} • {config.title}
        </title>

        <meta name="description" content={post && post.excerpt} />
        <meta name="keywords" content={postData.tags.join(", ")} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={post && post.excerpt} />
        <meta property="og:url" content={config.siteUrl + post.fields.slug} />
        {post?.frontmatter?.banner?.childImageSharp && (
          <meta
            property="og:image"
            content={`${config.siteUrl}${post.frontmatter.banner.childImageSharp.fluid.src}`}
          />
        )}

        <meta property="article:published_time" content={postData.date} />

        {postData.tags && (
          <meta property="article:tag" content={post.frontmatter.tags[0]} />
        )}

        {config.facebook && (
          <meta property="article:publisher" content={config.facebook} />
        )}
        {config.facebook && (
          <meta property="article:author" content={config.facebook} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={postData.title} />
        <meta name="twitter:description" content={post && post.excerpt} />
        <meta name="twitter:url" content={config.siteUrl + post.fields.slug} />
        {post?.frontmatter?.banner?.childImageSharp && (
          <meta
            name="twitter:image"
            content={`${config.siteUrl}${post.frontmatter.banner.childImageSharp.fluid.src}`}
          />
        )}
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content={postData.author.id} />
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

      <article css={{ marginTop: "4rem" }}>
        <div css={{ marginBottom: "0.5rem" }}>
          <Title className="text-center-on-mobile">{postData.title}</Title>
        </div>
        <Block>
          <PostInfo
            author={postData.author.name}
            createdAt={postData.date}
            tags={postData.tags}
          />
        </Block>
        <Block>
          <Image
            fluid={bannerFluid}
            title={`Image from post ${postData.title}`}
            alt="Banner image"
          />
        </Block>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <PostShareSection title={postData.title} description={post.excerpt} />
      <OtherPostSection {...{ prev, next }} />
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
        siteUrl
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
        date(formatString: "MMMM DD, YYYY")
        tags
        author {
          id
          name
        }
        banner {
          childImageSharp {
            fluid(maxWidth: 960, maxHeight: 480, fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
