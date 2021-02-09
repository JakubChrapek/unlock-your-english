import styled from "styled-components"

export const StyledRightBar = styled.div`
  max-width: 563px;
  margin-top: 30px;
  @media only screen and (max-width: 915px) {
    margin-top: 10px;
  }
  @media only screen and (max-width: 817px) {
    margin-top: 0;
  }
  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    @media only screen and (max-width: 1097px) {
      font-size: 42px;
    }
    @media only screen and (max-width: 767px) {
      align-self: flex-start;
      font-size: 36px;
    }
  }
  h3 {
    @media only screen and (max-width: 1097px) {
      font-size: 28px;
    }
    @media only screen and (max-width: 767px) {
      align-self: flex-start;
      font-size: 24px;
    }
  }
  p {
    @media only screen and (max-width: 1097px) {
      font-size: 16px;
      max-width: 400px;
    }
    @media only screen and (max-width: 817px) {
      max-width: 390px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 14px;
      text-align: justify;
      font-weight: bold;
      max-width: 277px;
    }
  }
`
