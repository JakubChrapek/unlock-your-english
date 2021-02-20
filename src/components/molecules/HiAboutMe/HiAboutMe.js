import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { StyledHiAboutMeImage } from "../../atoms/HiAboutMe/StyledHiAboutMeImage"
import { StyledHiAboutMeSection } from "../../atoms/HiAboutMe/StyledHiAboutMeSection"
import { StyledHiAboutMeWrapper } from "../../atoms/HiAboutMe/StyledHiAboutMeWrapper"
import { StyledText } from "../../atoms/Text/StyledText"
import { StyledLeftBar } from "../../atoms/HiAboutMe/StyledLeftBar"
import { StyledRightBar } from "../../atoms/HiAboutMe/StyledRightBar"
import { StyledButton } from "../../atoms/Button/StyledButton"

const HiAboutMe = () => {
  const getCamilaData = useStaticQuery(graphql`
    query getHiCamilaData {
      datoCmsHiImCamila {
        hiImCamilaContent
        titleSecondLine
        titleFirstLine
        camilaPhoto {
          fluid {
            ...GatsbyDatoCmsFluid
          }
          alt
        }
      }
    }
  `)

  return (
    <StyledHiAboutMeSection>
      <StyledHiAboutMeWrapper>
        <StyledLeftBar>
          <StyledHiAboutMeImage
            fluid={getCamilaData.datoCmsHiImCamila.camilaPhoto.fluid}
            alt={getCamilaData.datoCmsHiImCamila.camilaPhoto.alt}
          ></StyledHiAboutMeImage>
        </StyledLeftBar>
        <StyledRightBar>
          <StyledText
            hasdeclaredfontsize="64px"
            hasdeclaredfontweight="bold"
            hasdeclaredfontcolor="var(--red)"
            hasdeclaredlineheight="1.35em"
            as="h2"
          >
            {getCamilaData.datoCmsHiImCamila.titleFirstLine}
          </StyledText>
          <StyledText
            hasdeclaredfontsize="48px"
            hasdeclaredfontweight="bold"
            hasdeclaredfontcolor="var(--blue)"
            hasdeclaredpadding="0 0 40px 0"
            as="h3"
          >
            {getCamilaData.datoCmsHiImCamila.titleSecondLine}
          </StyledText>
          <StyledText
            hasdeclaredfontsize="18px"
            hasdeclaredfontweight="medium"
            hasdeclaredfontcolor="var(--black)"
            hasdeclaredfontfamily="Raleway"
            hasdeclaredlineheight="1.55em"
            hasdeclaredpadding="0 0 40px 0"
          >
            {getCamilaData.datoCmsHiImCamila.hiImCamilaContent}
          </StyledText>
          <StyledButton
            hasdeclaredpadding="16px 70px"
            hasdeclaredbgcolor="var(--red)"
            hasdeclaredfontsize="20px"
            hasdeclaredfontcolor="var(--white)"
            hasdeclaredfontfamily="Manrope"
          >
            Więcej o mnie
          </StyledButton>
        </StyledRightBar>
      </StyledHiAboutMeWrapper>
    </StyledHiAboutMeSection>
  )
}

export default HiAboutMe
