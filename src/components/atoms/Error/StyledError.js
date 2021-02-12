import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledError = styled(motion.div)`
  background-color: var(--white);
  border-radius: 10px;
  margin-bottom: 21px;
  /* transform: translateX(-29%); */
  position: absolute;
  top: 0;
  /* @media only screen and (max-width: 875px) {
    transform: translateX(-30%);
  }
  @media only screen and (max-width: 767px) {
    transform: translateX(0);
  } */
  @media only screen and (max-width: 420px) {
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
