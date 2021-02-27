import styled from "styled-components"

export const StyledHowItAllStartedBottomBar = styled.div`
  > h3 {
    transform: translateX(20px);
    @media only screen and (max-width: 767px) {
      transform: translateX(0);
      text-align: right;
      font-size: 36px;
      padding: 18px 0 46px 0;
    }
    @media only screen and (max-width: 343px) {
      font-size: 30px;
    }
  }
  > p {
    @media only screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 1.68em;
    }
  }
`
