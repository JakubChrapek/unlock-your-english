import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

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
          hasdeclaredfontweight="bold"
          hasdeclaredfontsize="72px"
          hasdeclaredfontcolor="var(--white)"
          hasdeclaredpadding="0 0 27px 0"
          as="h1"
        >
          Unlock Your English
        </StyledText>
        <StyledText
          hasdeclaredmaxwidth="726px"
          hasdeclaredtextalign="center"
          hasdeclaredfontweight="medium"
          hasdeclaredfontsize="20px"
          hasdeclaredfontcolor="var(--white)"
          hasdeclaredpadding="0 0 44px 0"
          hasdeclaredfontfamily="Raleway"
          hasdeclaredlineheight="1.32em"
          hasdeclaredfontweight="normal"
          as="h2"
        >
          Mobilna pracownia językowa „Unlock Your English” to całoroczna
          działalność edukacyjna, zajmującą się przede wszystkim nauką języka
          angielskiego
        </StyledText>
        <StyledButton
          hasdeclaredpadding="16px 42px"
          hasdeclaredfontcolor="var(--white)"
          hasdeclaredbgcolor="var(--red)"
          hasdeclaredfontfamily="Manrope"
        >
          Unlock your english
        </StyledButton>
      </StyledHeroTextWrapper>
      <StyledFullPageResponsieImage>
        <Img fluid={data.datoCmsPageHome.heroimage.fluid} alt="Hero Image" />
      </StyledFullPageResponsieImage>
    </StyledHomeHeroSection>
  )
}

export default HomeHeroSection
