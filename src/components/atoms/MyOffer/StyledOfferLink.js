import styled from "styled-components"
import { StyledText } from "../Text/StyledText"

export const StyledOfferLink = styled(StyledText)`
  position: absolute;
  bottom: 44px;
  left: 50px;
  padding: 8px 0;
  cursor: pointer;
  @media (max-width: 767px) {
    color: var(--red);
    font-weight: bold;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 1px;
    background-color: var(--red);
    width: 100%;
    transform: scale(0, 0);
    transform-origin: center bottom;
    transition: transform 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }

  &:hover,
  &:active,
  &:focus {
    &:after {
      transform: scaleY(1);
    }
  }
`
