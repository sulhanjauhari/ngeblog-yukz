import { Link } from "gatsby";
import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Facebook from "../components/icons/Facebook";
import Github from "../components/icons/Github";
import Linkedin from "../components/icons/Linkedin";
import Twitter from "../components/icons/Twitter";
import SatirLine from "../components/partials/SatirLine";

const PageInfo = styled.header`
  text-align: center;
  padding: 1.5rem 0;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    padding: 0.9rem 0;
  }
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

const socialIcon = css`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: inline-block;
    width: 24px;
    height: 24px;
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
];

export const socials = [
  {
    icon: Facebook,
    link: "https://facebook.com/okanjauhary",
  },
  {
    icon: Twitter,
    link: "https://twitter.com/okanjauhary",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/sulhanjauhari",
  },
  {
    icon: Github,
    link: "https://github.com/okanjauhary",
  },
];

const Header: React.FC<HeaderProps> = props => (
  <div
    className="app-header"
    css={css`
      margin-bottom: ${props.showBottomDivider ? "1.5rem" : "10px"};
    `}>
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
        <MenuItem>
          <a href="/rss.xml">RSS</a>
        </MenuItem>
      </Menu>
      <Menu>
        {socials.map((item, i) => (
          <MenuItem key={`menu-right-${i}`} css={socialIcon}>
            <a href={item.link} rel="noopener noreferrer" target="_blank">
              <item.icon />
            </a>
          </MenuItem>
        ))}
      </Menu>
    </MenuWrapper>
    {props.showBottomDivider && <SatirLine />}
  </div>
);

export default Header;
