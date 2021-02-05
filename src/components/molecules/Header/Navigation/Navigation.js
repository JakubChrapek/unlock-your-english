import React from "react"
import { StyledNavigationList } from "../../../atoms/Navigation/StyledNavigationList"
import { StyledLink } from "../../../atoms/Link/StyledLink"

const Navigation = () => {
  return (
    <StyledNavigationList>
      <li>
        <StyledLink
          to="/about"
          hasdeclaredfontfamily="Oswald"
          hasdeclaredfontweight="medium"
          hasdeclaredfontcolor="var(--white)"
          hasdeclaredfontsize="14px "
          activeClassName="active"
          hasdeclaredpadding="4px 8px"
          hasdeclaredmargin="0 49px 0 0"
        >
          O mnie
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to="/offer"
          hasdeclaredfontfamily="Oswald"
          hasdeclaredfontweight="medium"
          hasdeclaredfontcolor="var(--white)"
          hasdeclaredfontsize="14px "
          activeClassName="active"
          hasdeclaredpadding="4px 8px"
          hasdeclaredmargin="0 49px 0 0"
        >
          Oferta
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to="/contact"
          hasdeclaredfontfamily="Oswald"
          hasdeclaredfontweight="medium"
          hasdeclaredfontcolor="var(--white)"
          hasdeclaredfontsize="14px "
          activeClassName="active"
          hasdeclaredpadding="4px 8px"
        >
          Kontakt
        </StyledLink>
      </li>
    </StyledNavigationList>
  )
}

export default Navigation
