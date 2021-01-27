type Fields = {
  slug: string;
};

interface SocialMedia {
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
}

interface Author extends SocialMedia {
  id: string;
  name: string;
  address: string;
}

interface Frontmatter {
  title: string;
  date: string;
  banner: {
    childImageSharp: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      fluid: any;
    };
  };
  author: Author;
  tags: string[];
  publish: boolean;
}

interface MarkdownRemark {
  frontmatter: Frontmatter;
  html: string;
  excerpt: string;
  timeToRead: number;
  fields: Fields;
}

interface SiteMetadata extends SocialMedia {
  title: string;
  description: string;
  author: string;
  lang: string;
  baseUrl: string;
}

interface HomepageContext {
  totalPage: number;
  limit: number;
  offset: number;
  page: number;
}

interface ComponentProps<C> {
  data: {
    site: {
      siteMetadata: SiteMetadata;
    };
    markdownRemark: MarkdownRemark;
    allMarkdownRemark: {
      edges: Array<{
        node: {
          id: string;
          fields: {
            slug: string;
          };
          frontmatter: Frontmatter;
          excerpt: string;
          timeToRead: number;
        };
      }>;
    };
    profile: {
      childImageSharp: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        fixed: any;
      };
    };
  };
  pageContext: C;
}
