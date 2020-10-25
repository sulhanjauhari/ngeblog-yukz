import { Link } from "gatsby";
import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const headerWrapper = css`
  height: 100px;
  margin: auto;
  max-width: 1400px;
  padding: 0 1.0875rem 0 1.45rem;
  display: flex;
  justify-content: flex-end;
`;

const List = styled.ul`
  list-style: none;
  height: 100%;
  display: flex;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-left: 20px;

  a {
    font-weight: 400;
    font-size: 22px;

    &:hover {
      text-decoration: none;
    }
  }
`;

const Header = () => (
  <header>
    <nav css={headerWrapper}>
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/about">About</Link>
        </ListItem>
      </List>
    </nav>
  </header>
);

export default Header;
