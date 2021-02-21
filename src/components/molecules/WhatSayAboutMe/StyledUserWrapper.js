import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledUserWrapper = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
  p {
    @media only screen and (max-width: 767px) {
      font-size: 18px;
    }
  }
`
