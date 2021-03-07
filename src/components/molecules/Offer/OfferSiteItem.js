import React from "react"

import { StyledText } from "../../atoms/Text/StyledText"
import { StyledOfferLink } from "../../atoms/MyOffer/StyledOfferLink"
import { StyledOfferSiteItemWrapper } from "../../molecules/OfferSiteItem/StyledOfferSiteItemWrapper"
import slugify from "slugify"
import { Link } from "react-scroll"
import useWindowSize from "../../../utils/getWindowSize"

const OfferSiteItem = ({
  offerTitle,
  offerTextContent,
  offerPageContentTitle,
}) => {
  const width = useWindowSize()
  return (
    <StyledOfferSiteItemWrapper>
      <div>
        <StyledText
          as="h2"
          hasDeclaredFontSize={width < 1200 ? "32px" : "36px"}
          hasDeclaredFontColor="var(--blue)"
          hasDeclaredFontWeight="bold"
          hasdeclaredlineheight="1.45em"
        >
          {offerTitle}
        </StyledText>
      </div>
      <StyledText
        hasDeclaredFontSize="18px"
        hasDeclaredFontColor="var(--black)"
        hasDeclaredPadding="0 0 6px 0"
        hasDeclaredFontWeight="normal"
        hasDeclaredFontFamily="Raleway"
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
          hasDeclaredFontSize="18px"
          hasDeclaredFontColor="var(--red)"
          hasDeclaredFontWeight="bold"
          hasDeclaredPadding="0 0 4px 0"
          as="p"
        >
          Przeczytaj więcej
        </StyledOfferLink>
      </Link>
    </StyledOfferSiteItemWrapper>
  )
}

export default OfferSiteItem
