import styled from "styled-components"

export const StyledAboutContactLeftBar = styled.div`
  margin-top: 30px;
  @media only screen and (max-width: 1102px) {
    > p {
      max-width: 380px;
    }
  }
  @media only screen and (max-width: 1036px) {
    > p {
      max-width: 320px;
    }
  }
  @media only screen and (max-width: 1008px) {
    > p {
      max-width: 280px;
    }
  }
  @media only screen and (max-width: 767px) {
    > p {
      max-width: 317px;
    }
  }
  @media only screen and (max-width: 400px) {
    > p {
      max-width: none;
    }
  }
`
