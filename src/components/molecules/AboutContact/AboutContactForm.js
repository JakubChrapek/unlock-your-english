import React from "react"
import { Formik } from "formik"

import { StyledAboutContactForm } from "./StyledAboutContactForm"
import { StyledCheckboxWrapper } from "../../molecules/SignUpHomeSection/StyledCheckboxWrapper"
import { StyledText } from "../../atoms/Text/StyledText"
import { GoCheck } from "react-icons/go"
import { StyledButton } from "../../atoms/Button/StyledButton"

const AboutContactForm = () => {
  return (
    <Formik
      initialValues={{ email: "", message: "", name: "" }}
      validate={values => {
        const errors = {}
        if (!values.email) {
          errors.email = "Email wymagany"
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Błędny adres email"
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
        /* and other goodies */
      }) => (
        <StyledAboutContactForm onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            placeholder="Imię"
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Email"
          />
          <StyledText
            initial={{ opacity: 0, x: "-10px", height: "0" }}
            animate={{ opacity: 1, x: 0, height: "100%" }}
            exit={{ opacity: 0, x: "-10px", height: "0" }}
            hasdeclaredfontcolor="var(--red)"
            hasdeclaredpadding="8px 0 0 18px"
            as="p"
          >
            {errors.email && touched.email && errors.email}
          </StyledText>

          <textarea
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            rows="1"
            placeholder="Wiadomość"
          ></textarea>
          <StyledCheckboxWrapper>
            <input type="checkbox" id="accept-newsletter" />
            <label for="accept-newsletter">
              <StyledText
                hasdeclaredfontsize="13px"
                hasdeclaredfontcolor="var(--black)"
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
          <StyledButton
            type="submit"
            disabled={isSubmitting}
            hasdeclaredbgcolor="var(--red)"
            hasdeclaredfontcolor="var(--white)"
            hasdeclaredfontfamily="Manrope"
            hasdeclaredfontsize="20px"
          >
            Wyślij
          </StyledButton>
        </StyledAboutContactForm>
      )}
    </Formik>
  )
}

export default AboutContactForm
