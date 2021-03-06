import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import ArrowLeft from "./icons/ArrowLeft";
import ArrowRight from "./icons/ArrowRight";

const OtherPostWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: unset;

  @media screen and (max-width: 600px) {
    justify-content: flex-start;
    flex-direction: column;

    li:first-of-type {
      margin-bottom: 10px;
    }
  }

  li {
    svg {
      width: 24px;
    }

    a {
      display: flex;
      align-items: center;
    }
  }
`;

const OtherPostSection: React.FC<OtherPostSectionProp> = props => {
  const { prev, next } = props;
  return (
    <section css={{ marginBottom: "6rem" }}>
      <OtherPostWrapper>
        <li>
          {prev && (
            <Link to={prev.slug}>
              <ArrowLeft />
              &nbsp; {prev.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.slug}>
              {next.title} &nbsp;
              <ArrowRight />
            </Link>
          )}
        </li>
      </OtherPostWrapper>
    </section>
  );
};

export default OtherPostSection;
