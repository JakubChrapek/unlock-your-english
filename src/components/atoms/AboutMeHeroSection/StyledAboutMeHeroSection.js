import styled from "styled-components"

export const StyledAboutMeHeroSection = styled.section`
  width: 100%;
  height: 100vh;
  padding-right: 123px;
  @media only screen and (max-width: 1309px) {
    padding-right: 83px;
  }
  @media only screen and (max-width: 1024px) {
    height: auto;
    margin-bottom: 140px;
  }
  @media only screen and (max-width: 767px) {
    padding-right: 0;
  }
  @media only screen and (max-width: 440px) {
    padding: 10px 0 0 0;
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 375px) {
    padding-top: 10px;
  }
`
