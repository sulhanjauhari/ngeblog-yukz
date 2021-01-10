import React from "react";
import { css } from "@emotion/core";
import Header from "../components/Header";
import SatirLine from "../components/partials/SatirLine";
import { TextAlit } from "../styles/text";

import "../styles/scss/main.scss";

const Layout: React.FC<{ header: HeaderProps }> = ({ children, header }) => {
  return (
    <div
      className="app-container"
      css={css`
        margin: auto;
        padding: 0 1rem;
        max-width: 48rem;
      `}>
      <Header {...header} />
      <main>{children}</main>
      <footer
        css={css`
          padding: 10px 0;
        `}>
        <p className="text-center">
          <TextAlit>
            copyright © {new Date().getFullYear()} crafted by Sulhan Jauhary
          </TextAlit>
        </p>
        <SatirLine></SatirLine>
      </footer>
    </div>
  );
};

export default Layout;
