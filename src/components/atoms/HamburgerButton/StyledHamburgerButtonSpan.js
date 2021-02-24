import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledHamburgerButtonSpan = styled(motion.span)`
  width: ${({ hasdeclaredwidth }) =>
    hasdeclaredwidth ? hasdeclaredwidth : "100%"};
  height: 2px;
  background-color: ${({ shownav, pathnameColor }) =>
    shownav || pathnameColor !== "/" ? "var(--black)" : "var(--white)"};
  display: block;
  transition: transform 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  border-radius: 25px;
  &:first-child {
    transform: translateY(-3px);
  }
  &:last-child {
    transform: translateY(3px);
  }
`
