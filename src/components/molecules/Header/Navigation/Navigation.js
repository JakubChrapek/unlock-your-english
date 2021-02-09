import React from "react"
import { StyledNavigationList } from "../../../atoms/Navigation/StyledNavigationList"
import { StyledLink } from "../../../atoms/Link/StyledLink"

const Navigation = ({ showNav }) => {
  return (
    <StyledNavigationList showNav={showNav}>
      <li>
        <StyledLink
          to="/about"
          hasdeclaredfontfamily="Oswald"
          hasdeclaredfontweight="medium"
          hasdeclaredfontcolor="var(--white)"
          hasdeclaredfontsize="14px "
          activeClassName="active"
          hasdeclaredpadding="4px 8px"
          headerLink={true}
          mobileMenuLink={true}
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
          headerLink={true}
          mobileMenuLink={true}
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
          headerLink={true}
          mobileMenuLink={true}
        >
          Kontakt
        </StyledLink>
      </li>
    </StyledNavigationList>
  )
}

export default Navigation
