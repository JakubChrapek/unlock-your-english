import React, { useState } from "react"
import { Formik, Field, ErrorMessage } from "formik"
import { useLocation } from "@reach/router"
import * as Yup from "yup"
import { GoCheck } from "react-icons/go"

import { StyledAboutContactForm } from "./StyledAboutContactForm"
import { StyledCheckboxWrapper } from "../../molecules/SignUpHomeSection/StyledCheckboxWrapper"
import { StyledText } from "../../atoms/Text/StyledText"
import { StyledButton } from "../../atoms/Button/StyledButton"
import { AnimatePresence } from "framer-motion"
import { StyledAboutContactFormErrorBox } from "../../atoms/AboutContact/StyledAboutContactFormErrorBox"
import { StyledSendMessageBox } from "../../atoms/AboutContact/StyledSendMessageBox"
import { StyledLink } from "../../atoms/Link/StyledLink"

const AboutContactForm = () => {
  let pathname = useLocation().pathname
  const [message, setMessage] = useState("")

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = (values, e) => {
    fetch("/", {
      url: pathname,
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "ContactForm",
        ...values,
      }),
    })
      .then(res => {
        setMessage("Wiadomość została wysłana")
        e.resetForm({
          values: {
            email: "",
            name: "",
            message: "",
            privacy: false,
          },
        })
      })
      .catch(err => {
        setMessage("Coś poszło nie tak. Spróbuj jeszcze raz.")
      })
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Błędny adres email").required("Email wmagany"),
    name: Yup.string().min(3, "Imię za krótkie").required("Imię wymagane"),
    message: Yup.string()
      .min(5, "Wiadomość za krótka")
      .required("Wiadomość wymagana"),
    privacy: Yup.boolean().oneOf([true], "Wymagana akceptacja"),
  })

  return (
    <Formik
      initialValues={{ email: "", message: "", name: "", privacy: false }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur }) => (
        <>
          <StyledAboutContactForm
            method="POST"
            name="ContactForm"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="ContactForm" />
            <input type="hidden" name="bot-field" />

            <StyledAboutContactFormErrorBox layout>
              <Field type="text" name="name" placeholder="Imię" />
              <ErrorMessage name="name">
                {errorMsg => (
                  <StyledText
                    hasDeclaredFontColor="var(--red)"
                    hasDeclaredPadding="8px 0 0 0"
                    hasDeclaredFontFamily="Raleway"
                    as="p"
                  >
                    {errorMsg}
                  </StyledText>
                )}
              </ErrorMessage>
            </StyledAboutContactFormErrorBox>

            <StyledAboutContactFormErrorBox layout>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email">
                {errorMsg => (
                  <StyledText
                    hasDeclaredFontColor="var(--red)"
                    hasDeclaredPadding="8px 0 0 0"
                    hasDeclaredFontFamily="Raleway"
                    as="p"
                  >
                    {errorMsg}
                  </StyledText>
                )}
              </ErrorMessage>
            </StyledAboutContactFormErrorBox>

            <StyledAboutContactFormErrorBox layout>
              <Field
                as="textarea"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                rows="1"
                placeholder="Wiadomość"
              />
              <ErrorMessage name="message">
                {errorMsg => (
                  <StyledText
                    hasDeclaredFontColor="var(--red)"
                    hasDeclaredPadding="8px 0 0 0"
                    hasDeclaredFontFamily="Raleway"
                    as="p"
                  >
                    {errorMsg}
                  </StyledText>
                )}
              </ErrorMessage>
            </StyledAboutContactFormErrorBox>
            <StyledCheckboxWrapper layout>
              <Field type="checkbox" name="privacy" id="accept-newsletter" />
              <label htmlFor="accept-newsletter" name="privacy">
                <StyledText
                  hasDeclaredFontSize="13px"
                  hasDeclaredFontColor="var(--black)"
                  hasDeclaredFontFamily="Raleway"
                  hasDeclaredFontWeight="medium"
                  hasdeclaredlineheight="1.32em"
                  hasDeclaredPadding="5px 0 3px 0"
                  hasdeclaredfontalign="center"
                  as="p"
                >
                  Zgadzając się na przetwarzanie Twoich danych osobowych,
                  akceptujesz{" "}
                  <StyledLink
                    hasDeclaredFontSize="13px"
                    to="/polityka-prywatnosci"
                    hasdeclaredbgcolor="var(--black)"
                    hasdeclaredbgbottomposition="-6px"
                  >
                    politykę prywatności
                  </StyledLink>
                  .
                </StyledText>
                <GoCheck size="24px" />
              </label>
            </StyledCheckboxWrapper>
            <StyledAboutContactFormErrorBox layout>
              <ErrorMessage name="privacy">
                {errorMsg => (
                  <StyledText
                    hasDeclaredFontFamily="Raleway"
                    hasDeclaredFontSize="16px"
                    hasDeclaredPadding="18px 0 0 0"
                    hasDeclaredFontColor="var(--red)"
                  >
                    {errorMsg}
                  </StyledText>
                )}
              </ErrorMessage>
            </StyledAboutContactFormErrorBox>
            <StyledButton
              type="submit"
              hasdeclaredbgcolor="var(--red)"
              hasDeclaredFontColor="var(--white)"
              hasDeclaredFontFamily="Manrope"
              hasDeclaredFontSize="20px"
              layout
            >
              Wyślij
            </StyledButton>
            <AnimatePresence initial={false} transition={{ opacity: 0.8 }}>
              <StyledSendMessageBox>
                <StyledText
                  hasDeclaredFontColor="var(--red)"
                  hasDeclaredPadding="24px 0 0 0"
                  hasDeclaredFontFamily="Raleway"
                  as="p"
                  key={message}
                  initial={{ opacity: 0, x: "-50px" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {message}
                </StyledText>
              </StyledSendMessageBox>
            </AnimatePresence>
          </StyledAboutContactForm>
        </>
      )}
    </Formik>
  )
}

export default AboutContactForm
