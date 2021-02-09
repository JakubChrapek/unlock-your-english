import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledSlide = styled(motion.div)`
  width: 100%;
  height: 243px;
  left: 0;
  top: 70px;
  position: absolute;
  overflow: hidden;
  > div {
    width: 100%;
    height: 100%;
    position: relative;
  }
`
