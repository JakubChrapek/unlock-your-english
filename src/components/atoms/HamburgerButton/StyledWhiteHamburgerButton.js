import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledWhiteHamburgerButton = styled(motion.button)`
  display: none;
  border: none;
  width: 24px;
  height: 24px;
  background-color: transparent;
  position: relative;
  > span {
    background-color: ${({ shownav }) => shownav ? "var(--black)" : "#fff"};
    width: 100%;
    height: 2px;
    display: block;
    transition: transform 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    border-radius: 25px;
    &:first-child {
        transform: translateY(-3px);
    }
    &:last-child {
        transform: translateY(3px);
        width: ${({hasdeclaredwidth}) => hasdeclaredwidth ? "75%" : "100%"};
    }
  }
  @media only screen and (max-width: 767px) {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
  }
`