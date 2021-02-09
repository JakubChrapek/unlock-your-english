import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledHamburgerButton = styled(motion.button)`
  display: none;
  border: none;
  width: 24px;
  height: 24px;
  background-color: transparent;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ showNav }) =>
      showNav ? "var(--black)" : "var(--white)"};
    border-radius: 25px;
    transition: background-color 250ms ease-in-out;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 5px;
    right: 0;
    width: 80%;
    height: 2px;
    background-color: ${({ showNav }) =>
      showNav ? "var(--black)" : "var(--white)"};
    border-radius: 25px;
    transition: background-color 250ms ease-in-out;
  }
  @media only screen and (max-width: 767px) {
    display: block;
  }
`
