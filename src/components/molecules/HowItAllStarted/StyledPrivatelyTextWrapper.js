import styled from "styled-components"

export const StyledPrivatelyTextWrapper = styled.div`
  margin-right: 240px;
  > h3 {
    transform: translateX(-60px);
    @media only screen and (max-width: 767px) {
      display: none;
    }
  }
  @media only screen and (max-width: 1089px) {
    > p {
      max-width: 380px;
    }
    > h3 {
      padding-bottom: 40px;
    }
  }
  @media only screen and (max-width: 985px) {
    margin-right: 140px;
    > p {
      max-width: 317px;
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 767px) {
    margin-right: 0;
    > p {
      padding-top: 102px;
      max-width: none;
      padding-right: 28px;
      font-size: 14px;
    }
  }
`
