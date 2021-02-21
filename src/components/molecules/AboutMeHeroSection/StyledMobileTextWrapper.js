import styled from "styled-components"

export const StyledMobileTextWrapper = styled.div`
  display: none;
  max-width: 385px;
  h1 {
    font-size: 36px;
  }
  h2 {
    font-size: 24px;
  }
  @media only screen and (max-width: 767px) {
    display: block;
  }
  @media only screen and (max-width: 440px) {
    padding: 0 28px;
    max-width: unset;
    align-self: center;
    h1 {
      padding-bottom: 8px;
    }
    h2 {
      padding-left: 30px;
      padding-bottom: 32px;
    }
  }
  @media only screen and (max-width: 340px) {
    h1 {
      font-size: 34px;
    }
    h2 {
      font-size: 22px;
    }
  }
`
