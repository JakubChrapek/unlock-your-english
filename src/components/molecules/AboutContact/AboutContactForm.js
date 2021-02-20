import React, { useState, useEffect } from "react"
import { Formik, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { StyledAboutContactForm } from "./StyledAboutContactForm"
import { StyledCheckboxWrapper } from "../../molecules/SignUpHomeSection/StyledCheckboxWrapper"
import { StyledText } from "../../atoms/Text/StyledText"
import { GoCheck } from "react-icons/go"
import { StyledButton } from "../../atoms/Button/StyledButton"
import { useLocation } from "@reach/router"
import { AnimateSharedLayout } from "framer-motion"
import { StyledAboutContactFormErrorBox } from "../../atoms/AboutContact/StyledAboutContactFormErrorBox"

import Recaptcha from "react-recaptcha"

const AboutContactForm = () => {
  let pathname = useLocation().pathname
  const [message, setMessage] = useState("")
  const [token, setToken] = useState(null)

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = (values, e) => {
    console.log(token)
    if (token !== null) {
      fetch("/", {
        url: pathname,
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "ContactForm",
          ...values,
          "g-recaptcha-response": token,
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
          console.log(res)
        })
        .catch(err => {
          console.log(err)
          setMessage("Coś poszło nie tak. Spróbuj jeszcze raz.")
        })
    }
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Błędny adres email").required("Email wmagany"),
    name: Yup.string().min(3, "Imię za krótkie").required("Imię wymagane"),
    message: Yup.string()
      .min(10, "Wiadomość za krótka")
      .required("Wiadomość wymagana"),
    privacy: Yup.boolean().oneOf([true], "Wymagana akceptacja"),
  })

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.google.com/recaptcha/api.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  }, [])

  return (
    <Formik
      initialValues={{ email: "", message: "", name: "", privacy: false }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur }) => (
        <AnimateSharedLayout animate={{ transition: 0.1 }}>
          <StyledAboutContactForm
            method="POST"
            name="ContactForm"
            action="/thank-you"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
          >
            <input type="hidden" name="form-name" value="ContactForm" />
            <input type="hidden" name="bot-field" />
            <StyledAboutContactFormErrorBox layout>
              <Field type="text" name="name" placeholder="Imię" />
            </StyledAboutContactFormErrorBox>
            <StyledAboutContactFormErrorBox layout>
              <ErrorMessage name="name">
                {errorMsg => (
                  <StyledText
                    hasdeclaredfontcolor="var(--red)"
                    hasdeclaredpadding="8px 0 0 0"
                    hasdeclaredfontfamily="Raleway"
                    as="p"
                  >
                    {errorMsg}
                  </StyledText>
                )}
              </ErrorMessage>
            </StyledAboutContactFormErrorBox>
            <StyledAboutContactFormErrorBox layout>
              <Field type="email" name="email" placeholder="Email" />
            </StyledAboutContactFormErrorBox>
            <StyledAboutContactFormErrorBox layout>
              <ErrorMessage name="email">
                {errorMsg => (
                  <StyledText
                    hasdeclaredfontcolor="var(--red)"
                    hasdeclaredpadding="8px 0 0 0"
                    hasdeclaredfontfamily="Raleway"
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
            </StyledAboutContactFormErrorBox>
            <StyledAboutContactFormErrorBox layout>
              <ErrorMessage name="message">
                {errorMsg => (
                  <StyledText
                    hasdeclaredfontcolor="var(--red)"
                    hasdeclaredpadding="8px 0 0 0"
                    hasdeclaredfontfamily="Raleway"
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
            <StyledAboutContactFormErrorBox layout>
              <ErrorMessage name="privacy">
                {errorMsg => (
                  <StyledText
                    hasdeclaredfontfamily="Raleway"
                    hasdeclaredfontsize="18px"
                    hasdeclaredpadding="18px 0 0 0"
                    hasdeclaredfontcolor="var(--red)"
                  >
                    {errorMsg}
                  </StyledText>
                )}
              </ErrorMessage>
            </StyledAboutContactFormErrorBox>
            <StyledAboutContactFormErrorBox layout>
              <Recaptcha
                sitekey={process.env.SITE_RECAPTCHA_KEY}
                render="explicit"
                theme="light"
                verifyCallback={response => {
                  setToken(response)
                  console.log(response, token)
                }}
              />
              {console.log(token)}
            </StyledAboutContactFormErrorBox>
            <StyledButton
              type="submit"
              hasdeclaredbgcolor="var(--red)"
              hasdeclaredfontcolor="var(--white)"
              hasdeclaredfontfamily="Manrope"
              hasdeclaredfontsize="20px"
              layout
            >
              Wyślij
            </StyledButton>
          </StyledAboutContactForm>
          <StyledText
            hasdeclaredfontcolor="var(--red)"
            hasdeclaredpadding="24px 0 0 0"
            hasdeclaredfontfamily="Raleway"
            as="p"
          >
            {message}
          </StyledText>
        </AnimateSharedLayout>
      )}
    </Formik>
  )
}

export default AboutContactForm
