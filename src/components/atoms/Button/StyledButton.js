import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledButton = styled(motion.button)`
  padding: ${({ hasdeclaredpadding }) =>
    hasdeclaredpadding ? hasdeclaredpadding : "0"};
  margin: ${({ hasdeclaredmargin }) =>
    hasdeclaredmargin ? hasdeclaredmargin : "0"};
  font-family: ${({ hasdeclaredfontfamily }) =>
    hasdeclaredfontfamily ? hasdeclaredfontfamily : "Releway, sans-serif;"};
  color: ${({ hasdeclaredfontcolor }) =>
    hasdeclaredfontcolor ? hasdeclaredfontcolor : "var(--black)"};
  background-color: ${({ hasdeclaredbgcolor }) =>
    hasdeclaredbgcolor ? hasdeclaredbgcolor : "var(--white)"};
  font-size: ${({ hasdeclaredfontsize }) =>
    hasdeclaredfontsize ? hasdeclaredfontsize : "14px"};
  border-radius: 25px;
  border: none;
`
