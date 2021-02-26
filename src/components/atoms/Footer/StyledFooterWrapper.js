import styled from "styled-components"

export const StyledFooterWrapper = styled.div`
  padding: 128px 128px 78px 128px;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1044px) {
    padding: 128px 78px 78px 78px;
  }
  @media only screen and (max-width: 954px) {
    padding: 128px 56px 78px 56px;
  }
  @media only screen and (max-width: 838px) {
    padding: 128px 36px 78px 36px;
  }
  @media only screen and (max-width: 826px) {
    padding: 128px 20px 78px 20px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 58px 20px 40px 20px;
  }
`
