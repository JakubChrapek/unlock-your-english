import styled from "styled-components"

export const StyledUnlockYourEnglishWrapper = styled.div`
  width: 100%;
  padding: 202px 88px 105px 151px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;

  @media only screen and (max-width: 1384px) {
    padding: 202px 48px 105px 111px;
  }
  @media only screen and (max-width: 1304px) {
    padding: 202px 28px 105px 91px;
  }
  @media only screen and (max-width: 1264px) {
    padding: 202px 20px 105px 54px;
  }
  @media only screen and (max-width: 1222px) {
    padding: 202px 20px 105px 20px;
  }
  @media only screen and (max-width: 1094px) {
    padding: 202px 40px 105px 20px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 140px;
  }
`
