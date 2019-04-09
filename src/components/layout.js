import React from "react"

import Navigation from "./navigation"
import "./layout.css"
import styled, { ThemeProvider } from 'styled-components'
import Footer from "./footer"

const theme = {
  backgroundColor: 'white',
  accentColor: '#afc4d0',
  fontColor: 'black',
  fontFam: "'Libre Baskerville', serif",
  footerBackground: 'white'
}

const PageWrapper = styled.div`
  width: 100%;
`;
const LayoutWrapper = styled.div`
  /* background: rgb(50, 54, 57); */
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.fontColor};
  font-family: ${props => props.theme.fontFam};
  font-weight: 100;
`;

const MainWrapper = styled.main`
  padding: 0 50px 50px;
  max-width: 700px;
  margin: 0 auto; 

  @media (max-width: 530px) {
    padding: 0px 10px;
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme} >
    <LayoutWrapper>
      <Navigation />
      <PageWrapper>
        <MainWrapper>{children}</MainWrapper>
      </PageWrapper>
      <Footer />
    </LayoutWrapper>
  </ThemeProvider>
)


export default Layout
