import React from "react"
import { Formik } from "formik"
import { StyledSignUpSection } from "../../atoms/SignUpHomeSection/StyledSignUpSection"
import { StyledSignUpWrapper } from "../../atoms/SignUpHomeSection/StyledSignUpWrapper"
import { StyledSignUpForm } from "../../molecules/SignUpHomeSection/StyledSignUpForm"
import { StyledCheckboxWrapper } from "../../molecules/SignUpHomeSection/StyledCheckboxWrapper"
import { StyledText } from "../../atoms/Text/StyledText"
import { GoCheck } from "react-icons/go"
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
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="A tu wpisz swój email"
              />
              <StyledCheckboxWrapper>
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
                  >
                    zgoda na przetwarzanie twoich danych osobowych
                  </StyledText>
                  <GoCheck size="24px" />
                </label>
              </StyledCheckboxWrapper>
              {errors.email && touched.email && errors.email}
              {/* <button type="submit" disabled={isSubmitting}>
                Submit
              </button> */}
            </StyledSignUpForm>
          )}
        </Formik>
      </StyledSignUpWrapper>
    </StyledSignUpSection>
  )
}

export default SignUpHomeSection
