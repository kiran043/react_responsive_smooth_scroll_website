import React from "react";
import {FaFacebook}  from 'react-icons/fa'
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWraper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconsLink,

} from "./footerElement";
const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWraper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us Title</FooterLinkTitle>
              <FooterLink to="/signin">About Us</FooterLink>
              <FooterLink to="/signin">About Us</FooterLink>
              <FooterLink to="/signin">About Us</FooterLink>
              <FooterLink to="/signin">About Us</FooterLink>
              <FooterLink to="/signin">About Us</FooterLink>
              <FooterLink to="/signin">About Us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us Title</FooterLinkTitle>
              <FooterLink to="/signin">About Us</FooterLink>
              <FooterLink to="/signin">About Us</FooterLink>
              <FooterLink to="/signin">About Us</FooterLink> 
              <FooterLink to="/signin">About Us</FooterLink>
              <FooterLink to="/signin">About Us</FooterLink>
              <FooterLink to="/signin">About Us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us Title</FooterLinkTitle>
              <FooterLink to="/signin">About Us</FooterLink>
              <FooterLink to="/signin">About Us</FooterLink>
              <FooterLink to="/signin">About Us</FooterLink>
              <FooterLink to="/signin">About Us</FooterLink>
              <FooterLink to="/signin">About Us</FooterLink>
              <FooterLink to="/signin">About Us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us Title</FooterLinkTitle>
              <FooterLink to="/signin">About Us</FooterLink>
              <FooterLink to="/signin">About Us</FooterLink>
              <FooterLink to="/signin">About Us</FooterLink>
              <FooterLink to="/signin">About Us</FooterLink>
              <FooterLink to="/signin">About Us</FooterLink>
              <FooterLink to="/signin">About Us</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}> dolla</SocialLogo>
            <WebsiteRights>
              dolla &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconsLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWraper>
    </FooterContainer>
  );
};

export default Footer;
