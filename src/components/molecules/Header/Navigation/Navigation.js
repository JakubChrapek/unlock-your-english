import React, { useEffect } from "react"

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
          hasDeclaredFontFamily="Oswald"
          hasDeclaredFontWeight="medium"
          hasDeclaredFontColor={pathnameColor}
          hasDeclaredFontSize="14px "
          activeClassName="active"
          hasDeclaredPadding="4px 8px"
          headerLink="true"
          mobileMenuLink="true"
          onClick={() => show && dispatch({ type: actions.TOGGLE_MENU })}
        >
          O mnie
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to="/oferta"
          hasDeclaredFontFamily="Oswald"
          hasDeclaredFontWeight="medium"
          hasDeclaredFontColor={pathnameColor}
          hasDeclaredFontSize="14px "
          activeClassName="active"
          hasDeclaredPadding="4px 8px"
          headerLink="true"
          mobileMenuLink="true"
          onClick={() => show && dispatch({ type: actions.TOGGLE_MENU })}
        >
          Oferta
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to="/kontakt"
          hasDeclaredFontFamily="Oswald"
          hasDeclaredFontWeight="medium"
          hasDeclaredFontColor={pathnameColor}
          hasDeclaredFontSize="14px "
          activeClassName="active"
          hasDeclaredPadding="4px 8px"
          headerLink="true"
          mobileMenuLink="true"
          onClick={() => show && dispatch({ type: actions.TOGGLE_MENU })}
        >
          Kontakt
        </StyledLink>
      </li>
    </StyledNavigationList>
  )
}

export default Navigation
