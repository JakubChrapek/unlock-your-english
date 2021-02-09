import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
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
          />
        </StyledLeftBar>
        <StyledRightBar>
          <StyledText
            hasdeclaredfontsize="64px"
            hasdeclaredfontweight="bold"
            hasdeclaredfontcolor="var(--red)"
            hasdeclaredlineheight="1.35em"
          >
            Hi, jestem Kamila
          </StyledText>
          <StyledText
            hasdeclaredfontsize="48px"
            hasdeclaredfontweight="bold"
            hasdeclaredfontcolor="var(--blue)"
            hasdeclaredpadding="0 0 40px 0"
          >
            poznaj mnie lepiej
          </StyledText>
          <StyledText
            hasdeclaredfontsize="18px"
            hasdeclaredfontweight="medium"
            hasdeclaredfontcolor="var(--black)"
            hasdeclaredfontfamily="Raleway"
            hasdeclaredlineheight="1.55em"
            hasdeclaredpadding="0 0 40px 0"
          >
            Jestem miłośniczką języka angielskiego oraz założycielem mobilnej
            pracowni językowej „Unlock Your English”. Obecnie przygotowuję się
            do uzyskania uprawnień tłumacza przysięgłego. Chętnie pokażę Ci, jak
            „odblokować” swój angielski i przekonam Cię, że naprawdę umiesz ten
            język i że go rozumiesz!
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
