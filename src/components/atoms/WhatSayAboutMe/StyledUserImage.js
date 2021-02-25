import styled from "styled-components"
import Img from "gatsby-image"
import { motion } from "framer-motion"

export const StyledUserImage = styled(motion.div)`
  width: 81px;
  height: 81px;
  border-radius: 50%;
  @media only screen and (max-width: 600px) {
    width: 64px;
    height: 64px;
  }
`

export const StyledUserImageImg = styled(Img)`
  object-fit: contain;
  border-radius: 50%;
`
