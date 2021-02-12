import React from "react"
import { StyledText } from "../../atoms/Text/StyledText"
import { StyledLink } from "../../atoms/Link/StyledLink"
import { StyledOfferSiteItemWrapper } from "../../atoms/OfferSiteItem/StyledOfferSiteItemWrapper"
const OfferSiteItem = ({ offerTitle, offerTextContent }) => {
  return (
    <StyledOfferSiteItemWrapper>
      <div>
        <StyledText
          as="h2"
          hasdeclaredfontsize="36px"
          hasdeclaredfontcolor="var(--blue)"
          hasdeclaredfontweight="bold"
          hasdeclaredlineheight="1.45em"
          dangerouslySetInnerHTML={{
            __html: offerTitle,
          }}
        />
      </div>
      <StyledText
        hasdeclaredfontsize="18px"
        hasdeclaredfontcolor="var(--black)"
        hasdeclaredpadding="0 0 28px 0"
        hasdeclaredfontweight="medium"
        hasdeclaredfontfamily="Raleway"
        hasdeclaredlineheight="1.32em"
        dangerouslySetInnerHTML={{
          __html: offerTextContent,
        }}
      />
      <StyledLink
        hasdeclaredfontsize="18px"
        hasdeclaredfontcolor="var(--red)"
        hasdeclaredfontweight="bold"
      >
        Przeczytaj więcej
      </StyledLink>
    </StyledOfferSiteItemWrapper>
  )
}

export default OfferSiteItem
