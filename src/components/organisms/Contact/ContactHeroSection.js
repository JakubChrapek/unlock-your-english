import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import AboutContactForm from "../../molecules/AboutContact/AboutContactForm"

import { StyledHeroContactSection } from "../../atoms/Contact/StyledHeroContactSection"
import { StyledHeroContactWrapper } from "../../atoms/Contact/StyledHeroContactWrapper"
import { StyledImageWrapper } from "../../atoms/Contact/StyledImageWrapper"
import { StyledText } from "../../atoms/Text/StyledText"
import { StyledSmallLargeBox } from "../../molecules/Contact/StyledSmallLargeBox"
import { StyledContactFormWrapper } from "../../molecules/Contact/StyledContactFormWrapper"
import styled from "styled-components"
import useWindowSize from "../../../utils/getWindowSize"
import { PhoneContactLink } from "../../molecules/Header/Navigation/PhoneContactLink"
import { FaPhone } from "react-icons/fa"

const ContactText = styled(StyledText)`
  align-self: flex-start;
  @media (max-width: 767px) {
    align-self: center;
    text-align: center;
  }
  a {
    color: inherit;
    text-decoration-color: var(--red);
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
  }
`

const ContactHeroSection = () => {
  const width = useWindowSize()
  const contactPageData = useStaticQuery(graphql`
    query contactPageData {
      datoCmsContactPageContent {
        heroImage {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  `)
  const contactHeroData = contactPageData.datoCmsContactPageContent
  return (
    <StyledHeroContactSection>
      <StyledHeroContactWrapper>
        <StyledSmallLargeBox>
          <StyledText
            hasdeclaredfontcolor="var(--red)"
            hasdeclaredfontsize="64px"
            hasdeclaredfontweight="bold"
            as="h2"
          >
            Napisz do mnie
          </StyledText>
          <StyledText
            hasdeclaredfontcolor="var(--blue)"
            hasdeclaredfontsize="48px"
            hasdeclaredpadding="20px 0 0 20px"
            hasdeclaredfontweight="bold"
            as="h3"
          >
            a na pewno znajdziemy odpowiedź
          </StyledText>
        </StyledSmallLargeBox>
        <StyledImageWrapper>
          <Img
            fluid={contactHeroData.heroImage.fluid}
            alt={contactHeroData.heroImage.alt}
          />
        </StyledImageWrapper>
        <StyledContactFormWrapper>
          <StyledText
            hasdeclaredfontcolor="var(--red)"
            hasdeclaredfontsize="64px"
            hasdeclaredfontweight="bold"
            as="h2"
          >
            Napisz do mnie
          </StyledText>
          <StyledText
            hasdeclaredfontcolor="var(--blue)"
            hasdeclaredfontsize="48px"
            hasdeclaredpadding="20px 0 40px 20px"
            hasdeclaredfontweight="bold"
            as="h3"
          >
            a na pewno znajdziemy odpowiedź
          </StyledText>
          <AboutContactForm />

          <PhoneContactLink
            hasdeclaredfontfamily="Oswald"
            hasdeclaredfontweight="medium"
            hasdeclaredfontcolor="#fff"
            hasdeclaredfontsize="13px "
            hasdeclaredpadding="0.3em 1em"
            hasdeclaredmargin="3rem 0 0"
            mobilemenulink="true"
            noBefore
            as="a"
            href="tel:884889471"
          >
            884 889 471
            <FaPhone size="20px" color="var(--white)" />
          </PhoneContactLink>
        </StyledContactFormWrapper>
      </StyledHeroContactWrapper>
    </StyledHeroContactSection>
  )
}

export default ContactHeroSection
