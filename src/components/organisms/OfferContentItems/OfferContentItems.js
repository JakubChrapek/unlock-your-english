import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { StyledOfferConentItem } from "../../atoms/OfferContentItems/StyledOfferConentItem"
import { StyledOfferContentWrapper } from "../../molecules/OfferContentItems/StyledOfferContentWrapper"
import { StyledText } from "../../atoms/Text/StyledText"
import { StyledOfferTextWrapper } from "../../molecules/OfferContentItems/StyledOfferTextWrapper"

const OfferContentItems = () => {
  const offerContentItemsData = useStaticQuery(graphql`
    query offerContentItemsData {
      allDatoCmsOfferpagecontent {
        nodes {
          offerPageContentTitle
          movieTitlesAndDescriptions {
            ... on DatoCmsOfferItemTitleFirstLine {
              firstLine
            }
            ... on DatoCmsOfferItemTitleSecondLine {
              secondLine
            }
            ... on DatoCmsOfferItemContent {
              content
            }
          }
        }
      }
    }
  `)

  return (
    <StyledOfferContentWrapper>
      {offerContentItemsData.allDatoCmsOfferpagecontent.nodes.map(item => (
        <StyledOfferConentItem>
          {item.movieTitlesAndDescriptions.map(itemContent => {
            return (
              <StyledOfferTextWrapper>
                {itemContent.firstLine && (
                  <StyledText
                    hasdeclaredfontsize="36px"
                    hasdeclaredfontcolor="var(--blue)"
                    hasdeclaredpadding="70px 0 15px 0"
                    hasdeclaredfontweight="bold"
                    as="h2"
                  >
                    {itemContent.firstLine}{" "}
                  </StyledText>
                )}
                {itemContent.secondLine && (
                  <StyledText
                    hasdeclaredfontsize="24px"
                    hasdeclaredfontcolor="var(--blue)"
                    hasdeclaredpadding="0 0 0 0"
                    hasdeclaredfontweight="bold"
                    as="h3"
                  >
                    {itemContent.secondLine}
                  </StyledText>
                )}
                {itemContent.content ? (
                  <StyledText
                    hasdeclaredfontsize="18px"
                    hasdeclaredfontcolor="var(--black)"
                    hasdeclaredpadding="30px 0 0 20px"
                    hasdeclaredfontweight="medium"
                    hasdeclaredfontfamily="Raleway"
                    hasdeclaredlineheight="1.32em"
                    as="p"
                  >
                    {itemContent.content}
                  </StyledText>
                ) : null}
              </StyledOfferTextWrapper>
            )
          })}
        </StyledOfferConentItem>
      ))}
    </StyledOfferContentWrapper>
  )
}

export default OfferContentItems
