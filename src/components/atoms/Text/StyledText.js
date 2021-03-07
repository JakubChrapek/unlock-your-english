import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledText = styled(motion.p)`
  font-size: ${({ hasDeclaredFontSize }) =>
    hasDeclaredFontSize ? hasDeclaredFontSize : "16px"};
  font-weight: ${({ hasDeclaredFontWeight }) =>
    hasDeclaredFontWeight ? hasDeclaredFontWeight : "normal"};
  color: ${({ hasDeclaredFontColor }) =>
    hasDeclaredFontColor ? hasDeclaredFontColor : "var(--black)"};
  letter-spacing: ${({ hasdeclaredletterspacing }) =>
    hasdeclaredletterspacing ? hasdeclaredletterspacing : "0"};
  line-height: ${({ hasdeclaredlineheight }) =>
    hasdeclaredlineheight ? hasdeclaredlineheight : "1"};
  font-family: ${({ hasDeclaredFontFamily }) =>
    hasDeclaredFontFamily ? hasDeclaredFontFamily : "Oswald, sans-serif;"};
  text-decoration: ${({ hasdeclaredtextdecoration }) =>
    hasdeclaredtextdecoration ? hasdeclaredtextdecoration : "none"};
  display: ${({ hasdeclareddisplay }) =>
    hasdeclareddisplay ? hasdeclareddisplay : "block"};
  text-transform: ${({ hasdeclaredtexttransform }) =>
    hasdeclaredtexttransform ? hasdeclaredtexttransform : "none"};
  transform: ${({ hasdeclaredtransform }) =>
    hasdeclaredtransform ? hasdeclaredtransform : "translate(0,0)"};
  text-align: ${({ hasdeclaredtextalign }) =>
    hasdeclaredtextalign ? hasdeclaredtextalign : "left"};
  padding: ${({ hasDeclaredPadding }) =>
    hasDeclaredPadding ? hasDeclaredPadding : "0"};
  margin: ${({ hasdeclaredmargin }) =>
    hasdeclaredmargin ? hasdeclaredmargin : "0"};
  max-width: ${({ hasdeclaredmaxwidth }) =>
    hasdeclaredmaxwidth ? hasdeclaredmaxwidth : "none"};
  height: ${({ hasdeclaredheight }) =>
    hasdeclaredheight ? hasdeclaredheight : "auto"};
  overflow: ${({ hasoverflow }) => (hasoverflow ? hasoverflow : "none")};
`
