import React, { useState } from "react"
import { Formik } from "formik"
import { StyledSignUpSection } from "../../atoms/SignUpHomeSection/StyledSignUpSection"
import { StyledSignUpWrapper } from "../../atoms/SignUpHomeSection/StyledSignUpWrapper"
import { StyledSignUpForm } from "../../molecules/SignUpHomeSection/StyledSignUpForm"
import { StyledCheckboxWrapper } from "../../molecules/SignUpHomeSection/StyledCheckboxWrapper"
import { StyledText } from "../../atoms/Text/StyledText"
import { GoCheck } from "react-icons/go"
import { StyledButton } from "../../atoms/Button/StyledButton"
import { StyledError } from "../../atoms/Error/StyledError"
import { AnimatePresence } from "framer-motion"
import { StyledInputWrapper } from "../../atoms/SignUpHomeSection/StyledInputWrapper"
import { StyledSavedCorrectly } from "../../atoms/SignUpHomeSection/StyledSavedCorrectly"

const SignUpHomeSection = () => {
  const [hideBox, setHideBox] = useState(true)

  return (
    <StyledSignUpSection>
      <StyledSignUpWrapper>
        <StyledText
          hasdeclaredfontsize="48px"
          hasdeclaredfontweight="bold"
          hasdeclaredlineheight="1.85em"
          hasdeclaredtextalign="center"
          hasdeclaredfontcolor="var(--white)"
          as="h2"
        >
          Zapisz się na próbną lekcję
        </StyledText>
        <StyledText
          hasdeclaredfontsize="18px"
          hasdeclaredfontweight="medium"
          hasdeclaredlineheight="1.32em"
          hasdeclaredfontfamily="Raleway"
          hasdeclaredtextalign="center"
          hasdeclaredpadding="42px 0 42px 0"
          hasdeclaredfontcolor="var(--white)"
          as="p"
        >
          Zobacz jak prowadzę lekcję, na co zwracam uwagę, co tydzien organizuję
          pokazowe lekcje dla zebranych chętnych, zostaw swój email, a wyślę Ci
          termin najbliższej lekcji!
        </StyledText>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={values => {
            const errors = {}
            if (!values.email) {
              errors.email = "Required"
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address"
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <StyledSignUpForm onSubmit={handleSubmit}>
              <StyledInputWrapper hidecheckbox={hideBox}>
                <div>
                  <AnimatePresence initial={false}>
                    <StyledError
                      key={errors.email}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <StyledText
                        hasdeclaredfontfamily="Raleway"
                        hasdeclaredfontsize="18px"
                        hasdeclaredpadding="7px 45px"
                        hasdeclaredfontcolor="var(--red)"
                      >
                        {errors.email && touched.email && errors.email}
                      </StyledText>
                    </StyledError>
                  </AnimatePresence>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="A tu wpisz swój email"
                    hideInput={true}
                  />
                  <StyledSavedCorrectly active={hideBox}>
                    <StyledText
                      hasdeclaredfontfamily="Raleway"
                      hasdeclaredfontsize="18px"
                      hasdeclaredfontcolor="var(--white)"
                    >
                      Gratulacje zapisałeś się poprawnie!
                    </StyledText>
                  </StyledSavedCorrectly>
                </div>
                <StyledButton
                  hasdeclaredbgcolor="var(--gray)"
                  hasdeclaredfontcolor="var(--white)"
                  hasdeclaredfontfamily="Raleway"
                  hasdeclaredfontsize="18px"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Zapisz
                </StyledButton>
                <StyledCheckboxWrapper hidecheckbox={hideBox}>
                  <input type="checkbox" id="accept-newsletter" />
                  <label for="accept-newsletter">
                    <StyledText
                      hasdeclaredfontsize="13px"
                      hasdeclaredfontcolor="var(--white)"
                      hasdeclaredfontfamily="Raleway"
                      hasdeclaredfontweight="medium"
                      hasdeclaredlineheight="1.32em"
                      hasdeclaredpadding="5px 0 3px 0"
                      hasdeclaredfontalign="center"
                      as="p"
                    >
                      zgoda na przetwarzanie twoich danych osobowych
                    </StyledText>
                    <GoCheck size="24px" />
                  </label>
                </StyledCheckboxWrapper>
              </StyledInputWrapper>
            </StyledSignUpForm>
          )}
        </Formik>
      </StyledSignUpWrapper>
    </StyledSignUpSection>
  )
}

export default SignUpHomeSection
