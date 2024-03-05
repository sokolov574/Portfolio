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
        <LinkItem href="sokolov.oleh.27@gmail.com">sokolov.oleh.27@gmail.com</LinkItem>:
    </LinkList>   
   </FooterWrapper> 
  );
};

export default Footer;
