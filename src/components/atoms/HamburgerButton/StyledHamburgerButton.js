import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledHamburgerButton = styled(motion.button)`
  display: none;
  border: none;
  width: 24px;
  height: 24px;
  background-color: transparent;
  position: relative;
  
  @media only screen and (max-width: 767px) {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
  }
`
