import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { StyledAboutMeHeroSection } from "../../atoms/AboutMeHeroSection/StyledAboutMeHeroSection"
import { StyledAboutMeHeroWrapper } from "../../atoms/AboutMeHeroSection/StyledAboutMeHeroWrapper"
import { StyledImageWrapper } from "../../atoms/AboutMeHeroSection/StyledImageWrapper"
import { StyledTextWrapper } from "../../atoms/AboutMeHeroSection/StyledTextWrapper"
import { StyledText } from "../../atoms/Text/StyledText"
import { StyledMobileTextWrapper } from "../../atoms/AboutMeHeroSection/StyledMobileTextWrapper"

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
            {aboutMeData.datoCmsAboutMeContent.heroTitle}
          </StyledText>
          <StyledText
            as="h2"
            hasdeclaredfontsize="48px"
            hasdeclaredfontcolor="var(--blue)"
            hasdeclaredfontweight="1.85em"
            hasdeclaredpadding="0 0 24px 60px"
          >
            {aboutMeData.datoCmsAboutMeContent.heroTitleSecondLine}
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
            {aboutMeData.datoCmsAboutMeContent.heroTitle}
          </StyledText>
          <StyledText
            as="h2"
            hasdeclaredfontsize="48px"
            hasdeclaredfontcolor="var(--blue)"
            hasdeclaredfontweight="1.85em"
            hasdeclaredpadding="0 0 24px 60px"
          >
            {aboutMeData.datoCmsAboutMeContent.heroTitleSecondLine}
          </StyledText>
          <StyledText
            as="p"
            hasdeclaredfontsize="22px"
            hasdeclaredfontcolor="var(--black)"
            hasdeclaredfontweight="medium"
            hasdeclaredfontfamily="Raleway"
            hasdeclaredpadding="0 0 24px 60px"
            hasdeclaredlineheight="1.41em"
            dangerouslySetInnerHTML={{
              __html: aboutMeData.datoCmsAboutMeContent.heroContent,
            }}
          ></StyledText>
        </StyledTextWrapper>
      </StyledAboutMeHeroWrapper>
    </StyledAboutMeHeroSection>
  )
}

export default AboutMeHeroSection
