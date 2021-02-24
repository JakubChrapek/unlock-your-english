import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { StyledMyOfferSection } from "../../atoms/MyOffer/StyledMyOfferSection"
import { StyledMyOfferWrapper } from "../../atoms/MyOffer/StyledMyOfferWrapper"
import { StyledText } from "../../atoms/Text/StyledText"
import MyOfferSlider from "../../molecules/MyOffer/MyOfferSlider"

const MyOffer = () => {
  const slides = useStaticQuery(graphql`
    query getSlides {
      allDatoCmsOfferItem {
        nodes {
          offerTitle
          offerTextContent
          offerPageContentTitle
        }
      }
    }
  `)
  return (
    <StyledMyOfferSection>
      <StyledMyOfferWrapper>
        <StyledText
          hasdeclaredfontcolor="var(--red)"
          hasdeclaredfontsize="48px"
          hasdeclaredfontweight="bold"
          hasdeclaredpadding="0 0 48px 0"
        >
          Moja oferta
        </StyledText>
        <MyOfferSlider fromAnotherPage slideData={slides.allDatoCmsOfferItem} />
      </StyledMyOfferWrapper>
    </StyledMyOfferSection>
  )
}

export default MyOffer
