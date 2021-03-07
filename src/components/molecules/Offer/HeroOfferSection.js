import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import { StyledHerroOfferSection } from "../../molecules/Offer/StyledHerroOfferSection"
import { StyledHerroOfferWrapper } from "./StyledHerroOfferWrapper"
import { StyledHerroImage } from "../../atoms/Offer/StyledHerroImage"
import { StyledText } from "../../atoms/Text/StyledText"

const HeroOfferSection = ({ sectionTitle, sectionTitleParagraph }) => {
  const offerData = useStaticQuery(graphql`
    query heroOfferImage {
      datoCmsHerooffersectionimage {
        herroOfferSectionImage {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  `)

  return (
    <StyledHerroOfferSection>
      <div>
        <StyledHerroImage
          fluid={
            offerData.datoCmsHerooffersectionimage.herroOfferSectionImage.fluid
          }
          alt={
            offerData.datoCmsHerooffersectionimage.herroOfferSectionImage.alt
          }
        />
      </div>
      <StyledHerroOfferWrapper>
        <StyledText
          as="h1"
          hasDeclaredFontSize="72px"
          hasDeclaredFontWeight="bold"
          hasDeclaredFontColor="var(--white)"
          hasDeclaredPadding="0 0 32px 0"
        >
          {sectionTitle}
        </StyledText>
        <StyledText
          hasDeclaredFontSize="18px"
          hasDeclaredFontWeight="medium"
          hasDeclaredFontFamily="Raleway"
          hasdeclaredlineheight="1.78em"
          hasdeclaredmaxwidth="489px"
          hasDeclaredFontColor="var(--white)"
        >
          {sectionTitleParagraph}
        </StyledText>
      </StyledHerroOfferWrapper>
    </StyledHerroOfferSection>
  )
}

export default HeroOfferSection
