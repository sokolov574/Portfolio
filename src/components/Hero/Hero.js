import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        My name is Oleh <br />
        and i am a Fullstack Web Developer
      </SectionTitle>
      <SectionText>
      An ambitious web artisan, crafting innovative solutions. Deftly juggling React, Next.js, and MongoDB to breathe life into client visions. An indefatigable explorer of cutting-edge technologies, I find inspiration in creative challenges. My passion lies in full-cycle development, from conception to implementation. Join me on this exhilarating journey into the realm of web development!
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/oleh-sokolov-2bb078252/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;