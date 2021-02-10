import React from "react"
import { StyledNavigationList } from "../../../atoms/Navigation/StyledNavigationList"
import { StyledLink } from "../../../atoms/Link/StyledLink"

const Navigation = ({ showNav, pathnameColor }) => {
  return (
    <StyledNavigationList showNav={showNav} pathnameColor={pathnameColor}>
      <li>
        <StyledLink
          to="/about"
          hasdeclaredfontfamily="Oswald"
          hasdeclaredfontweight="medium"
          hasdeclaredfontcolor={
            pathnameColor === "/" ? "var(--white)" : "var(--black)"
          }
          hasdeclaredfontsize="14px "
          activeClassName="active"
          hasdeclaredpadding="4px 8px"
          headerlink="true"
          mobilemenulink="true"
        >
          O mnie
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to="/offer"
          hasdeclaredfontfamily="Oswald"
          hasdeclaredfontweight="medium"
          hasdeclaredfontcolor={
            pathnameColor === "/" ? "var(--white)" : "var(--black)"
          }
          hasdeclaredfontsize="14px "
          activeClassName="active"
          hasdeclaredpadding="4px 8px"
          headerlink="true"
          mobilemenulink="true"
        >
          Oferta
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to="/contact"
          hasdeclaredfontfamily="Oswald"
          hasdeclaredfontweight="medium"
          hhasdeclaredfontcolor={
            pathnameColor === "/" ? "var(--white)" : "var(--black)"
          }
          hasdeclaredfontsize="14px "
          activeClassName="active"
          hasdeclaredpadding="4px 8px"
          headerlink="true"
          mobilemenulink="true"
        >
          Kontakt
        </StyledLink>
      </li>
    </StyledNavigationList>
  )
}

export default Navigation
