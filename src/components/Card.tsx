import React from "react";
import styled from "@emotion/styled";
import className from "classnames";
import "./styles/card.scss";

export interface CardProp {
  flat?: boolean;
}

const CardWrapper = styled.div`
  display: block;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Card: React.FC<CardProp> = props => {
  const cardClassName = className({
    card: true,
    "card--flat": !!props.flat,
  });
  return <CardWrapper className={cardClassName}>{props.children}</CardWrapper>;
};

export default Card;
