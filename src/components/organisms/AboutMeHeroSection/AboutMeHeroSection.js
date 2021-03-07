import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { StyledAboutMeHeroSection } from "../../atoms/AboutMeHeroSection/StyledAboutMeHeroSection"
import { StyledAboutMeHeroWrapper } from "../../atoms/AboutMeHeroSection/StyledAboutMeHeroWrapper"
import { StyledImageWrapper } from "../../molecules/AboutMeHeroSection/StyledImageWrapper"
import { StyledTextWrapper } from "../../molecules/AboutMeHeroSection/StyledTextWrapper"
import { StyledText } from "../../atoms/Text/StyledText"
import { StyledMobileTextWrapper } from "../../molecules/AboutMeHeroSection/StyledMobileTextWrapper"

const AboutMeHeroSection = () => {
  const aboutMeData = useStaticQuery(graphql`
    query aboutMeData {
      datoCmsHiImCamila {
        hiImCamilaAboutPage {
          fluid {
            ...GatsbyDatoCmsFluid
          }
          alt
        }
      }
      datoCmsAboutMeContent {
        heroTitle
        heroTitleSecondLine
        heroContent
      }
    }
  `)
  const dataAbout = aboutMeData.datoCmsAboutMeContent
  return (
    <StyledAboutMeHeroSection>
      <StyledAboutMeHeroWrapper>
        <StyledMobileTextWrapper>
          <StyledText
            as="h1"
            hasdeclaredfontsize="64px"
            hasdeclaredfontcolor="var(--red)"
            hasdeclaredfontweight="1.85em"
            hasdeclaredpadding="0 0 24px 0"
          >
            {dataAbout.heroTitle}
          </StyledText>
          <StyledText
            as="h2"
            hasdeclaredfontsize="48px"
            hasdeclaredfontcolor="var(--blue)"
            hasdeclaredfontweight="1.85em"
            hasdeclaredpadding="0 0 24px 60px"
          >
            {dataAbout.heroTitleSecondLine}
          </StyledText>
        </StyledMobileTextWrapper>
        <StyledImageWrapper>
          <Img
            fluid={aboutMeData.datoCmsHiImCamila.hiImCamilaAboutPage.fluid}
          />
        </StyledImageWrapper>
        <StyledTextWrapper>
          <StyledText
            as="h1"
            hasdeclaredfontsize="64px"
            hasdeclaredfontcolor="var(--red)"
            hasdeclaredfontweight="1.85em"
            hasdeclaredpadding="0 0 24px 0"
          >
            {dataAbout.heroTitle}
          </StyledText>
          <StyledText
            as="h2"
            hasdeclaredfontsize="48px"
            hasdeclaredfontcolor="var(--blue)"
            hasdeclaredfontweight="1.85em"
            hasdeclaredpadding="0 0 24px 60px"
          >
            {dataAbout.heroTitleSecondLine}
          </StyledText>
          <StyledText
            as="p"
            hasdeclaredfontsize="22px"
            hasdeclaredfontcolor="var(--black)"
            hasdeclaredfontweight="medium"
            hasdeclaredfontfamily="Raleway"
            hasdeclaredpadding="0 0 24px 60px"
            hasdeclaredlineheight="1.85em"
          >
            {dataAbout.heroContent}
          </StyledText>
        </StyledTextWrapper>
      </StyledAboutMeHeroWrapper>
    </StyledAboutMeHeroSection>
  )
}

export default AboutMeHeroSection
