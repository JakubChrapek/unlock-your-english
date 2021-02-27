import styled from "styled-components"

export const StyledHeroContactWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 180px;
  max-width: 1600px;
  @media only screen and (min-width: 1921px) {
    max-width: 1440px;
  }
  @media only screen and (min-width: 1440px) {
    margin: 180px auto 0 auto;
  }
  @media only screen and (max-width: 768px) {
    width: auto;
  }
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    margin-top: 50px;
  }
  @media only screen and (max-width: 550px) {
    margin-top: 20px;
  }
  @media only screen and (max-width: 330px) {
    margin-top: 0;
  }
`
