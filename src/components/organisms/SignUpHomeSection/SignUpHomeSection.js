import React from "react"

import { StyledSignUpSection } from "../../atoms/SignUpHomeSection/StyledSignUpSection"
import { StyledSignUpWrapper } from "../../atoms/SignUpHomeSection/StyledSignUpWrapper"
import { StyledSignUpForm } from "../../molecules/SignUpHomeSection/StyledSignUpForm"

import { StyledText } from "../../atoms/Text/StyledText"

const SignUpHomeSection = () => {
  return (
    <StyledSignUpSection>
      <StyledSignUpWrapper>
        <StyledText
          hasdeclaredfontsize="48px"
          hasdeclaredfontweight="bold"
          hasdeclaredlineheight="1.85em"
          hasdeclaredtextalign="center"
          hasdeclaredfontcolor="var(--white)"
        >
          Zapisz się na próbną lekcję
        </StyledText>
        <StyledText
          hasdeclaredfontsize="18px"
          hasdeclaredfontweight="medium"
          hasdeclaredlineheight="1.32em"
          hasdeclaredfontfamily="Raleway"
          hasdeclaredtextalign="center"
          hasdeclaredpadding="0 0 42px 0"
          hasdeclaredfontcolor="var(--white)"
        >
          Zobacz jak prowadzę lekcję, na co zwracam uwagę, co tydzien organizuję
          pokazowe lekcje dla zebranych chętnych, zostaw swój email, a wyślę Ci
          termin najbliższej lekcji!
        </StyledText>
        <StyledSignUpForm>
          <input type="text" />
          <div></div>
        </StyledSignUpForm>
      </StyledSignUpWrapper>
    </StyledSignUpSection>
  )
}

export default SignUpHomeSection
