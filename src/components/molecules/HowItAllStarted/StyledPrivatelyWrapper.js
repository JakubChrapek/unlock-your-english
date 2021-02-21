import styled from "styled-components"

export const StyledPrivatelyWrapper = styled.div`
  width: 100%;
  max-width: 922px;
  margin: 150px auto;
  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
    margin: 54px auto;
    align-items: flex-end;
  }

  > h3 {
    display: none;
    @media only screen and (max-width: 767px) {
      display: block;
      padding: 0;
      font-size: 36px;
      align-self: flex-start;
    }
  }
`
