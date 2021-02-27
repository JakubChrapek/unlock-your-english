import styled from "styled-components"

export const StyledAboutMeHeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1347px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: 2560px) {
    margin: 0 auto;
  }
  @media only screen and (max-width: 1024px) {
    height: auto;
    padding-top: 160px;
  }
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    padding: 160px 20px 0 20px;
    margin: 0 auto;
  }
  @media only screen and (max-width: 440px) {
    align-items: flex-start;
    padding: 150px 0 0 0;
  }
`
