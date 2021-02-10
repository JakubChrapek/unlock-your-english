import styled from "styled-components"

export const StyledHiAboutMeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 151px;
  max-width: 1440px;
  margin: 0 auto;
  @media only screen and (max-width: 1363px) {
    padding: 121px 82px;
  }
  @media only screen and (max-width: 1223px) {
    padding: 100px 42px;
  }
  @media only screen and (max-width: 1097px) {
    padding: 100px 82px;
  }
  @media only screen and (max-width: 1003px) {
    padding: 100px 42px;
  }
  @media only screen and (max-width: 887px) {
    padding: 100px 20px;
  }
  @media only screen and (max-width: 767px) {
    padding: 0 20px 80px 20px;
    flex-direction: column;
    align-items: center;
  }
`
