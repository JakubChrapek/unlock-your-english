import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import slugify from "slugify"
import { Element } from "react-scroll"

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
                      hasDeclaredFontSize="36px"
                      hasDeclaredFontColor="var(--blue)"
                      hasDeclaredPadding="70px 0 15px 0"
                      hasDeclaredFontWeight="bold"
                      as="h2"
                    >
                      {itemContent.privacyTitleFirstLine}
                    </StyledText>
                  )}
                  {itemContent.privacyTitleSecondLine && (
                    <StyledText
                      hasDeclaredFontSize="24px"
                      hasDeclaredFontColor="var(--blue)"
                      hasDeclaredPadding="0 0 0 0"
                      hasDeclaredFontWeight="bold"
                      as="h3"
                    >
                      {itemContent.privacyTitleSecondLine}
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
