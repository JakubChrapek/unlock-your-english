import React from "react"
import { Formik } from "formik"

import { StyledAboutContactForm } from "./StyledAboutContactForm"
import { StyledCheckboxWrapper } from "../../molecules/SignUpHomeSection/StyledCheckboxWrapper"
import { StyledText } from "../../atoms/Text/StyledText"
import { GoCheck } from "react-icons/go"
import { StyledButton } from "../../atoms/Button/StyledButton"

import { AnimateSharedLayout, AnimatePresence } from "framer-motion"

const AboutContactForm = () => {
  return (
    <Formik
      initialValues={{ email: "", message: "", name: "" }}
      validate={values => {
        const errors = {}
        if (!values.email) {
          errors.email = "Wymagany email"
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Błędny adres email"
        }

        if(!values.message) errors.message = "Wiadomość wymagana"
        else if(values.message.length <= 10) errors.message = "Wiadomość musi posiadać minimum 10 znaków"
        
        if(!values.name ) errors.name = "Imię wymagane"
        else if (values.name.length < 3) errors.name = "Musi posiadać z minimum 3 znaki"
        
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
        <StyledAboutContactForm onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            placeholder="Imię"
          />
          
          <StyledText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: 2 }}
            hasdeclaredfontcolor="var(--red)"
            hasdeclaredpadding="8px 0 0 18px"
            as="p"
          >
            {errors.name && touched.name && errors.name}
          </StyledText>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Email"
          />

          <StyledText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: 2 }}
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
          <StyledText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: 2 }}
            hasdeclaredfontcolor="var(--red)"
            hasdeclaredpadding="8px 0 0 18px"
            as="p"
          >
            {errors.message && touched.message && errors.message}
          </StyledText>
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
