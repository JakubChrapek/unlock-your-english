import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledError = styled(motion.div)`
  background-color: var(--white);
  border-radius: 10px;
  margin-bottom: 21px;
  position: absolute;
  top: 0;
  @media only screen and (max-width: 420px) {
    margin-top: 8px;
    margin-bottom: 0;
    p {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 340px) {
    p {
      font-size: 14px;
    }
  }
`
