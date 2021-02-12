import styled from "styled-components"
import { motion } from "framer-motion"
export const StyledSavedCorrectly = styled(motion.div)`
  display: ${({ active }) => (active ? "flex" : "none")};
  align-items: center;
  height: 51px;
`
