import { Link } from "gatsby";
import React from "react";
// import { css } from "@emotion/core";
import styled from "@emotion/styled";

const PageInfo = styled.div`
  text-align: center;
  padding: 30px 0;
  margin-bottom: 20px;
`;

const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.ul`
  list-style: none;
  padding: unset;
  display: flex;
`;

const MenuItem = styled.li`
  margin: 0 8px;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  a,
  a:hover {
    text-decoration: none;
  }
`;

const menuLists = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "About",
    to: "/about",
  },
  {
    text: "RSS",
    to: "/rss",
  },
];

const socials = [
  {
    icon: "fb",
    link: "https://facebook.com/okanjauhary",
  },
  {
    icon: "twitter",
    link: "https://twitter.com/okanjauhary",
  },
  {
    icon: "github",
    link: "https://github.com/okanjauhary",
  },
];

const Header: React.FC<HeaderProps> = props => (
  <div className="app-header">
    <PageInfo>
      <h2 className="page-title">{props.title}</h2>
      {props.subtitle ? (
        <p className="page-subtitle">{props.subtitle}</p>
      ) : null}
    </PageInfo>
    <MenuWrapper>
      <Menu>
        {menuLists.map((item, i) => (
          <MenuItem key={`menu-left-${i}`}>
            <Link to={item.to}>{item.text}</Link>
          </MenuItem>
        ))}
      </Menu>
      <Menu>
        {socials.map((item, i) => (
          <MenuItem key={`menu-right-${i}`}>
            <a href={item.link} rel="nofollow">
              {item.icon}
            </a>
          </MenuItem>
        ))}
      </Menu>
    </MenuWrapper>
  </div>
);

export default Header;
