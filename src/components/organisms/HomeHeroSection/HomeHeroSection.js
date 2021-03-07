import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Link } from "react-scroll"

import { StyledFullPageResponsieImage } from "../../molecules/HomeHeroSection/StyledFullPageImage"
import { StyledHomeHeroSection } from "../../atoms/HomeHeroSection/StyledHomeHeroSection"
import { StyledText } from "../../atoms/Text/StyledText"
import { StyledHeroTextWrapper } from "../../molecules/HomeHeroSection/StyledHeroTextWrapper"
import { StyledButton } from "../../atoms/Button/StyledButton"

const HomeHeroSection = () => {
  const data = useStaticQuery(graphql`
    query heroImage {
      datoCmsPageHome {
        heroimage {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  `)
  return (
    <StyledHomeHeroSection>
      <StyledHeroTextWrapper>
        <StyledText
          hasdeclaredtextalign="center"
          hasDeclaredFontWeight="bold"
          hasDeclaredFontSize="72px"
          hasDeclaredFontColor="var(--white)"
          hasDeclaredPadding="0 0 27px 0"
          as="h1"
        >
          Unlock Your English
        </StyledText>
        <StyledText
          hasdeclaredmaxwidth="726px"
          hasdeclaredtextalign="center"
          hasDeclaredFontSize="20px"
          hasDeclaredFontColor="var(--white)"
          hasDeclaredPadding="0 0 44px 0"
          hasDeclaredFontFamily="Raleway"
          hasdeclaredlineheight="1.6em"
          hasDeclaredFontWeight="normal"
          as="h2"
        >
          Mobilna pracownia językowa „Unlock Your English” to całoroczna
          działalność edukacyjna, zajmującą się przede wszystkim nauką języka
          angielskiego
        </StyledText>
        <Link to="unlock-your-english" smooth={true} duration={500}>
          <StyledButton
            hasDeclaredPadding="18px 62px"
            hasDeclaredFontColor="var(--white)"
            hasdeclaredbgcolor="var(--red)"
            hasDeclaredFontFamily="Manrope"
            hasDeclaredFontSize="20px"
            hasdeclaredtexttransform="uppercase"
          >
            Unlock your english
          </StyledButton>
        </Link>
      </StyledHeroTextWrapper>
      <StyledFullPageResponsieImage>
        <Img fluid={data.datoCmsPageHome.heroimage.fluid} alt="Hero Image" />
      </StyledFullPageResponsieImage>
    </StyledHomeHeroSection>
  )
}

export default HomeHeroSection
