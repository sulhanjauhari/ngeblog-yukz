import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { getTheme } from "../utils/theme";
import { Title, TextAlit } from "../styles/text";
import { ButtonText } from "../styles";
import { Link } from "gatsby";

interface PostCardProp {
  title: string;
  author: string;
  createAt: string;
  tags: string[];
  content: string;
  slug: string;
  timeToRead: string;
}

const PostCardWrapper = styled.div`
  margin-bottom: 2.5rem;
`;

const PostCard = styled.div`
  padding: 1.2rem;
  box-sizing: border-box;
  border-width: 2px;
  border-style: solid;
`;

const CardContentSection = styled.div`
  margin-bottom: 0.8rem;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Card: React.FC<PostCardProp> = props => {
  const { createAt, tags, title, content, slug, timeToRead, author } = props;
  const [borderColor, setBorderColor] = useState("#000");

  useEffect(() => {
    setBorderColor(getTheme("--text-color"));
  });

  return (
    <PostCardWrapper>
      <PostCard
        css={css`
          border-color: ${borderColor};
        `}>
        <CardContentSection>
          <Link to={slug}>
            <Title reduce="0.5rem">{title}</Title>
          </Link>
        </CardContentSection>
        <CardContentSection>
          <TextAlit>
            Written by <b>{author}</b> on <b>{createAt}</b> in{" "}
            {tags.map((tag, i) => (
              <b key={`tag-${i}`}>{tag}</b>
            ))}
          </TextAlit>
        </CardContentSection>
        <CardContentSection>
          <p>{content}</p>
        </CardContentSection>
        <CardFooter>
          <TextAlit className="text-muted">{timeToRead}</TextAlit>
          <Link to={slug}>
            <ButtonText>Read more...</ButtonText>
          </Link>
        </CardFooter>
      </PostCard>
    </PostCardWrapper>
  );
};

export default Card;
