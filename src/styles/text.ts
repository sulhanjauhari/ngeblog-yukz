import styled from "@emotion/styled";

type TitleProp = {
  reduce?: string;
};

export const Title = styled.h1<TitleProp>`
  font-size: ${(prop: TitleProp) => `calc(3rem - ${prop.reduce || "0px"})`};
  font-weight: 300;
  font-family: "Kalam", sans-serif;
  line-height: ${(prop: TitleProp) => `calc(3.5rem - ${prop.reduce || "0px"})`};

  @media screen and (max-width: 480px) {
    font-size: ${(prop: TitleProp) => `calc(2rem - ${prop.reduce || "0px"})`};
    line-height: ${(prop: TitleProp) =>
      `calc(2.5rem - ${prop.reduce || "0px"})`};
  }
`;

export const TextAlit = styled.span`
  font-size: 0.7rem;
`;
