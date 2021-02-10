import styled from "styled-components"
import { Link } from "gatsby"

export const StyledLogo = styled(Link)`
  width: 166px;
  height: 43px;
  display: block;
  cursor: pointer;
  @media only screen and (max-width: 767px) {
    z-index: 2;
    position: relative;
  }
  img {
    width: 100%;
    height: 100%;
  }
`
