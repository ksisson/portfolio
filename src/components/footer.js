import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  background: ${props => props.theme.footerBackground};
  text-align: center;
`;

const Footer = () => (
  <StyledFooter>
    <a href="mailto:kylegsisson@gmail.com">KyleGSisson@gmail.com</a>
    <div>&copy; 2019, Built with <a href="https://www.gatsbyjs.org/">Gatsby</a></div>
  </StyledFooter>
)

export default Footer