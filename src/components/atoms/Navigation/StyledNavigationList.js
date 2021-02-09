import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledNavigationList = styled(motion.ul)`
  list-style-type: none;
  display: flex;
  @media only screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    width: 100%;
    background-color: var(--white);

    opacity: ${({ showNav }) => (showNav ? "1" : "0")};
    transform: ${({ showNav }) =>
      showNav ? "translateY(0)" : "translateY(-300px)"};
    z-index: -2;
    transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
  }
  li {
    margin-right: 78px;
    @media only screen and (max-width: 990px) {
      margin-right: 48px;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`
