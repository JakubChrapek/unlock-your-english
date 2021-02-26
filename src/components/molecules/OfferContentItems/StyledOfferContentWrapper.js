import styled from "styled-components"

export const StyledOfferContentWrapper = styled.div`
  width: 100%;
  padding-bottom: 100px;
  @media only screen and (max-width: 767px) {
    p {
      line-height: 1.68em;
    }
    /* h2 {
      padding-bottom: 30px;
    }
    h3 {
      padding-bottom: 30px;
    } */
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
`
