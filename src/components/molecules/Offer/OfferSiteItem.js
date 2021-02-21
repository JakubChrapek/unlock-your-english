import React from "react"

import { StyledText } from "../../atoms/Text/StyledText"
import { StyledLink } from "../../atoms/Link/StyledLink"
import { StyledOfferSiteItemWrapper } from "../../molecules/OfferSiteItem/StyledOfferSiteItemWrapper"

const OfferSiteItem = ({
  offerTitle,
  offerTextContent,
  offerPageContentTitle,
}) => {
  return (
    <StyledOfferSiteItemWrapper>
      {console.log(offerTitle, offerTextContent, offerPageContentTitle)}
      <div>
        <StyledText
          as="h2"
          hasdeclaredfontsize="36px"
          hasdeclaredfontcolor="var(--blue)"
          hasdeclaredfontweight="bold"
          hasdeclaredlineheight="1.45em"
        >
          {offerTitle}
        </StyledText>
      </div>
      <StyledText
        hasdeclaredfontsize="18px"
        hasdeclaredfontcolor="var(--black)"
        hasdeclaredpadding="0 0 28px 0"
        hasdeclaredfontweight="medium"
        hasdeclaredfontfamily="Raleway"
        hasdeclaredlineheight="1.32em"
      >
        {offerTextContent}
      </StyledText>
      <StyledLink
        hasdeclaredfontsize="18px"
        hasdeclaredfontcolor="var(--red)"
        hasdeclaredfontweight="bold"
        hasdeclaredpadding="0 0 4px 0"
      >
        Przeczytaj więcej
        {offerPageContentTitle}
      </StyledLink>
    </StyledOfferSiteItemWrapper>
  )
}

export default OfferSiteItem
