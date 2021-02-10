import styled from "styled-components"

export const StyledFooterMenuWrapper = styled.div`
  margin-left: 180px;
  @media only screen and (max-width: 1184px) {
    margin-left: 80px;
  }
  @media only screen and (max-width: 1010px) {
    margin-left: 20px;
  }
  @media only screen and (max-width: 767px) {
    padding-bottom: 24px;
    margin-left: 0;
    ul {
      flex-direction: column;
      align-items: center;
    }
  }
`
