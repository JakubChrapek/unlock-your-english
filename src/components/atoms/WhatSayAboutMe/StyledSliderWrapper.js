import styled from "styled-components"

export const StyledSliderWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  max-width: 948px;
  margin: 0 auto;
  > p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 10px;
  }
`
