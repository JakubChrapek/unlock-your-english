import styled from "styled-components"

export const StyledHowItAllStartedSection = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  @media only screen and (max-width: 767px) {
    margin-top: 100px;
    padding-left: 28px;
  }
  @media only screen and (max-width: 440px) {
    margin-top: 0;
  }
  > div {
    &:first-child {
      top: -120px;
    }
    &:nth-child(2) {
      width: 100%;
      padding: 0 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      @media only screen and (max-width: 857px) {
        padding: 0 60px;
      }
      @media only screen and (max-width: 767px) {
        padding: 0;
      }
    }
    &:nth-child(3) {
      width: 100%;
      position: relative;
      padding: 0 120px;
      @media only screen and (max-width: 857px) {
        padding: 0 60px;
      }
      @media only screen and (max-width: 767px) {
        padding: 0;
      }
    }
  }
`
