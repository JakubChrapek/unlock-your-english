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
            ...GatsbyDatoCmsFluid_noBase64
          }
        }
        headerLogoColor {
          alt
          fluid {
            ...GatsbyDatoCmsFluid_noBase64
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
        <StyledLogo to="/">
          <Img
            fluid={
              pathnameColor === "var(--white)" && shownav !== true
                ? logoImage.datoCmsHeader.headerLogo.fluid
                : logoImage.datoCmsHeader.headerLogoColor.fluid
            }
            alt={
              pathnameColor === "var(--white)" && shownav !== true
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
