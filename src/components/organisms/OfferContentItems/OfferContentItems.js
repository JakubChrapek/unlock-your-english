import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import slugify from "slugify"
import { Element, scroller as scroll } from "react-scroll"

import { StyledOfferConentItem } from "../../atoms/OfferContentItems/StyledOfferConentItem"
import { StyledOfferContentWrapper } from "../../molecules/OfferContentItems/StyledOfferContentWrapper"
import { StyledText } from "../../atoms/Text/StyledText"
import { StyledOfferTextWrapper } from "../../molecules/OfferContentItems/StyledOfferTextWrapper"

const OfferContentItems = ({ hash }) => {
  const offerContentItemsData = useStaticQuery(graphql`
    query offerContentItemsData {
      allDatoCmsOfferpagecontent(sort: { fields: number }) {
        nodes {
          offerPageContentTitle
          offerParagraphs {
            ... on DatoCmsListItem {
              id
              lineText
            }
            ... on DatoCmsOfferItemContent {
              id
              content
            }
            ... on DatoCmsOfferItemTitleSecondLine {
              id
              secondLine
            }
            ... on DatoCmsOfferItemTitleFirstLine {
              id
              firstLine
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    if (hash !== "") {
      scroll.scrollTo(hash.replace("#", ""), {
        duration: 300,
        delay: 100,
        smooth: true,
        containerId: "offerItemsContainer",
        offset: 0,
      })
    }
  }, [hash])

  return (
    <StyledOfferContentWrapper id="offerItemsContainer">
      {offerContentItemsData.allDatoCmsOfferpagecontent.nodes.map(item => (
        <Element
          key={item.offerPageContentTitle}
          name={slugify(item.offerPageContentTitle, { lower: true })}
          id={slugify(item.offerPageContentTitle, { lower: true })}
        >
          <StyledOfferConentItem>
            {item.offerParagraphs.map(itemContent => {
              return (
                <StyledOfferTextWrapper key={itemContent.id}>
                  {itemContent.firstLine && (
                    <StyledText
                      hasdeclaredfontsize="36px"
                      hasdeclaredfontcolor="var(--blue)"
                      hasdeclaredpadding="36px 0 0 0"
                      hasdeclaredfontweight="bold"
                      hasdeclaredlineheight="1.35em"
                      as="h2"
                    >
                      {itemContent.firstLine}
                    </StyledText>
                  )}
                  {itemContent.secondLine && (
                    <StyledText
                      hasdeclaredfontsize="24px"
                      hasdeclaredfontcolor="var(--blue)"
                      hasdeclaredpadding="10px 0 0 0"
                      hasdeclaredfontweight="bold"
                      hasdeclaredlineheight="1.35em"
                      as="h3"
                    >
                      {itemContent.secondLine}
                    </StyledText>
                  )}
                  {itemContent.content && (
                    <StyledText
                      hasdeclaredfontsize="18px"
                      hasdeclaredfontcolor="var(--black)"
                      hasdeclaredpadding="30px 0 20px 20px"
                      hasdeclaredfontweight="medium"
                      hasdeclaredfontfamily="Raleway"
                      hasdeclaredlineheight="1.78em"
                      hasdeclaredtextalign="justify"
                      as="p"
                    >
                      {itemContent.content}
                    </StyledText>
                  )}
                  {itemContent.lineText && (
                    <StyledText
                      hasdeclaredfontsize="18px"
                      hasdeclaredfontcolor="var(--black)"
                      hasdeclaredpadding="2px 0 0 20px"
                      hasdeclaredfontweight="medium"
                      hasdeclaredfontfamily="Raleway"
                      hasdeclaredlineheight="1.78em"
                      hasdeclaredtextalign="justify"
                      as="p"
                    >
                      {itemContent.lineText}
                    </StyledText>
                  )}
                </StyledOfferTextWrapper>
              )
            })}
          </StyledOfferConentItem>
        </Element>
      ))}
    </StyledOfferContentWrapper>
  )
}

export default OfferContentItems
