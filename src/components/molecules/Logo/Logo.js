import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StyledLogo } from "./StyledLogo"
import Img from "gatsby-image"
import { motion, AnimatePresence } from "framer-motion"
const Logo = ({ pathnameColor, showNav }) => {
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
    <AnimatePresence initial={false} custom={showNav} exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
        key={showNav}
      >
        <StyledLogo to="/" showNav={`${showNav}--logo`}>
          <Img
            fluid={
              pathnameColor === "/" && showNav !== true
                ? logoImage.datoCmsHeader.headerLogo.fluid
                : logoImage.datoCmsHeader.headerLogoColor.fluid
            }
            alt={
              pathnameColor === "/" && showNav !== true
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
