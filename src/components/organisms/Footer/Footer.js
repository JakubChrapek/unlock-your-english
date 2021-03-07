import React from "react"

import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

import { StyledFooterWrapper } from "../../atoms/Footer/StyledFooterWrapper"
import { StyledFooterSection } from "../../atoms/Footer/StyledFooterSection"
import { StyledFooterLogo } from "../../atoms/Footer/StyledFooterLogo"
import { StyledFooterMenuWrapper } from "../../molecules/Footer/StyledFooterMenuWrapper"
import { StyledFooterMedia } from "../../atoms/Footer/StyledFooterMedia"
import { StyleFooterMenuUl } from "../../molecules/Footer/StyleFooterMenuUl"
import { StyledLink } from "../../atoms/Link/StyledLink"

const Footer = () => {
  const logoFooterImage = useStaticQuery(graphql`
    query logoFooter {
      datoCmsHeader {
        headerLogoColor {
          alt
          fluid {
            ...GatsbyDatoCmsFluid_noBase64
          }
        }
      }
    }
  `)
  const footerData = logoFooterImage.datoCmsHeader.headerLogoColor
  return (
    <StyledFooterSection>
      <StyledFooterWrapper>
        <StyledFooterLogo>
          <Link to="/">
            <Img fluid={footerData.fluid} alt={footerData.alt} />
          </Link>
        </StyledFooterLogo>
        <StyledFooterMenuWrapper>
          <StyleFooterMenuUl>
            <li>
              <StyledLink
                to="/o-mnie"
                activeClassName="active"
                hasdeclaredfontsize="14px"
                hasdeclaredfontweight="bold"
                hasdeclaredmargin="0 80px 0 0"
                hasdeclaredpadding="4px 0"
              >
                O mnie
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/oferta"
                activeClassName="active"
                hasdeclaredfontsize="14px"
                hasdeclaredfontweight="bold"
                hasdeclaredmargin="0 80px 0 0"
                hasdeclaredpadding="4px 0"
              >
                Oferta
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/kontakt"
                activeClassName="active"
                hasdeclaredfontsize="14px"
                hasdeclaredfontweight="bold"
                hasdeclaredmargin="0 80px 0 0"
                hasdeclaredpadding="4px 0"
              >
                Kontakt
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/polityka-prywatnosci"
                activeClassName="active"
                hasdeclaredfontsize="14px"
                hasdeclaredfontweight="bold"
                hasdeclaredpadding="4px 0"
              >
                Polityka prywatności
              </StyledLink>
            </li>
          </StyleFooterMenuUl>
        </StyledFooterMenuWrapper>
        <StyledFooterMedia>
          <StyleFooterMenuUl hasmarginright={true}>
            <li>
              <a
                href="https://www.instagram.com/unlock_your_english_kamila_z/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FaInstagram size="32px" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/unlockyourenglishpl/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FaFacebook size="32px" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/unlockyourenglishpl/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FaLinkedin size="32px" />
              </a>
            </li>
          </StyleFooterMenuUl>
        </StyledFooterMedia>
      </StyledFooterWrapper>
    </StyledFooterSection>
  )
}

export default Footer
