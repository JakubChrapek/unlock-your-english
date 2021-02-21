import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { StyledHowItAllStartedSection } from "../../molecules/HowItAllStarted/StyledHowItAllStartedSection"
import { StyledHowItAllStartedWrapper } from "../../atoms/HowItAllStarted/StyledHowItAllStartedWrapper"
import { StyledMyOfferSpiral } from "../../molecules/MyOffer/StyledMyOfferSpiral"
import { StyledText } from "../../atoms/Text/StyledText"
import aboutSpiral from "../../../images/aboutspiral.svg"
import { StyledPrivatelyImage } from "../../atoms/HowItAllStarted/StyledPrivatelyImage"
import { StyledPrivatelyImageWrapper } from "../../atoms/HowItAllStarted/StyledPrivatelyImageWrapper"
import { StyledPrivatelyWrapper } from "../../molecules/HowItAllStarted/StyledPrivatelyWrapper"
import { StyledPrivatelyTextWrapper } from "../../molecules/HowItAllStarted/StyledPrivatelyTextWrapper"
import { StyledHowItAllStartedTopBar } from "../../molecules/HowItAllStarted/StyledHowItAllStartedTopBar"
import { StyledHowItAllStartedBottomBar } from "../../molecules/HowItAllStarted/StyledHowItAllStartedBottomBar"

const HowItAllStarted = () => {
  const howItAllStartedData = useStaticQuery(graphql`
    query howItAllStartedDataQuery {
      datoCmsAboutMeContent {
        privately
        privatelyImage {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
      datoCmsHowitallstartedparagraph {
        paragraph1
        paragraph2
        paragraph3
      }
      allDatoCmsOwnlanguageschool {
        nodes {
          ownlanguageschoolparagraph
        }
      }
    }
  `)

  return (
    <StyledHowItAllStartedSection>
      <StyledMyOfferSpiral>
        <img src={aboutSpiral} alt="spiral" />
      </StyledMyOfferSpiral>
      <div>
        <StyledHowItAllStartedWrapper>
          <StyledHowItAllStartedTopBar>
            <StyledText
              hasdeclaredfontsize="64px"
              hasdeclaredfontcolor="var(--blue)"
              hasdeclaredfontweight="bold"
              hasdeclaredpadding="0 0 54px 0"
              as="h2"
            >
              Jak to się zaczęło?
            </StyledText>

            <StyledText
              hasdeclaredfontsize="18px"
              hasdeclaredfontfamily="Raleway"
              hasdeclaredfontweight="medium"
              hasdeclaredlineheight="1.32em"
              hasdeclaredpadding="0 0 34px 0"
            >
              {howItAllStartedData.datoCmsHowitallstartedparagraph.paragraph1}
            </StyledText>
            <StyledText
              hasdeclaredfontsize="18px"
              hasdeclaredfontfamily="Raleway"
              hasdeclaredfontweight="medium"
              hasdeclaredlineheight="1.32em"
              hasdeclaredpadding="0 0 34px 0"
            >
              {howItAllStartedData.datoCmsHowitallstartedparagraph.paragraph2}
            </StyledText>
            <StyledText
              hasdeclaredfontsize="18px"
              hasdeclaredfontfamily="Raleway"
              hasdeclaredfontweight="medium"
              hasdeclaredlineheight="1.32em"
              hasdeclaredpadding="0 0 34px 0"
            >
              {howItAllStartedData.datoCmsHowitallstartedparagraph.paragraph3}
            </StyledText>
          </StyledHowItAllStartedTopBar>
          <StyledHowItAllStartedBottomBar>
            <StyledText
              hasdeclaredfontsize="48px"
              hasdeclaredfontcolor="var(--red)"
              hasdeclaredtextalign="right"
              hasdeclaredfontweight="bold"
              hasdeclaredpadding="34px 0 54px 0"
              as="h3"
            >
              A może własna szkoła językowa?
            </StyledText>
            {howItAllStartedData.allDatoCmsOwnlanguageschool.nodes.map(text => (
              <StyledText
                hasdeclaredfontsize="18px"
                hasdeclaredfontfamily="Raleway"
                hasdeclaredfontweight="medium"
                hasdeclaredlineheight="1.32em"
                hasdeclaredpadding="0 0 34px 0"
                // dangerouslySetInnerHTML={{
                //   __html: text.ownlanguageschoolparagraph,
                // }}
              >
                {text.ownlanguageschoolparagraph}
              </StyledText>
            ))}
          </StyledHowItAllStartedBottomBar>
        </StyledHowItAllStartedWrapper>
      </div>
      <div>
        <StyledPrivatelyWrapper>
          <StyledPrivatelyTextWrapper>
            <StyledText
              hasdeclaredfontsize="64px"
              hasdeclaredfontcolor="var(--blue)"
              hasdeclaredfontweight="bold"
              hasdeclaredpadding="0 0 88px 0"
              as="h3"
            >
              A prywatnie...
            </StyledText>
            <StyledText
              hasdeclaredfontsize="18px"
              hasdeclaredfontfamily="Raleway"
              hasdeclaredfontweight="medium"
              hasdeclaredlineheight="1.32em"
              hasdeclaredmaxwidth="447px"
              // dangerouslySetInnerHTML={{
              //   __html: howItAllStartedData.datoCmsAboutMeContent.privately,
              // }}
            >
              {howItAllStartedData.datoCmsAboutMeContent.privately}
            </StyledText>
          </StyledPrivatelyTextWrapper>
          <StyledPrivatelyImageWrapper>
            <StyledPrivatelyImage
              fluid={
                howItAllStartedData.datoCmsAboutMeContent.privatelyImage.fluid
              }
              alt={howItAllStartedData.datoCmsAboutMeContent.privatelyImage.alt}
            />
          </StyledPrivatelyImageWrapper>
          <StyledText
            hasdeclaredfontsize="64px"
            hasdeclaredfontcolor="var(--blue)"
            hasdeclaredfontweight="bold"
            hasdeclaredpadding="0 0 88px 0"
            as="h3"
          >
            A prywatnie...
          </StyledText>
        </StyledPrivatelyWrapper>
      </div>
    </StyledHowItAllStartedSection>
  )
}

export default HowItAllStarted
