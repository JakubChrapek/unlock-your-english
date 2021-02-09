import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StyledLogo } from "../../atoms/Logo/StyledLogo"
import Img from "gatsby-image"
const Logo = () => {
  const logoImage = useStaticQuery(graphql`
    query logo {
      datoCmsHeader {
        headerLogo {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  `)
  return (
    <StyledLogo>
      <Img fluid={logoImage.datoCmsHeader.headerLogo.fluid} />
    </StyledLogo>
  )
}

export default Logo
