import React from "react";
import { Helmet } from "react-helmet";
import "../styles/scss/ied-2021/style.scss";
import styled from "@emotion/styled";
import { socials } from "../components/Header";

const TextShine = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-weight: 500;
  font-size: 50px;
  padding: 20px;
  line-height: 50px;
  text-align: center;
  background: linear-gradient(to right, #4d4d4d 0, #eed1c3 10%, #4d4d4d 20%);
  background-position: -50px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 4s infinite linear;
  -webkit-text-size-adjust: none;

  @keyframes shine {
    0% {
      background-position: -50px;
    }

    100% {
      background-position: 600px;
    }
  }
`;

const SocialWrapper = styled.ul`
  list-style: none;
  padding: unset;
  display: flex;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 8px;

    a {
      display: inline-block;
      width: 20px;
      height: 20px;
      color: #ddd;
    }
  }
`;

const title = "Happy Ied Mubarak 1442 H";
const description = "Selamat hari raya idul fitri, mohon maaf lahir dan batin";
const site = "https://okanjauhary.space/ied-2021";
const keywords = ["ied", "ied 2021", "ied 1442 H", "ied mubarak"];

const Ied2021 = () => (
  <>
    <Helmet>
      <html lang="id" ied-2021 />
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta property="og:site_name" content="okanjauhary.space" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={site} />
      <meta property="article:published_time" content="2021-06-14" />
      <meta property="article:tag" content={keywords[0]} />
      <meta
        property="article:publisher"
        content="https://facebook.com/okanjauhary"
      />
      <meta property="article:author" content="Okan" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={site} />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content="okanjauhary" />
      <meta name="twitter:label2" content="Filed under" />
      <meta name="twitter:data2" content={keywords[0]} />
      <meta name="twitter:site" content="@okanjauhary" />
      <meta name="twitter:creator" content="@okanjauhary" />
      <body className="ied-2021" />
    </Helmet>

    <div className="ied-2021">
      <div className="dot-ied-2021 dot-ied-2021-1"></div>
      <div className="dot-ied-2021 dot-ied-2021-2"></div>
      <div className="dot-ied-2021 dot-ied-2021-3"></div>
      <TextShine>Happy Ied Mubarak 1442 H</TextShine>

      <SocialWrapper>
        {socials.map((item, i) => (
          <li key={`social-${i}`}>
            <a href={item.link} rel="noopener noreferrer" target="_blank">
              <item.icon />
            </a>
          </li>
        ))}
      </SocialWrapper>
    </div>
  </>
);

export default Ied2021;
