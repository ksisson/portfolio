import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Transition } from 'react-transition-group';
import BackgroundImage from 'gatsby-background-image';




const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  padding: 30px 0;
  /* height: ${ props => props.homePage ? '100px' : '200px'}; */
  background: #c0dfd9;
  position: relative;
  z-index: 1;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: height 300ms ease;
`;

const headings = {
  padding: '10px'
}


class Header extends React.Component {
  state = {
    height: '100px',
    endingHeight: '100px'
  }


  componentDidMount() {


    const location = localStorage.getItem("location");
    const prevLocation = localStorage.getItem("prevLocation");

    console.log('location', location)
    console.log('prevLocation', prevLocation)
    if (location === '/' && prevLocation === '/') {

    }
    else if (location !== '/' && prevLocation === '/') {
      this.setState({
        height: '100px',
        endingHeight: '200px'
      })
    }
    else if (location !== '/' && prevLocation !== '/') {
      this.setState({
        height: '200px',
        endingHeight: '200px'
      })
    }
    else if (location === '/' && prevLocation !== '/') {
      this.setState({
        height: '200px',
        endingHeight: '100px'
      })
    }

  }

  render() {

    const headingStyle = {
      transition: `opacity 400ms ease-in-out`,
      opacity: 0,
    }

    const headingTransitionStyles = {
      entering: { opacity: 0 },
      entered: { opacity: 1 },
    };

    const imageStyle = {
      transition: `height 300ms ease-in`,
      height: this.state.endingHeight,
    }

    const imageTransitionStyles = {
      entering: { height: this.state.height },
      entered: { height: this.state.endingHeight },
    }

    return (
      <StaticQuery
        query={graphql`
    query Header {
      backgroundPano: file(relativePath: { eq: "background_pano.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `}
        render={data => {

          const imageData = data.backgroundPano.childImageSharp.fluid
          return (
            <Transition timeout={300}>
              {state => (
                <StyledBackgroundImage
                  homePage={this.props.homePage}
                  fluid={imageData}
                  style={{
                    ...imageStyle, ...imageTransitionStyles[state]
                  }}
                >
                  {!this.props.homePage &&
                    <HeaderContent style={{ ...headingStyle, ...headingTransitionStyles[state] }}>
                      <h1 style={headings}>Kyle Sisson</h1>
                      <h2 style={headings}>Full-Stack Web Wizard</h2>
                    </HeaderContent>
                  }
                </StyledBackgroundImage>
              )}

            </Transition>
          )
        }}
      />
    )
  }
}

export default Header;