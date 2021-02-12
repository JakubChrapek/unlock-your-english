import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import OfferSiteItem from "../../molecules/Offer/OfferSiteItem"
import { StyledOfferItemsSection } from "../../atoms/OfferSiteItem/StyledOfferItemsSection"
import { StyledOfferItemsWrapper } from "../../atoms/OfferSiteItem/StyledOfferItemsWrapper"

const OfferItemsSection = () => {
  const offerItemsData = useStaticQuery(graphql`
    query getOfferItemsData {
      allDatoCmsOfferItem {
        nodes {
          offerTitle
          offerTextContent
        }
      }
    }
  `)

  return (
    <StyledOfferItemsSection>
      <StyledOfferItemsWrapper>
        {offerItemsData.allDatoCmsOfferItem.nodes.map(slide => (
          <OfferSiteItem
            offerTitle={slide.offerTitle}
            offerTextContent={slide.offerTextContent}
          />
        ))}
      </StyledOfferItemsWrapper>
    </StyledOfferItemsSection>
  )
}

export default OfferItemsSection
