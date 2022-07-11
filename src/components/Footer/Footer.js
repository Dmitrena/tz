import React from "react";
import {
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLogo,
  SocialIcon,
  FooterRights,
  FooterSocialIcon,
  FooterWrapper,
  FooterAddress,
  FooterColumn,
  FooterGrid, FooterEmail,
} from "./FooterStyles";
import { footerData, footerSocialData } from "../../data/FooterData";
import { Row, Section } from "../../globalStyles";

function Footer() {
  return (
    <Section padding="4rem 0 2rem 0">
      <FooterWrapper>
        <FooterGrid justify="space-between">
          <FooterColumn id="footerLogo">
            <FooterLogo to="/">
              ТЗ
              <SocialIcon src="./LogoBg.png" />
              ЭК
            </FooterLogo>
            <FooterAddress>
              69 Street, Delta Building, US Road, Los Angeles 123
            </FooterAddress>
            <FooterEmail>
              example.gmail.com
            </FooterEmail>

          </FooterColumn>
          {footerSocialData.map((social, index) => (
              <div align="end">
                <FooterSocialIcon
                    key={index}
                    href="/"
                    target="_blank"
                    aria-label={social.name}
                >
                  {social.icon}
                </FooterSocialIcon>
              </div>
          ))}
        </FooterGrid>
        <FooterRights>By E-Build © 2022</FooterRights>
      </FooterWrapper>
    </Section>
  );
}

export default Footer;
