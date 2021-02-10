import styled from "styled-components"

export const StyledTextWrapper = styled.div`
  max-width: 681px;
  padding-left: 60px;
  @media only screen and (max-width: 1347px) {
    h1 {
      font-size: 56px;
    }
    h2 {
      font-size: 40px;
    }
    p {
      font-size: 18px;
      line-height: 2em;
    }
  }
  @media only screen and (max-width: 1191px) {
    max-width: 600px;
    padding-top: 40px;
    h1 {
      font-size: 50px;
    }
    h2 {
      font-size: 36px;
    }
    p {
      font-size: 17px;
    }
  }
  @media only screen and (max-width: 1109px) {
    max-width: 540px;
  }
  @media only screen and (max-width: 1005px) {
    max-width: 500px;
    padding-top: 100px;
  }
  @media only screen and (max-width: 929px) {
    max-width: 470px;
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 18px;
      line-height: 1.75em;
    }
  }
  @media only screen and (max-width: 853px) {
    max-width: 440px;
    padding-top: 40px;
    h1 {
      font-size: 36px;
    }
    h2 {
      font-size: 24px;
    }
    p {
      line-height: 1.32em;
    }
  }
  @media only screen and (max-width: 819px) {
    max-width: 385px;

    h2 {
      padding-left: 34px;
    }
    p {
      padding-left: 17px;
    }
  }
  @media only screen and (max-width: 767px) {
    padding-left: 0;
    max-width: 317px;
    h1 {
      display: none;
    }
    h2 {
      display: none;
    }
    p {
      padding: 16px 0 0 0;
    }
  }
  @media only screen and (max-width: 440px) {
    max-width: none;
    p {
      padding: 16px 14px 0 14px;
      align-self: center;
    }
  }
`
