import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StyledOfferConentItem } from "../../atoms/OfferContentItems/StyledOfferConentItem"
import { StyledOfferContentWrapper } from "../../atoms/OfferContentItems/StyledOfferContentWrapper"
import { StyledText } from "../../atoms/Text/StyledText"
import { StyledOfferTextWrapper } from "../../atoms/OfferContentItems/StyledOfferTextWrapper"

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
            console.log(itemContent)
            return (
              <StyledOfferTextWrapper>
                {itemContent.firstLine && (
                  <StyledText
                    hasdeclaredfontsize="36px"
                    hasdeclaredfontcolor="var(--blue)"
                    hasdeclaredpadding="70px 0 15px 0"
                    hasdeclaredfontweight="bold"
                    as="h2"
                    dangerouslySetInnerHTML={{ __html: itemContent.firstLine }}
                  />
                )}
                {itemContent.secondLine && (
                  <StyledText
                    hasdeclaredfontsize="24px"
                    hasdeclaredfontcolor="var(--blue)"
                    hasdeclaredpadding="0 0 0 0"
                    hasdeclaredfontweight="bold"
                    as="h3"
                    dangerouslySetInnerHTML={{ __html: itemContent.secondLine }}
                  />
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
                    dangerouslySetInnerHTML={{ __html: itemContent.content }}
                  />
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
