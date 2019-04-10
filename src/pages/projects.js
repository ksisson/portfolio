import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"
import { Title } from "../components/style"

const ProjectWrapper = styled.div`

  margin-bottom: 30px;
  
  a {
    text-decoration: none;
    color: ${props => props.theme.fontColor};
  }

  .copy {
    background: ${props => props.theme.accentColor};
    padding: 20px;

    ul {
      margin: 0;
      padding-left: 20px;
    }
    a {
      text-decoration: underline;
    }
  }
`;

const DesktopImage = styled.div`
  width: 100%;
  margin-bottom: 30px;
  border: 1px solid black;
`;

const Projects = () => (
  <StaticQuery
    query={graphql`
      query PortfolioPics {
        MSPortfolio: file(relativePath: { eq: "MSPortfolio.png"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        BTAPortfolio: file(relativePath: { eq: "BTAPortfolio.png"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        RiftPortfolio: file(relativePath: { eq: "RiftPortfolio.png"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        XpirePortfolio: file(relativePath: { eq: "XpirePortfolio.png"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Layout >
          <ProjectWrapper>
            <a href="http://maureenstapleton.net" target="_blank" rel="noopener noreferrer">
              <Title>Maureen Stapleton</Title>
            </a>
            <DesktopImage>
              <Img fluid={data.MSPortfolio.childImageSharp.fluid} />
            </DesktopImage>
            <div className="copy">
              <ul>
                <li>Developed website for high-end, Aspen realtor Maureen Stapleton</li>
                <li>Implemented Contentful CMS to allow client to dynamically generate new pages by uploading new listings</li>
                <li>Integrated with IDX Broker to allow users to search the Multiple Listing Service</li>
              </ul>
              <p>Stack: React, JavaScript, Next, Node.js, Express, Contentful CMS, CSS in JS</p>
              <p>Link: <a href="http://maureenstapleton.net">www.maureenstapleton.net</a></p>
            </div>
          </ProjectWrapper>
          <ProjectWrapper>
            <a href="http://beyondtheagency.co" target="_blank" rel="noopener noreferrer">
              <Title>Beyond The Agency</Title>
            </a>
            <DesktopImage>
              <Img fluid={data.BTAPortfolio.childImageSharp.fluid} />
            </DesktopImage>
            <div className="copy">
              <ul>
                <li>Worked with a developer and designer to build the website for Miami-based marketing Agency, Beyond The Agency</li>
                <li>Incorporated Contentful CMS to allow targeted customization by client</li>
              </ul>
              <p>Stack: React, JavaScript, Next, Node.js, Express, Contentful CMS, CSS in JS</p>
              <p>Link: <a href="http://beyondtheagency.co">www.beyondtheagency.co</a></p>
            </div>
          </ProjectWrapper>
          <ProjectWrapper>
            <a href="http://rifft.herokuapp.com" target="_blank" rel="noopener noreferrer">
              <Title>Rift</Title>
            </a>
            <DesktopImage>
              <Img fluid={data.RiftPortfolio.childImageSharp.fluid} />
            </DesktopImage>
            <div className="copy">
              <ul>
                <li>Portal designed for teachers and students to share notes, write posts, and make comments on material from class</li>
              </ul>
              <p>Stack: React, JavaScript, Node.js, Express, MongoDB, Mongoose, CSS</p>
              <p>Link: <a href="http://rifft.herokuapp.com">www.rifft.herokuapp.com</a></p>
            </div>
          </ProjectWrapper>
          <ProjectWrapper>
            <a href="https://xpire.herokuapp.com/" target="_blank" rel="noopener noreferrer" >
              <Title>Xpire</Title>
            </a>
            <DesktopImage>
              <Img fluid={data.XpirePortfolio.childImageSharp.fluid} />
            </DesktopImage>
            <div className="copy">
              <ul>
                <li>
                  A web application for keeping track of expiration dates of perishable foods.
                </li>
              </ul>
              <p>Stack: jQuery, Node.js, Express, MySQL, Sequelize</p>
              <p>Link: <a href="https://xpire.herokuapp.com/">www.xpire.herokuapp.com</a></p>
            </div>
          </ProjectWrapper>
        </Layout>
      )
    }}
  />
)

export default Projects
