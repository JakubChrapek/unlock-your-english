import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { StyledHiAboutMeImage } from "../../atoms/HiAboutMe/StyledHiAboutMeImage"
import { StyledHiAboutMeSection } from "../../atoms/HiAboutMe/StyledHiAboutMeSection"
import { StyledHiAboutMeWrapper } from "../../atoms/HiAboutMe/StyledHiAboutMeWrapper"
import { StyledText } from "../../atoms/Text/StyledText"
import { StyledLeftBar } from "../../atoms/HiAboutMe/StyledLeftBar"
import { StyledRightBar } from "../../molecules/HiAboutMe/StyledRightBar"
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
            hasDeclaredFontSize="64px"
            hasDeclaredFontWeight="bold"
            hasDeclaredFontColor="var(--red)"
            hasdeclaredlineheight="1.35em"
            as="h2"
          >
            {getCamilaData.datoCmsHiImCamila.titleFirstLine}
          </StyledText>
          <StyledText
            hasDeclaredFontSize="48px"
            hasDeclaredFontWeight="bold"
            hasDeclaredFontColor="var(--blue)"
            hasDeclaredPadding="0 0 40px 0"
            as="h3"
          >
            {getCamilaData.datoCmsHiImCamila.titleSecondLine}
          </StyledText>
          <StyledText
            hasDeclaredFontSize="18px"
            hasDeclaredFontWeight="medium"
            hasDeclaredFontColor="var(--black)"
            hasDeclaredFontFamily="Raleway"
            hasdeclaredlineheight="1.85em"
            hasDeclaredPadding="0 0 40px 0"
            hasdeclaredtextalign="justify"
          >
            {getCamilaData.datoCmsHiImCamila.hiImCamilaContent}
          </StyledText>
          <Link to="/o-mnie">
            <StyledButton
              hasDeclaredPadding="18px 61px"
              hasdeclaredbgcolor="var(--red)"
              hasDeclaredFontSize="20px"
              hasDeclaredFontColor="var(--white)"
              hasDeclaredFontFamily="Manrope"
            >
              Więcej o mnie
            </StyledButton>
          </Link>
        </StyledRightBar>
      </StyledHiAboutMeWrapper>
    </StyledHiAboutMeSection>
  )
}

export default HiAboutMe
