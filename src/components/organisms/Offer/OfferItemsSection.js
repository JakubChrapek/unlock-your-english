import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import useWindowSize from "../../../utils/getWindowSize"

import OfferSiteItem from "../../molecules/Offer/OfferSiteItem"
import { StyledOfferItemsSection } from "../../atoms/OfferSiteItem/StyledOfferItemsSection"
import { StyledOfferItemsWrapper } from "../../atoms/OfferSiteItem/StyledOfferItemsWrapper"
import MyOfferSlider from "../../molecules/MyOffer/MyOfferSlider"

const OfferItemsSection = () => {
  const width = useWindowSize()
  const offerItemsData = useStaticQuery(graphql`
    query getOfferItemsData {
      allDatoCmsOfferItem(sort: { fields: number }) {
        nodes {
          offerTitle
          offerTextContent
          offerPageContentTitle
        }
      }
    }
  `)

  return (
    <StyledOfferItemsSection>
      {typeof window === "undefined" ? (
        <></>
      ) : width <= 962 ? (
        <MyOfferSlider slideData={offerItemsData.allDatoCmsOfferItem} />
      ) : (
        <StyledOfferItemsWrapper>
          {offerItemsData.allDatoCmsOfferItem.nodes.map(slide => (
            <OfferSiteItem
              key={slide.offerTitle}
              offerTitle={slide.offerTitle}
              offerTextContent={slide.offerTextContent}
              offerPageContentTitle={slide.offerPageContentTitle}
            />
          ))}
        </StyledOfferItemsWrapper>
      )}
    </StyledOfferItemsSection>
  )
}

export default OfferItemsSection
