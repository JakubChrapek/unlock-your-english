import React from "react"

import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { StyledFooterWrapper } from "../../atoms/Footer/StyledFooterWrapper"
import { StyledFooterSection } from "../../atoms/Footer/StyledFooterSection"
import { StyledFooterLogo } from "../../atoms/Footer/StyledFooterLogo"
import { StyledFooterMenuWrapper } from "../../atoms/Footer/StyledFooterMenuWrapper"
import { StyledFooterMedia } from "../../atoms/Footer/StyledFooterMedia"
import { StyleFooterMenuUl } from "../../atoms/Footer/StyleFooterMenuUl"
import { StyledLink } from "../../atoms/Link/StyledLink"

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  const logoFooterImage = useStaticQuery(graphql`
    query logoFooter {
      datoCmsHeader {
        headerLogoColor {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  `)

  return (
    <StyledFooterSection>
      <StyledFooterWrapper>
        <StyledFooterLogo>
          <Link to="/">
            <Img
              fluid={logoFooterImage.datoCmsHeader.headerLogoColor.fluid}
              alt={logoFooterImage.datoCmsHeader.headerLogoColor.alt}
            />
          </Link>
        </StyledFooterLogo>
        <StyledFooterMenuWrapper>
          <StyleFooterMenuUl>
            <li>
              <StyledLink
                to="/about"
                hasdeclaredfontsize="14px"
                hasdedclaredfontweight="bold"
                hasdeclaredmargin="0 80px 0 0"
                hasdeclaredpadding="4px 0"
              >
                O mnie
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/offer"
                hasdeclaredfontsize="14px"
                hasdedclaredfontweight="bold"
                hasdeclaredmargin="0 80px 0 0"
                hasdeclaredpadding="4px 0"
              >
                Oferta
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/contact"
                hasdeclaredfontsize="14px"
                hasdedclaredfontweight="bold"
                hasdeclaredmargin="0 80px 0 0"
                hasdeclaredpadding="4px 0"
              >
                Kontakt
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/privacy-policy"
                hasdeclaredfontsize="14px"
                hasdedclaredfontweight="bold"
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
              <Link to="">
                <FaInstagram size="32px" />
              </Link>
            </li>
            <li>
              <Link to="">
                <FaFacebook size="32px" />
              </Link>
            </li>
            <li>
              <Link to="">
                <FaLinkedin size="32px" />
              </Link>
            </li>
          </StyleFooterMenuUl>
        </StyledFooterMedia>
      </StyledFooterWrapper>
    </StyledFooterSection>
  )
}

export default Footer