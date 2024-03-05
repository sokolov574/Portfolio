import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:+49-176-225-878-46">+49-176-225-878-46</LinkItem>
      </LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:sokolov.oleh.27@gmail.com">sokolov.oleh.27@gmail.com</LinkItem>:
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Developing the future</Slogan>
      </CompanyContainer>
      
      <SocialIcons href="https://github.com/sokolov574">
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/oleh-sokolov-2bb078252/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://www.instagram.com/sokolov.o/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>

    </SocialIconsContainer> 
   </FooterWrapper> 
  );
};

export default Footer;
