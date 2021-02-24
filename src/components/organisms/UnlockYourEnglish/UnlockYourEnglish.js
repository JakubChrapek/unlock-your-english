import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Element } from "react-scroll"

import { StyledEnglishImage } from "../../atoms/UnlockYourEnglish/StyledEnglishImage"
import { StyledLeftBar } from "../../molecules/UnlockYourEnglish/StyledLeftBar"
import { StyledUnlockYourEnglishSection } from "../../atoms/UnlockYourEnglish/StyledUnlockYourEnglishSection"
import { StyledUnlockYourEnglishWrapper } from "../../atoms/UnlockYourEnglish/StyledUnlockYourEnglishWrapper"
import { StyledRightBar } from "../../molecules/UnlockYourEnglish/StyledRightBar"
import { StyledText } from "../../atoms/Text/StyledText"
import { StyledSpiral } from "../../molecules/UnlockYourEnglish/StyledSpiral"
import { StyledLeftBarImageWrapper } from "../../atoms/UnlockYourEnglish/StyledLeftBarImageWrapper"
import spiral from "../../../images/spiral.svg"

const UnlockYourEnglish = () => {
  const unlockImagesQuery = useStaticQuery(graphql`
    query unlockImages {
      datoCmsUnlockYourImage {
        bus {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        londonEye {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        statueOfLiberty {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  `)
  const image = unlockImagesQuery.datoCmsUnlockYourImage
  return (
    <Element name="unlock-your-english" key="unlock-your-english">
      <StyledUnlockYourEnglishSection>
        <StyledSpiral>
          <img src={spiral} alt="spiral" />
        </StyledSpiral>
        <StyledUnlockYourEnglishWrapper>
          <StyledLeftBar>
            <StyledLeftBarImageWrapper
              hasdeclaredwidth="313px"
              hasdeclaredheight="371px"
            >
              <StyledEnglishImage fluid={image.londonEye.fluid} />
            </StyledLeftBarImageWrapper>
            <StyledLeftBarImageWrapper
              hasdeclaredwidth="241px"
              hasdeclaredheight="293px"
              hasdeclaredtransform="translate(-40px, 66px)"
            >
              <StyledEnglishImage fluid={image.statueOfLiberty.fluid} />
            </StyledLeftBarImageWrapper>
            <StyledLeftBarImageWrapper
              hasdeclaredwidth="248px"
              hasdeclaredheight="305px"
              hasdeclaredtransform="translate(-19px, -120px)"
            >
              <StyledEnglishImage fluid={image.bus.fluid} />
            </StyledLeftBarImageWrapper>
          </StyledLeftBar>
          <StyledRightBar>
            <StyledText
              hasdeclaredfontsize="48px"
              hasdeclaredfontcolor="var(--blue)"
              hasdeclaredfontweight="bold"
              hasdeclaredpadding="0 0 17px 0"
              as="h2"
            >
              Unlock Your English!
            </StyledText>
            <StyledText
              hasdeclaredfontsize="18px"
              hasdeclaredfontcolor="var(--black)"
              hasdeclaredfontweight="medium"
              hasdeclaredfontfamily="Raleway"
              hasdeclaredlineheight="1.32em"
              as="h3"
            >
              Mobilna pracownia językowa „Unlock Your English” to całoroczna
              działalność edukacyjna, zajmującą się przede wszystkim nauką
              języka angielskiego w każdej kategorii wiekowej (dzieci, młodzież,
              dorośli, seniorzy), na każdym etapie nauki. Bardzo często tempo
              życia oraz napięty harmonogram w ciągu dnia sprawiają, iż coraz
              więcej osób zniechęca się do nauki języka obcego. Rozwiązaniem
              tego problemu jest mobilna pracownia językowa, której sposób
              nauczania zdobywa coraz więcej chętnych.
            </StyledText>
          </StyledRightBar>
        </StyledUnlockYourEnglishWrapper>
      </StyledUnlockYourEnglishSection>
    </Element>
  )
}

export default UnlockYourEnglish
