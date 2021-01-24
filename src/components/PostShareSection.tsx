import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import SatirLine from "./partials/SatirLine";
import { center } from "../styles/display";

// icons
import Twitter from "./icons/Twitter";
import Facebook from "./icons/Facebook";

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

const ShareLists = styled.ul`
  list-style: none;
  padding: unset;
  margin-top: 10px;

  li {
    margin: 0 8px;

    a {
      display: inline-block;
      width: 24px;
      height: 24px;
    }
  }
`;

interface PostShareProp {
  title: string;
  description: string;
}

const createTweet = (description: string, URL: string): string => {
  const shortDesc = description.split(" ").splice(0, 15).join(" ") + " ...";
  const tweet = encodeURIComponent(shortDesc + "\nby @okanjauhary\ndetail on ");
  return `https://twitter.com/intent/tweet?text=${tweet}`;
};

const PostShareSection: React.FC<PostShareProp> = ({ description, title }) => {
  const [isSupportApiShare, setApiShare] = useState(false);
  const URL = encodeURIComponent(
    typeof window !== "undefined" ? window.location.href : "",
  );
  const tit = encodeURIComponent(title);
  const desc = encodeURIComponent(description);

  const linkTwitter = createTweet(description, URL);
  console.log("APA ini", linkTwitter, URL);
  const linkFacebook = `https://www.facebook.com/sharer/sharer.php?u=${URL}&title=${tit}&description=${desc}`;

  useEffect(() => {
    if ("share" in navigator) {
      setApiShare(true);
    }
  });

  return (
    <section css={{ margin: "6rem 0" }}>
      <ShareWrapper>
        <SatirLine />
        <div
          css={[
            center,
            css`
              width: 100%;
              height: 100%;
            `,
          ]}>
          <div css={{ textAlign: "center" }}>
            <p>Share this post</p>
            <ShareLists css={center}>
              <li>
                <a
                  href={linkTwitter + "&url=" + URL}
                  target="_blank"
                  rel="noreferrer noopener">
                  <Twitter />
                </a>
              </li>
              <li>
                <a
                  href={linkFacebook}
                  target="_blank"
                  rel="noreferrer noopener">
                  <Facebook />
                </a>
              </li>
            </ShareLists>
          </div>
        </div>
        <SatirLine />
      </ShareWrapper>
    </section>
  );
};

export default PostShareSection;
