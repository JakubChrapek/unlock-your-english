import styled from "styled-components"

export const StyledAboutMeHeroSection = styled.section`
  width: 100%;
  height: 100vh;
  padding-right: 123px;
  @media only screen and (max-width: 1309px) {
    padding-right: 83px;
  }
  @media only screen and (max-width: 767px) {
    padding-right: 0;
    height: auto;
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 440px) {
    padding: 60px 0 80px 0;
  }
  @media only screen and (max-width: 375px) {
    padding-top: 90px;
  }
  @media only screen and (max-width: 320px) {
    padding-top: 160px;
  }
`
