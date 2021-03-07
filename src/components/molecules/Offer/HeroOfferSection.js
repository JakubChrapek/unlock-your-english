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
          hasdeclaredfontsize="72px"
          hasdeclaredfontweight="bold"
          hasdeclaredfontcolor="var(--white)"
          hasdeclaredpadding="0 0 32px 0"
        >
          {sectionTitle}
        </StyledText>
        <StyledText
          hasdeclaredfontsize="18px"
          hasdeclaredfontweight="medium"
          hasdeclaredfontfamily="Raleway"
          hasdeclaredlineheight="1.78em"
          hasdeclaredmaxwidth="489px"
          hasdeclaredfontcolor="var(--white)"
        >
          {sectionTitleParagraph}
        </StyledText>
      </StyledHerroOfferWrapper>
    </StyledHerroOfferSection>
  )
}

export default HeroOfferSection
