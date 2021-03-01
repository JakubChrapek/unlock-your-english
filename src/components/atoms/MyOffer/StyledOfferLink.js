import styled from "styled-components"
import { StyledText } from "../Text/StyledText"

export const StyledOfferLink = styled(StyledText)`
  position: absolute;
  bottom: 44px;
  left: 50px;
  padding: 8px 0;
  cursor: pointer;
  letter-spacing: 0.05em;
  @media (max-width: 1366px) {
    bottom: 32px;
    left: 40px;
  }
  @media only screen and (max-width: 767px) {
    color: var(--red);
    font-weight: bold;
  }
  @media only screen and (max-width: 600px) {
    left: 30px;
    bottom: 22px;
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
