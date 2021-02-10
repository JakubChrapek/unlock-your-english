import styled from "styled-components"

export const StyledHeader = styled.header`
  width: 100%;
  height: 128px;
  padding: 0 136px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1281px) {
    padding: 0 68px;
  }
  @media only screen and (max-width: 990px) {
    padding: 0 48px;
  }
`
