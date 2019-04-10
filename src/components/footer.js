import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  padding: 20px;
  background: ${props => props.theme.footerBackground};
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
`;

const Footer = () => (
  <StyledFooter>
    <a href="mailto:kylegsisson@gmail.com">kylegsisson@gmail.com</a>
    <div>&copy; 2019, Built with <a href="https://www.gatsbyjs.org/">Gatsby</a></div>
  </StyledFooter>
)

export default Footer