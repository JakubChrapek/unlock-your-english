import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledAboutContactFormErrorBox = styled(motion.div)`
  padding-bottom: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  > p {
    position: absolute;
    bottom: 0;
  }
`
