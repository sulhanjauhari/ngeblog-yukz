interface HeaderProps {
  showBottomDivider: boolean;
  title?: string;
  subtitle?: string;
}

interface IconProps {
  width?: string;
  height?: string;
}

interface PostInfoProp {
  author: string;
  createdAt: string;
  tags: string[];
}

interface PostCardProp extends PostInfoProp {
  title: string;
  content: string;
  slug: string;
  timeToRead: string;
}

type OtherPost = {
  slug: string;
  title: string;
};
interface OtherPostSectionProp {
  prev: OtherPost | null;
  next: OtherPost | null;
}
