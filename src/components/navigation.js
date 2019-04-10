import { Link } from "gatsby"
import React, { Component } from "react"
import styled from 'styled-components'

const DesktopNavWrapper = styled.nav`

  a {
      text-decoration: none;
      position: relative;
      color: black;
    }
    a:after {
      position: absolute;
      content: '';
      height: 2px;
      bottom: 12px;
      margin: 0 auto;
      left: 0;
      right: 0;
      width: 0%;
      background: hsla(0,0%,0%,0.5);
      transition: 200ms ease-in-out;
    }
    a:hover:after {
      width: 100%;
    }
    .active:after {
      position: absolute;
      content: '';
      height: 2px;
      bottom: -4px;
      margin: 0 auto;
      left: 0;
      right: 0;
      width: 100%;
      background: black;
    }

  box-sizing: border-box;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 250px auto 120px 120px;
  text-align: center;
  height: 60px;

    @media (max-width: 560px) {
      grid-template-columns: 1fr 0 1fr 1fr;

      h3 {
        display: none;
      }
    }
`;


const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    transition: all 400ms ease;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    h3 {
      height: 60px;
      line-height: 60px;
    }
    h4 {
      height: 60px;
      line-height: 60px;
    }
`;

const MobileHome = styled.div`
  display: none;
  @media (max-width: 560px) {
    display: block;
  }
`;



class Navigation extends Component {
  state = {
    open: false
  }


  render() {
    return (<>
      <DesktopNavWrapper>

        <StyledLink
          to="/"
        >
          <h3
            style={{
              margin: '0',
            }}
          >
            Kyle Sisson
        </h3>
          <MobileHome><h4>Home</h4></MobileHome>
        </StyledLink>
        <div />
        <StyledLink to="/projects"><h4>Projects</h4></StyledLink>
        <StyledLink to="/about"><h4>About</h4></StyledLink>
      </DesktopNavWrapper>
    </>)
  }

}


export default Navigation
