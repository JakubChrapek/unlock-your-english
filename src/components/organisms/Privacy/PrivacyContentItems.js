import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import slugify from "slugify"
import { Element, scroller as scroll } from "react-scroll"

import { StyledOfferConentItem } from "../../atoms/OfferContentItems/StyledOfferConentItem"
import { StyledOfferContentWrapper } from "../../molecules/OfferContentItems/StyledOfferContentWrapper"
import { StyledText } from "../../atoms/Text/StyledText"
import { StyledOfferTextWrapper } from "../../molecules/OfferContentItems/StyledOfferTextWrapper"

const OfferContentItems = () => {
  const privacyContentItemsData = useStaticQuery(graphql`
    query privacyContentItemsData {
      allDatoCmsPrivacyPageContent {
        nodes {
          privacyPageContentTitle
          privacyParagraphBlock {
            ... on DatoCmsListItem {
              id
              lineText
            }
            ... on DatoCmsPrivacyItemFirstLine {
              id
              privacyTitleFirstLine
            }
            ... on DatoCmsPrivacyItemContent {
              id
              content
            }
            ... on DatoCmsPrivacyItemSecondLine {
              id
              privacyTitleSecondLine
            }
          }
        }
      }
    }
  `)

  return (
    <StyledOfferContentWrapper id="privacyItemsContainer">
      {privacyContentItemsData.allDatoCmsPrivacyPageContent.nodes.map(item => (
        <Element
          key={item.privacyPageContentTitle}
          name={slugify(item.privacyPageContentTitle, { lower: true })}
          id={slugify(item.privacyPageContentTitle, { lower: true })}
        >
          <StyledOfferConentItem>
            {item.privacyParagraphBlock.map(itemContent => {
              return (
                <StyledOfferTextWrapper key={itemContent.id}>
                  {itemContent.privacyTitleFirstLine && (
                    <StyledText
                      hasdeclaredfontsize="36px"
                      hasdeclaredfontcolor="var(--blue)"
                      hasdeclaredpadding="70px 0 15px 0"
                      hasdeclaredfontweight="bold"
                      as="h2"
                    >
                      {itemContent.privacyTitleFirstLine}
                    </StyledText>
                  )}
                  {itemContent.privacyTitleSecondLine && (
                    <StyledText
                      hasdeclaredfontsize="24px"
                      hasdeclaredfontcolor="var(--blue)"
                      hasdeclaredpadding="0 0 0 0"
                      hasdeclaredfontweight="bold"
                      as="h3"
                    >
                      {itemContent.privacyTitleSecondLine}
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
