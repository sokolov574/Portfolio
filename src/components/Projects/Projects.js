import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {[{
        title: 'Project 1',
        description: 'This is another project.'
      },{
        title: 'Project 2',
        description: 'This is another project.'
      },{
        title: 'Project 3',
        description: 'This is another project.'
      },{
        title: 'Project 4',
        description: 'This is another project.'
      
      }].map((project) => (
        <div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;