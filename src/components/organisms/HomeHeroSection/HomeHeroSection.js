import React from "react"
import { StyledFullPageResponsieImage } from "../../atoms/HomeHeroSection/StyledFullPageImage"
import { StyledHomeHeroSection } from "../../atoms/HomeHeroSection/StyledHomeHeroSection"
import { StyledText } from "../../atoms/Text/StyledText"
import { StyledHeroTextWrapper } from "../../atoms/HomeHeroSection/StyledHeroTextWrapper"
import { StyledButton } from "../../atoms/Button/StyledButton"

const HomeHeroSection = () => {
  return (
    <StyledHomeHeroSection>
      <StyledHeroTextWrapper>
        <StyledText
          hasdeclaredtextalign="center"
          hasdeclaredfontweight="bold"
          hasdeclaredfontsize="72px"
          hasdeclaredfontcolor="var(--white)"
        >
          Unlock Your English
        </StyledText>
        <StyledText
          hasdeclaredmaxwidth="726px"
          hasdeclaredtextalign="center"
          hasdeclaredfontweight="bold"
          hasdeclaredfontsize="20px"
          hasdeclaredfontcolor="var(--white)"
        >
          Mobilna pracownia językowa „Unlock Your English” to całoroczna
          działalność edukacyjna, zajmującą się przede wszystkim nauką języka
          angielskiego
        </StyledText>
        <StyledButton>Unlock your english</StyledButton>
      </StyledHeroTextWrapper>
      <StyledFullPageResponsieImage src="" alt="Hero Image" />
    </StyledHomeHeroSection>
  )
}

export default HomeHeroSection
