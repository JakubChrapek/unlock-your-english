import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledButton = styled(motion.button)`
  display: ${({ hideCheckbox }) => (hideCheckbox ? "none" : "block")};
  padding: ${({ hasDeclaredPadding }) =>
    hasDeclaredPadding ? hasDeclaredPadding : "0"};
  margin: ${({ hasdeclaredmargin }) =>
    hasdeclaredmargin ? hasdeclaredmargin : "0"};
  font-family: ${({ hasDeclaredFontFamily }) =>
    hasDeclaredFontFamily ? hasDeclaredFontFamily : "Releway, sans-serif;"};
  color: ${({ hasDeclaredFontColor }) =>
    hasDeclaredFontColor ? hasDeclaredFontColor : "var(--black)"};
  background-color: ${({ hasdeclaredbgcolor }) =>
    hasdeclaredbgcolor ? hasdeclaredbgcolor : "var(--white)"};
  font-size: ${({ hasDeclaredFontSize }) =>
    hasDeclaredFontSize ? hasDeclaredFontSize : "14px"};
  text-transform: ${({ hasdeclaredtexttransform }) =>
    hasdeclaredtexttransform ? hasdeclaredtexttransform : ""};
  border-radius: 25px;
  border: none;
  cursor: pointer;
  transition: opacity 250ms ease-in-out;
  &:hover {
    opacity: 0.7;
  }
  &:focus {
    outline: none;
  }
`
