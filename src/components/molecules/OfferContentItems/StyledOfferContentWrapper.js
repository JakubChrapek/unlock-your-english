import styled from "styled-components"

export const StyledOfferContentWrapper = styled.div`
  width: 100%;
  padding-bottom: 100px;
  @media only screen and (max-width: 767px) {
    p {
      line-height: 1.68em;
      padding-left: 0;
    }
  }
  @media only screen and (max-width: 413px) {
    h2 {
      font-size: 32px;
    }
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 330px) {
    h2 {
      font-size: 28px;
    }
  }
`
