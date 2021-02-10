import styled from "styled-components"

export const StyledAboutContactWrapper = styled.div`
  width: 100%;
  max-width: 922px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 150px;
  @media only screen and (max-width: 1134px) {
    margin-top: 100px;
  }
  @media only screen and (max-width: 1088px) {
    margin-top: 40px;
  }
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`
