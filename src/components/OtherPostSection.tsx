import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const OtherPostWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: unset;
`;

const OtherPostSection: React.FC<OtherPostSectionProp> = props => {
  const { prev, next } = props;
  return (
    <section css={{ marginBottom: "6rem" }}>
      <OtherPostWrapper>
        <li>{prev && <Link to={prev.slug}>{prev.title}</Link>}</li>
        <li>{next && <Link to={next.slug}>{next.title}</Link>}</li>
      </OtherPostWrapper>
    </section>
  );
};

export default OtherPostSection;
