import styled from "styled-components"

export const StyledHeroTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (min-width: 1920px) {
    h1 {
      font-size: 82px;
    }
    h2 {
      font-size: 28px;
    }
  }
  @media only screen and (max-width: 990px) {
    h1 {
      font-size: 56px;
    }
    h2 {
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 767px) {
    padding: 0 42px;
    h1 {
      font-size: 48px;
    }
  }
  @media only screen and (max-width: 506px) {
    h1 {
      font-size: 36px;
    }
    h2 {
      font-size: 14px;
      max-width: 317px;
      line-height: 2em;
    }
  }
  @media only screen and (max-width: 344px) {
    h1 {
      font-size: 28px;
      padding-top: 48px;
    }
  }
  @media only screen and (max-width: 348px) {
    padding: 16px 24px;
  }
`
