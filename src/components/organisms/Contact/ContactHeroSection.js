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

const ContactHeroSection = () => {
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
            fluid={contactPageData.datoCmsContactPageContent.heroImage.fluid}
            alt={contactPageData.datoCmsContactPageContent.heroImage.alt}
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
        </StyledContactFormWrapper>
      </StyledHeroContactWrapper>
    </StyledHeroContactSection>
  )
}

export default ContactHeroSection
