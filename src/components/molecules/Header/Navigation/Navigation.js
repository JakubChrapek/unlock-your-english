import React from "react"
import { StyledNavigationList } from "../../../atoms/Navigation/StyledNavigationList"
import { StyledLink } from "../../../atoms/Link/StyledLink"

import { useMenuState, useMenuDispatch } from "../../../../context/menuContext"
import actions from "../../../../context/actions"
const Navigation = ({ showNav, pathnameColor }) => {
  const { show } = useMenuState()
  const dispatch = useMenuDispatch()

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
          onClick={() =>
            show === true ? dispatch({ type: actions.TOGGLE_MENU }) : null
          }
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
          onClick={() =>
            show === true ? dispatch({ type: actions.TOGGLE_MENU }) : null
          }
        >
          Oferta
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to="/contact"
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
          onClick={() =>
            show === true ? dispatch({ type: actions.TOGGLE_MENU }) : null
          }
        >
          Kontakt
        </StyledLink>
      </li>
    </StyledNavigationList>
  )
}

export default Navigation
