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
            ...GatsbyDatoCmsFluid
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
                to="/about"
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
                to="/offer"
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
                to="/contact"
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
                to="/privacy-policy"
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
              <Link to="" rel="noreferrer" target="_blank">
                <FaInstagram size="32px" />
              </Link>
            </li>
            <li>
              <Link to="" rel="noreferrer" target="_blank">
                <FaFacebook size="32px" />
              </Link>
            </li>
            <li>
              <Link to="" rel="noreferrer" target="_blank">
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
