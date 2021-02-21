import styled from "styled-components"

export const StyledRightBar = styled.div`
  max-width: 591px;
  transform: translateY(-120px);
  padding-left: 49px;
  @media only screen and (max-width: 1304px) {
    padding-left: 19px;
  }
  @media only screen and (max-width: 1222px) {
    padding-left: 0;
  }
  @media only screen and (max-width: 600px) {
    padding: 0 20px;
  }
  @media only screen and (max-width: 1186px) {
    h2 {
      font-size: 36px;
    }
    h3 {
      max-width: 500px;
    }
  }
  @media only screen and (max-width: 1094px) {
    transform: translateY(0);
    h3 {
      max-width: 600px;
    }
  }
`
