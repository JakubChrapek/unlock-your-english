import styled from "styled-components"

export const StyledSliderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  > h2 {
    @media only screen and (max-width: 767px) {
      font-size: 36px;
    }
  }
`
