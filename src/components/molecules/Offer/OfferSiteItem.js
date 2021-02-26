import React from "react"

import { StyledText } from "../../atoms/Text/StyledText"
import { StyledOfferLink } from "../../atoms/MyOffer/StyledOfferLink"
import { StyledOfferSiteItemWrapper } from "../../molecules/OfferSiteItem/StyledOfferSiteItemWrapper"
import slugify from "slugify"
import { Link } from "react-scroll"

const OfferSiteItem = ({
  offerTitle,
  offerTextContent,
  offerPageContentTitle,
}) => {
  return (
    <StyledOfferSiteItemWrapper>
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
        hasdeclaredpadding="0 0 6px 0"
        hasdeclaredfontweight="normal"
        hasdeclaredfontfamily="Raleway"
        hasdeclaredlineheight="1.68em"
        as="h3"
      >
        {offerTextContent}
      </StyledText>
      <Link
        to={slugify(offerPageContentTitle, { lower: true })}
        smooth={true}
        duration={400}
      >
        <StyledOfferLink
          hasdeclaredfontsize="18px"
          hasdeclaredfontcolor="var(--red)"
          hasdeclaredfontweight="bold"
          hasdeclaredpadding="0 0 4px 0"
          as="p"
        >
          Przeczytaj więcej
        </StyledOfferLink>
      </Link>
    </StyledOfferSiteItemWrapper>
  )
}

export default OfferSiteItem
