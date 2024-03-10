import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { LinkContainer, Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world. From Front-end to Back-end.
    </SectionText>
    
    <List>
      <ListItem>  
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Next.js, Vue.Js, Tailwind
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>  
        <DiFirebase size='3rem'/>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node, MongoDB, ExpressJS
          </ListParagraph>
        </ListContainer>
      </ListItem> 

      <ListItem>  
        <DiZend size='3rem'/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma, Sketch, Mockplus, Pixso
          </ListParagraph>
        </ListContainer>
      </ListItem> 
        </List>
  </Section>
);

export default Technologies;
