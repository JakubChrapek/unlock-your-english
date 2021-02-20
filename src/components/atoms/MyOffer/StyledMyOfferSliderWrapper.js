import styled from "styled-components"

export const StyledMyOfferSliderWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  padding: ${({offerPage}) => offerPage ? "50px 0 50px 0" : "0 0 120px 120px"};
  overflow: hidden;
  @media (max-width: 1384px) {
    padding-left: 61px;
  }
  @media (max-width: 1304px) {
    padding-left: 41px;
  }
  @media (max-width: 1264px) {
    padding-left: 14px;
  }
  @media (max-width: 1094px) {
    padding-left: 34px;
  }
  @media (max-width: 600px) {
    padding-left: 0;
  }
`
