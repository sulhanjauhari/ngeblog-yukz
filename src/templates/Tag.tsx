import React from "react";
import { graphql } from "gatsby";

const Tags: React.FC = () => {
  return <div>tags</div>;
};

export default Tags;

export const postQuery = graphql`
  query PostByTag($tag: String) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      limit: 10
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            tags
          }
        }
      }
    }
  }
`;
