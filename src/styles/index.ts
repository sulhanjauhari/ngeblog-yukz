import styled from "@emotion/styled";

export const Avatar = styled.div`
  display: inline-block;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 300px;
  padding: 20px;
  margin-bottom: 40px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
  }

  h1 {
    margin: 20px 0;
  }
`;
