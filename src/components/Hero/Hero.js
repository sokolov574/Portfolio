import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a full stack developer with a passion for creating and developing web applications. I am constantly learning and growing to become the best developer I can be. 
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/oleh-sokolov-2bb078252/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;