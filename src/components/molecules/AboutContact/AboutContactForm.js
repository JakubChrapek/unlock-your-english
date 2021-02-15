import React from "react"
import { Formik, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { StyledAboutContactForm } from "./StyledAboutContactForm"
import { StyledCheckboxWrapper } from "../../molecules/SignUpHomeSection/StyledCheckboxWrapper"
import { StyledText } from "../../atoms/Text/StyledText"
import { GoCheck } from "react-icons/go"
import { StyledButton } from "../../atoms/Button/StyledButton"
import ReCAPTCHA from "react-google-recaptcha"
import { AnimateSharedLayout, AnimatePresence } from "framer-motion"

// require("dotenv").config({
//   path: ".env",
// })

const AboutContactForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log("poszlos")
      setSubmitting(false)
    }, 400)
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('Błędny adres email').required('Email wmagany'),
    name: Yup.string().min(3, "Imię za krótkie!").required('Imię wymagane'),
    message: Yup.string().min(10, "Wiadomość za krótka").required('Wiadomość wymagana')
  })
  const messageSend = () => alert("Wiadomość wysłana")
  return (
    <Formik
      initialValues={{ email: "", message: "", name: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
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
        <StyledAboutContactForm method="POST" action={messageSend} 
        data-netlify-recaptcha="true" name="Contact Form" data-netlify="true">
          <input type="hidden" name="form-name" value="Contact Form" />
          <Field
            type="text"
            name="name"
            placeholder="Imię"
          />
          <ErrorMessage name="name">
            {errorMsg => <StyledText
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            // transition={{ opacity: 2 }}
            hasdeclaredfontcolor="var(--red)"
            hasdeclaredpadding="8px 0 0 18px"
            as="p"
          >
            {errorMsg}
          </StyledText>}
          </ErrorMessage>
          
          <Field
            type="email"
            name="email"
            
            placeholder="Email"
          />

            <ErrorMessage name="email">
              {errorMsg => <StyledText
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // exit={{ opacity: 0 }}
              // transition={{ opacity: 2 }}
            hasdeclaredfontcolor="var(--red)"
            hasdeclaredpadding="8px 0 0 18px"
            as="p"
          >
            {errorMsg}
          </StyledText>}
          </ErrorMessage>

          <Field as="textarea"
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            rows="1"
            placeholder="Wiadomość"
          />
          <ErrorMessage name="message">
            {errorMsg => <StyledText
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            // transition={{ opacity: 2 }}
            hasdeclaredfontcolor="var(--red)"
            hasdeclaredpadding="8px 0 0 18px"
            as="p"
          >
            {errorMsg}
          </StyledText>}
          </ErrorMessage>
          <StyledCheckboxWrapper>
            <Field type="checkbox" id="accept-newsletter" />
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
          {/* <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} /> */}
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
