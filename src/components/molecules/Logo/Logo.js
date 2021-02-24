import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { motion, AnimatePresence } from "framer-motion"

import { StyledLogo } from "./StyledLogo"

const Logo = ({ pathnameColor, shownav }) => {
  const logoImage = useStaticQuery(graphql`
    query logo {
      datoCmsHeader {
        headerLogo {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        headerLogoColor {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  `)
  return (
    <AnimatePresence initial={false} custom={shownav} exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
        key={shownav}
      >
        <StyledLogo to="/" shownav={`${shownav}--logo`}>
          <Img
            fluid={
              pathnameColor === "/" && shownav !== true
                ? logoImage.datoCmsHeader.headerLogo.fluid
                : logoImage.datoCmsHeader.headerLogoColor.fluid
            }
            alt={
              pathnameColor === "/" && shownav !== true
                ? logoImage.datoCmsHeader.headerLogo.alt
                : logoImage.datoCmsHeader.headerLogoColor.alt
            }
          />
        </StyledLogo>
      </motion.div>
    </AnimatePresence>
  )
}

export default Logo
