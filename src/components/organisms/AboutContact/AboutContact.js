import React from "react"

import AboutContactForm from "../../molecules/AboutContact/AboutContactForm"
import { StyledAboutContactSection } from "../../atoms/AboutContact/StyledAboutContactSection"
import { StyledAboutContactWrapper } from "../../atoms/AboutContact/StyledAboutContactWrapper"
import { StyledAboutContactLeftBar } from "../../molecules/AboutContact/StyledAboutContactLeftBar"
import { StyledAboutContactRightBar } from "../../atoms/AboutContact/StyledAboutContactRightBar"
import { StyledText } from "../../atoms/Text/StyledText"
import useWindowSize from "../../../utils/getWindowSize"
import styled from "styled-components"

const ContactText = styled(StyledText)`
  align-self: flex-start;
  @media (max-width: 767px) {
    align-self: center;
    text-align: center;
  }
  a {
    color: inherit;
    text-decoration-color: var(--red);
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
  }
`

const AboutContact = () => {
  const width = useWindowSize()
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
              🙂
            </span>{" "}
            Kamila
          </StyledText>
          <ContactText
            hasdeclaredfontsize="18px"
            hasdeclaredfontweight="medium"
            hasdeclaredfontcolor="var(--black)"
            hasdeclaredfontfamily="Raleway"
            hasdeclaredlineheight="1.78em"
            hasdeclaredmaxwidth="464px"
            hasdeclaredmargin="12px 0 0"
          >
            Zapraszam do kontaktu, {width < 1024 && <br />}
            <a href="tel:884889471">884 889 471</a>
          </ContactText>
        </StyledAboutContactLeftBar>
        <StyledAboutContactRightBar>
          <AboutContactForm />
        </StyledAboutContactRightBar>
      </StyledAboutContactWrapper>
    </StyledAboutContactSection>
  )
}

export default AboutContact
