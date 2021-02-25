import styled from "styled-components"
import { Form } from "formik"

export const StyledAboutContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 317px;
  position: relative;
  @media only screen and (max-width: 767px) {
    margin-top: 38px;
    align-items: center;
  }
  @media only screen and (max-width: 375px) {
    width: 100%;
  }
  > div {
    width: 100%;
  }
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 13px;
    font-family: Raleway;
    font-weight: bold;
    margin-bottom: 8px;

    &::placeholder {
      font-weight: bold;
    }
    &:focus {
      outline: none;
    }
  }
  textarea {
    width: 100%;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    resize: none;
    padding: 13px;
    margin-bottom: 14px;
    font-family: Raleway;
    font-weight: bold;
    &::placeholder {
      font-weight: bold;
    }
    &:focus {
      outline: none;
    }
  }

  > button {
    margin-top: 16px;
    width: 290px;
    height: 48px;
  }
`
