import styled from "styled-components"
import { motion } from "framer-motion"
export const StyledWrapperWithoutPagination = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p {
    @media only screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 1.85em;
    }
  }
`
