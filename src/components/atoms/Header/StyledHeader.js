import styled from "styled-components"

export const StyledHeader = styled.header`
  width: 100%;
  height: 128px;
  padding: 0 136px;
  position: absolute;
  top: 0;
  left: 0;

  @media only screen and (max-width: 990px) {
    padding: 0 68px;
  }
  @media only screen and (max-width: 767px) {
    padding: 0 20px;
  }
`
