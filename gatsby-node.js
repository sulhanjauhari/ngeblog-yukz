const path = require("path");
const _ = require("lodash");
const { createFilePath } = require("gatsby-source-filesystem");
require("dotenv").config();

const POST_PER_PAGE = Number(process.env.POST_PER_PAGE || 5);
const POST_PREFIX_URI = process.env.POST_PREFIX_URI || "";

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const relativePath = createFilePath({ node, getNode });
    const slug = relativePath.replace(/\/?contents/, "");
    createNodeField({
      name: `slug`,
      node,
      value: POST_PREFIX_URI + slug,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const Homepage = path.resolve("src/templates/Homepage.tsx");
  const Post = path.resolve("src/templates/Post.tsx");
  const Tag = path.resolve("src/templates/Tag.tsx");

  const resultQuery = await graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
    }
  `);

  if (resultQuery.errors) {
    throw new Error(resultQuery.errors);
  }

  const posts = resultQuery.data.allMarkdownRemark.edges;
  const totalPage = Math.ceil(posts.length / POST_PER_PAGE);

  // pagination page
  new Array(totalPage).fill().forEach((_, i) => {
    createPage({
      path: i === 0 ? "/" : `/${i + 1}`,
      component: Homepage,
      context: {
        totalPage,
        limit: POST_PER_PAGE,
        offset: i * POST_PER_PAGE,
        page: i + 1,
      },
    });
  });

  // post detail page
  posts.forEach(({ node }, index) => {
    const prev = index === 0 ? null : getDetailSlug(posts[index - 1].node);
    const next =
      index + 1 === posts.length ? null : getDetailSlug(posts[index + 1].node);

    createPage({
      path: node.fields.slug,
      component: Post,
      context: {
        slug: node.fields.slug,
        prev,
        next,
      },
    });
  });

  const tags = _.uniq(
    _.flatten(posts.map(({ node }) => _.get(node, "frontmatter.tags", []))),
  );
  // create tag page
  tags.forEach(tag => {
    createPage({
      path: `/tag/${tag}`,
      component: Tag,
      context: {
        tag,
      },
    });
  });
};

function getDetailSlug(node) {
  return {
    slug: node.fields.slug,
    title: node.frontmatter.title,
  };
}
