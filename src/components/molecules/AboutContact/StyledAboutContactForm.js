import styled from "styled-components"
import { Form } from "formik"
export const StyledAboutContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 767px) {
    width: 317px;
    margin-top: 38px;
    align-items: center;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
  > input {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 13px;
    font-family: Raleway;
    font-weight: bold;
    margin-bottom: 8px;
    @media only screen and (max-width: 767px) {
      width: 100%;
    }
    &::placeholder {
      font-weight: bold;
    }
    &:focus {
      outline: none;
    }
  }
  > textarea {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    resize: none;
    padding: 13px;
    font-family: Raleway;
    font-weight: bold;
    margin-top: 12px;
    @media only screen and (max-width: 767px) {
      width: 100%;
    }
    &::placeholder {
      font-weight: bold;
    }
    &:focus {
      outline: none;
    }
  }
  > button {
    margin-top: 48px;
    width: 290px;
    height: 48px;
  }
`
