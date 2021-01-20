import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import SatirLine from "./partials/SatirLine";

const ShareWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 8rem;

  .satir-line {
    position: absolute;
    width: 100%;
    margin: unset;
  }

  .satir-line:first-of-type {
    top: 0;
  }

  .satir-line:last-of-type {
    bottom: 0;
  }
`;

const ShareText = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const PostShareSection: React.FC = () => {
  const [isSupportApiShare, setApiShare] = useState(false);

  useEffect(() => {
    if ("share" in navigator) {
      setApiShare(true);
    }
  });

  return (
    <section css={{ margin: "6rem 0" }}>
      <ShareWrapper tabIndex={0} role="button">
        <SatirLine />
        {isSupportApiShare ? (
          <ShareText>Share this post</ShareText>
        ) : (
          <div>api tidak support</div>
        )}
        <SatirLine />
      </ShareWrapper>
    </section>
  );
};

export default PostShareSection;
