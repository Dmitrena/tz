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

              <SocialIcon src="./REM.png" />
            </FooterLogo>
            <FooterAddress>
              +7 985 522 0 999
            </FooterAddress>
            {/*<FooterEmail>*/}
            {/*  example.gmail.com*/}
            {/*</FooterEmail>*/}

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
        <FooterRights>By BRIEF EXPERT © 2022</FooterRights>
      </FooterWrapper>
    </Section>
  );
}

export default Footer;
