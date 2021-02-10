import styled from "styled-components"

export const StyledSignUpWrapper = styled.div`
  width: 100%;
  max-width: 802px;
  padding: 71px 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 874px) {
    padding: 71px 60px;
  }
  @media only screen and (max-width: 646px) {
    padding: 53px 80px;
  }
  @media only screen and (max-width: 767px) {
    padding: 54px 26px;
    h2 {
      font-size: 36px;
      @media only screen and (max-width: 480px) {
        max-width: 240px;
        line-height: 1.46em;
      }
    }
    > p {
      font-size: 14px;
      padding: 32px 44px 42px 44px;
      @media only screen and (max-width: 646px) {
        padding: 32px 44px 35px 44px;
        line-height: 1.85em;
      }
      @media only screen and (max-width: 480px) {
        padding: 32px 0 35px 0;
        max-width: 320px;
      }
    }
  }
  @media only screen and (max-width: 424px) {
    padding: 54px 20px;
  }
`
