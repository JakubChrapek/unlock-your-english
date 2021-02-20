import styled from "styled-components"
import { Form } from "formik"

export const StyledSignUpForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 646px) {
    width: 100%;
    padding: 0 40px;
  }
  @media only screen and (max-width: 424px) {
    padding: 0 20px;
  }
`
