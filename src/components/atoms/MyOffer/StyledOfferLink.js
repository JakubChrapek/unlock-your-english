import styled from "styled-components"
import { StyledLink } from "../Link/StyledLink"

export const StyledOfferLink = styled(StyledLink)`
  position: absolute;
  bottom: 44px;
  left: 50px;
  @media (max-width: 767px) {
    color: var(--red);
    font-weight: bold;
  }
`
