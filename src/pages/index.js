import React from "react"

import Layout from "../components/layout"
import styled from "styled-components"
import HTMLLogo from "../images/HTML5.png"
import CSSLogo from "../images/CSS3.png"
import GatsbyLogo from "../images/gatsby-icon1.png"
import GitLogo from "../images/Git-Icon1.png"
import GraphQLLogo from "../images/GraphQL_Logo.svg.png"
import MongoDBLogo from "../images/mongodb.png"
import MySQLLogo from "../images/mysql2.png"
import NextLogo from "../images/nextjs_icon.png"
import ReactLogo from "../images/React.js_logo-512.png"
import NodeLogo from "../images/nodejs-new-pantone-black.png"
import JSLogo from "../images/JS.png"
import jQueryLogo from "../images/jquery-icon.svg"
import { Title } from "../components/style.js"


const Home = styled.div`
`;



const IntroWrapper = styled.p`
  font-size: 30px;
  line-height: 1.3;
  padding: 50px;
  background: ${props => props.theme.accentColor};
  margin: 60px 0;

  @media (max-width: 500px) {
    padding: 20px;
  }
`;

const FrontPage = styled.div`
  /* height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  position: relative; */
`;

const TechWrapper = styled.div`
  padding: 50px 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: ${props => props.theme.accentColor};

  .outer {
    padding: 10px 0;
  }

  .inner {
    text-align: center;
  }

  img {
    width: 50px;
    display: block;
    margin: 0 auto;
    padding: 10px 0;
  }
  #nodeLogo {
    padding: 20px 0;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const IndexPage = () => (
  <Layout>
    <Home>
      <FrontPage>
        <IntroWrapper>Hey, I’m Kyle Sisson, a full-stack web developer based in Los Angeles. I build fast, dynamic websites to help businesses and individuals get their message across.</IntroWrapper>
      </FrontPage>
      <Title>Tech & Skills</Title>
      <TechWrapper>
        <div className="outer"><img src={HTMLLogo} alt="" />
          <div className="inner">HTML</div></div>
        <div className="outer"><img src={CSSLogo} alt="" />
          <div className="inner">CSS</div></div>
        <div className="outer"><img src={JSLogo} alt="" />
          <div className="inner">JavaScript</div></div>
        <div className="outer"><img src={ReactLogo} alt="" />
          <div className="inner">React.js</div></div>
        <div className="outer"><img src={NodeLogo} id="nodeLogo" alt="" />
          <div className="inner"  >Node.js</div></div>
        <div className="outer"><img src={GraphQLLogo} alt="" />
          <div className="inner">GraphQL</div></div>
        <div className="outer"><img src={NextLogo} alt="" />
          <div className="inner">Next.js</div></div>
        <div className="outer"><img src={GatsbyLogo} alt="" />
          <div className="inner">Gatsby.js</div></div>
        <div className="outer"><img src={GitLogo} alt="" />
          <div className="inner">Git</div></div>
        <div className="outer"><img src={MongoDBLogo} alt="" />
          <div className="inner">MongoDB</div></div>
        <div className="outer"><img src={MySQLLogo} alt="" />
          <div className="inner">MySQL</div></div>
        <div className="outer"><img src={jQueryLogo} alt="" />
          <div className="inner">jQuery</div></div>
      </TechWrapper>
    </Home>
  </Layout>
)

export default IndexPage
