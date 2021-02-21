import React, { useState } from "react"
import { Formik, Field, ErrorMessage } from "formik"
import { StyledSignUpSection } from "../../atoms/SignUpHomeSection/StyledSignUpSection"
import { StyledSignUpWrapper } from "../../molecules/SignUpHomeSection/StyledSignUpWrapper"
import { StyledSignUpForm } from "../../molecules/SignUpHomeSection/StyledSignUpForm"
import { StyledCheckboxWrapper } from "../../molecules/SignUpHomeSection/StyledCheckboxWrapper"
import { StyledText } from "../../atoms/Text/StyledText"
import { GoCheck } from "react-icons/go"
import { StyledButton } from "../../atoms/Button/StyledButton"
import { StyledError } from "../../molecules/Error/StyledError"
import { AnimatePresence, AnimateSharedLayout } from "framer-motion"
import { StyledInputWrapper } from "../../molecules/SignUpHomeSection/StyledInputWrapper"
import { StyledSavedCorrectly } from "../../atoms/SignUpHomeSection/StyledSavedCorrectly"
import { StyledErrorCheckbox } from "../../atoms/SignUpHomeSection/StyledErrorCheckbox"
import * as Yup from "yup"
import { useLocation } from "@reach/router"

const SignUpHomeSection = () => {
  const [hideBox, setHideBox] = useState(false)

  let pathname = useLocation().pathname

  const validationSchema = Yup.object({
    email: Yup.string().email("Błędny adres email").required("Email wmagany"),
    privacy: Yup.boolean().oneOf([true], "Wymagana akceptacja"),
  })

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
      body: encode({ "form-name": "Newsletter Form", ...values }),
    })
      .then(() => {
        e.resetForm({
          values: {
            email: "",
            privacy: false,
          },
        })
        setHideBox(true)
      })
      .catch(err => {
        setHideBox(false)
      })
  }
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
          hasdeclaredpadding="42px 0 26px 0"
          hasdeclaredfontcolor="var(--white)"
          as="p"
        >
          Zobacz jak prowadzę lekcję, na co zwracam uwagę, co tydzien organizuję
          pokazowe lekcje dla zebranych chętnych, zostaw swój email, a wyślę Ci
          termin najbliższej lekcji!
        </StyledText>
        <Formik
          initialValues={{ email: "", privacy: false }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, handleSubmit, isSubmitting }) => (
            <StyledSignUpForm
              onSubmit={handleSubmit}
              name="Newsletter Form"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/thank-you"
            >
              <input type="hidden" name="form-name" value="Newsletter Form" />
              <input type="hidden" name="bot-field" />
              <AnimateSharedLayout>
                <StyledInputWrapper layout hidecheckbox={hideBox}>
                  <div>
                    <AnimatePresence
                      initial={false}
                      transition={{ opacity: 0.1 }}
                    >
                      <ErrorMessage name="email">
                        {errorMsg => (
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
                              {errorMsg}
                            </StyledText>
                          </StyledError>
                        )}
                      </ErrorMessage>
                    </AnimatePresence>
                    <Field
                      type="email"
                      name="email"
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
                    hideCheckbox={hideBox}
                  >
                    Zapisz
                  </StyledButton>
                  <StyledCheckboxWrapper hidecheckbox={hideBox}>
                    <Field
                      type="checkbox"
                      name="privacy"
                      id="accept-newsletter"
                    />
                    <label htmlFor="accept-newsletter" name="privacy">
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
                <AnimatePresence initial={false} transition={{ opacity: 0.1 }}>
                  <StyledErrorCheckbox>
                    <ErrorMessage name="privacy">
                      {errorMsg => (
                        <StyledText
                          key={errors.privacy}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          hasdeclaredfontfamily="Raleway"
                          hasdeclaredfontsize="18px"
                          hasdeclaredpadding="7px 45px"
                          hasdeclaredfontcolor="var(--red)"
                        >
                          {errorMsg}
                        </StyledText>
                      )}
                    </ErrorMessage>
                  </StyledErrorCheckbox>
                </AnimatePresence>
              </AnimateSharedLayout>
            </StyledSignUpForm>
          )}
        </Formik>
      </StyledSignUpWrapper>
    </StyledSignUpSection>
  )
}

export default SignUpHomeSection
