import styled from "styled-components"

export const StyledHerroOfferSection = styled.section`
  width: 100%;
  height: 423px;
  margin-top: 127px;
  position: relative;
  @media only screen and (max-width: 767px) {
    height: 344px;
  }
  > div {
    &:first-child {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -2;
    }
  }
`
