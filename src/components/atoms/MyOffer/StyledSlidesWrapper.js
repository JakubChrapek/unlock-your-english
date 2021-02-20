import { motion } from "framer-motion"
import styled from "styled-components"

export const StyledSlidesWrapper = styled(motion.div)`
  display: flex;
  padding: 40px 0;
  padding: ${({offerPage}) => offerPage ? "40px 0 0 0" : "40px 0"};
`
