import React from "react"
import styled from 'styled-components'
import { Title } from './style'
import Badge from "../images/UCLA_Extension.png"
import CPLogo from "../images/CalPolyMustang.png"

const BioWrapper = styled.div`
  .copy {
    padding: 0 0 30px;

  }
  p {
    margin: 0;
    padding: 20px;
    background: ${props => props.theme.accentColor}
  }
`;

const EducationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px 0;
  background: ${props => props.theme.accentColor};
  @media (max-width: 760px) {
    display: block;
  }
`;

const Schools = styled.div`
padding: 20px 0;
text-align: center;

img {
  width: 250px;
  margin: 0 auto;
}
.CPLogo {
  height: 126px;
  padding: 62px 0;
}
`;


const Biography = () => (
  <BioWrapper>
    <div className="copy">
      <Title>Why Do I Code?</Title>
      <p>I like several aspects of web development, but my favorite is the fast-paced nature of the craft. Since web technologies are constantly evolving, my level of experience doesn’t hinder me as much as it might in a career with a more static knowledge base. As with anything in life, experience is paramount; however, the most experienced developers must always keep learning if they want to stay on the cutting edge. A veteran developer will certainly have a leg up on me when a new technology is introduced, but I’m not necessarily years behind in learning that technology; I can be at the top if I put in the time, and that inspires me.</p>
    </div>
    <div className="copy">
      <Title>What Are My Hobbies?</Title>
      <p>When I'm not hacking on my computer, I put most of my time into hacking my body (bio-hacking). As a kid, I played every sport I could which naturally led me to look for ways to optimize physical performance through training and diet. I began to focus more on the foods I was eating while I was in college and I noticed a boost in both mental and physical performance. Shortly thereafter, my quest to find the optimal fuel source began. Now I experiment with my diet daily, trying to find what works best for me. A few activities I enjoy include playing basketball, surfing, weight-lifting, and brainstorming (could be about anything).</p>
    </div>
    <Title>Education</Title>
    <EducationWrapper>
      <Schools>
        <h3>UCLA Extension</h3>
        <div>Full Stack Bootcamp</div>
        <div>May 2018 - August 2018</div>
        <div>
          <a href="https://uclaextension.credly.com/member-badges/15115283" target="_blank" rel="noopener noreferrer">
            <img src={Badge} alt="Bootcamp Badge" />
          </a>
        </div>
      </Schools>
      <Schools>
        <h3>Cal Poly San Luis Obispo</h3>
        <div>BS in Business Administration</div>
        <div>September 2012 - June 2015</div>
        <div>
          <a href="https://www.cob.calpoly.edu/" target="_blank" rel="noopener noreferrer">
            <img className="CPLogo" src={CPLogo} alt="Cal Poly Badge" />
          </a>
        </div>
      </Schools>
    </EducationWrapper>
  </BioWrapper>
)

export default Biography