import React from "react"

import AboutContactForm from "../../molecules/AboutContact/AboutContactForm"
import { StyledAboutContactSection } from "../../atoms/AboutContact/StyledAboutContactSection"
import { StyledAboutContactWrapper } from "../../atoms/AboutContact/StyledAboutContactWrapper"
import { StyledAboutContactLeftBar } from "../../molecules/AboutContact/StyledAboutContactLeftBar"
import { StyledAboutContactRightBar } from "../../atoms/AboutContact/StyledAboutContactRightBar"
import { StyledText } from "../../atoms/Text/StyledText"

const AboutContact = () => {
  return (
    <StyledAboutContactSection>
      <StyledAboutContactWrapper>
        <StyledAboutContactLeftBar>
          <StyledText
            hasdeclaredfontsize="48px"
            hasdeclaredfontweight="bold"
            hasdeclaredfontcolor="var(--black)"
            hasdeclaredpadding="0 0 34px 0"
            as="h3"
          >
            Pogadajmy!
          </StyledText>
          <StyledText
            hasdeclaredfontsize="18px"
            hasdeclaredfontweight="medium"
            hasdeclaredfontcolor="var(--black)"
            hasdeclaredfontfamily="Raleway"
            hasdeclaredlineheight="1.78em"
            hasdeclaredmaxwidth="464px"
          >
            Jeśli jeszcze nie czujesz się przekonany, nie przejmuj się. Napisz
            lub zadzwoń, a myślę że wtedy twoje wszystkie wątpliwości znikną{" "}
            <span role="img" aria-label="smiling emoji">
              🙂.
            </span>{" "}
            Kamila
          </StyledText>
        </StyledAboutContactLeftBar>
        <StyledAboutContactRightBar>
          <AboutContactForm />
        </StyledAboutContactRightBar>
      </StyledAboutContactWrapper>
    </StyledAboutContactSection>
  )
}

export default AboutContact
