import styled from "styled-components"

export const StyledHowItAllStartedTopBar = styled.div`
  > h2 {
    transform: translateX(-60px);
    @media only screen and (max-width: 767px) {
      font-size: 36px;
      text-align: center;
      transform: translateX(0);
      margin-top: 40px;
    }
    @media only screen and (max-width: 412px) {
      margin-top: 0px;
    }
    @media only screen and (max-width: 380px) {
      margin-top: 40px;
    }
    @media only screen and (max-width: 375px) {
      margin-top: 10px;
    }
    @media only screen and (max-width: 360px) {
      margin-top: 60px;
    }
    @media only screen and (max-width: 343px) {
        font-size: 30px
    }
    @media only screen and (max-width: 320px) {
      margin-top: 120px;
    }
  > p {
    @media only screen and (max-width: 767px) {
      font-size: 16px;
    }
  }
`
