import styled from "styled-components"

export const StyledSignUpSection = styled.section`
  width: 100%;
  background-color: var(--red);
  height: ${({ defineheight, hidebox }) =>
    hidebox ? `${defineheight}px` : "auto"};
  position: relative;
`
