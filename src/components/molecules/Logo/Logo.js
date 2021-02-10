import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StyledLogo } from "../../atoms/Logo/StyledLogo"
import Img from "gatsby-image"
const Logo = ({ pathnameColor }) => {
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
    <StyledLogo>
      <Img
        fluid={
          pathnameColor === "/"
            ? logoImage.datoCmsHeader.headerLogo.fluid
            : logoImage.datoCmsHeader.headerLogoColor.fluid
        }
        alt={
          pathnameColor === "/"
            ? logoImage.datoCmsHeader.headerLogo.alt
            : logoImage.datoCmsHeader.headerLogoColor.alt
        }
      />
    </StyledLogo>
  )
}

export default Logo
