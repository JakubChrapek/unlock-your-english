import styled from "styled-components"

export const StyledSmallLargeBox = styled.div`
  display: none;
  @media only screen and (max-width: 767px) {
    display: block;
    margin-top: 140px;
    padding-bottom: 40px;
    > h2 {
      font-size: 44px;
    }
    > h3 {
      font-size: 32px;
    }
  }
  @media only screen and (max-width: 546px) {
    > h2 {
      font-size: 36px;
    }
    > h3 {
      font-size: 24px;
    }
  }
  @media only screen and (max-width: 390px) {
    > h2 {
      font-size: 32px;
    }
    > h3 {
      max-width: 275px;
    }
  }
`
