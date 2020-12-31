import React from "react";
import { css } from "@emotion/core";
import Header from "../components/Header";
import { getTheme } from "../utils/theme";

import "../styles/scss/main.scss";

const Layout: React.FC<{ header: HeaderProps }> = ({ children, header }) => {
  return (
    <div
      className="app-container"
      css={css`
        margin: auto;
        padding: 0 1rem;
        max-width: ${getTheme("--max-width-container")};
      `}>
      <Header {...header} />
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with ❤️
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
