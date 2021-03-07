import React from "react"

import { useMenuState, useMenuDispatch } from "../../../../context/menuContext"
import actions from "../../../../context/actions"

import { StyledNavigationList } from "../../../molecules/Navigation/StyledNavigationList"
import { StyledLink } from "../../../atoms/Link/StyledLink"

const Navigation = ({ shownav, pathnameColor, className }) => {
  const { show } = useMenuState()
  const dispatch = useMenuDispatch()

  return (
    <StyledNavigationList
      className={className}
      shownav={shownav}
      pathnameColor={pathnameColor}
    >
      <li>
        <StyledLink
          to="/o-mnie"
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
          onClick={() => show && dispatch({ type: actions.TOGGLE_MENU })}
        >
          O mnie
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to="/oferta"
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
          onClick={() => show && dispatch({ type: actions.TOGGLE_MENU })}
        >
          Oferta
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to="/kontakt"
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
          onClick={() => show && dispatch({ type: actions.TOGGLE_MENU })}
        >
          Kontakt
        </StyledLink>
      </li>
    </StyledNavigationList>
  )
}

export default Navigation
