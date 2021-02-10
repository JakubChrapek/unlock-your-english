import React from "react"

const OfferSiteItem = ({ offerTitle, offerTextContent }) => {
  return (
    <div>
      <h1>{offerTitle}</h1>
      <h2>{offerTextContent}</h2>
    </div>
  )
}

export default OfferSiteItem
