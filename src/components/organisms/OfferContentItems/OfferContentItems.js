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
                      hasDeclaredFontSize="36px"
                      hasDeclaredFontColor="var(--blue)"
                      hasDeclaredPadding="36px 0 0 0"
                      hasDeclaredFontWeight="bold"
                      hasdeclaredlineheight="1.35em"
                      as="h2"
                    >
                      {itemContent.firstLine}
                    </StyledText>
                  )}
                  {itemContent.secondLine && (
                    <StyledText
                      hasDeclaredFontSize="24px"
                      hasDeclaredFontColor="var(--blue)"
                      hasDeclaredPadding="10px 0 0 0"
                      hasDeclaredFontWeight="bold"
                      hasdeclaredlineheight="1.35em"
                      as="h3"
                    >
                      {itemContent.secondLine}
                    </StyledText>
                  )}
                  {itemContent.content && (
                    <StyledText
                      hasDeclaredFontSize="18px"
                      hasDeclaredFontColor="var(--black)"
                      hasDeclaredPadding="30px 0 20px 20px"
                      hasDeclaredFontWeight="medium"
                      hasDeclaredFontFamily="Raleway"
                      hasdeclaredlineheight="1.78em"
                      hasdeclaredtextalign="justify"
                      as="p"
                    >
                      {itemContent.content}
                    </StyledText>
                  )}
                  {itemContent.lineText && (
                    <StyledText
                      hasDeclaredFontSize="18px"
                      hasDeclaredFontColor="var(--black)"
                      hasDeclaredPadding="2px 0 0 20px"
                      hasDeclaredFontWeight="medium"
                      hasDeclaredFontFamily="Raleway"
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
