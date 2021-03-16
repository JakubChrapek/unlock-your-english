import React, { useEffect } from "react"

import { useMenuState, useMenuDispatch } from "../../../../context/menuContext"
import actions from "../../../../context/actions"

import { StyledNavigationList } from "../../../molecules/Navigation/StyledNavigationList"
import { StyledLink } from "../../../atoms/Link/StyledLink"

const WhiteNavigation = ({ shownav, className }) => {
  const { show } = useMenuState()
  const dispatch = useMenuDispatch()

  return (
    <StyledNavigationList
      className={className}
      shownav={shownav}
    >
      <li>
        <StyledLink
          to="/o-mnie"
          hasdeclaredfontfamily="Oswald"
          hasdeclaredfontweight="medium"
          hasdeclaredfontcolor="var(--white)"
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
          hasdeclaredfontcolor="var(--white)"
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
          hasdeclaredfontcolor="var(--white)"
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

export default WhiteNavigation
