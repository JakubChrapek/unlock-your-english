import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledButtonPagination = styled(motion.button)`
  border: none;
  background-color: transparent;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: ${({ hasdeclaredmarginright }) =>
    hasdeclaredmarginright ? hasdeclaredmarginright : "0"};
`
