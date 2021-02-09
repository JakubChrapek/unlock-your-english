import styled from "styled-components"
import Img from "gatsby-image"
import { motion } from "framer-motion"

export const StyledUserImage = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

export const StyledUserImageImg = styled(Img)`
  object-fit: contain;
  border-radius: 50%;
`
