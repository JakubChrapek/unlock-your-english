import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import OfferSiteItem from "../../molecules/Offer/OfferSiteItem"

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
    <div>
      {offerItemsData.allDatoCmsOfferItem.nodes.map(slide => (
        <OfferSiteItem
          offerTitle={slide.offerTitle}
          offerTextContent={slide.offerTextContent}
        />
      ))}
    </div>
  )
}

export default OfferItemsSection
