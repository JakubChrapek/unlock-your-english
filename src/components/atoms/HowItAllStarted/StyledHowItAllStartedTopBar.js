import styled from "styled-components"

export const StyledHowItAllStartedTopBar = styled.div`
  > h2 {
    transform: translateX(-60px);
    @media only screen and (max-width: 767px) {
      font-size: 36px;
      text-align: center;
      transform: translateX(0);
    }
    @media only screen and (max-width: 343px) {
        font-size: 30px
    }
  > p {
    @media only screen and (max-width: 767px) {
      font-size: 16px;
    }
  }
`
