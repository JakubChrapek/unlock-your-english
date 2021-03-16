import React, { useEffect } from "react"

import { useMenuState, useMenuDispatch } from "../../../../context/menuContext"
import actions from "../../../../context/actions"

import { StyledNavigationList } from "../../../molecules/Navigation/StyledNavigationList"
import { StyledLink } from "../../../atoms/Link/StyledLink"
import { StyledText } from "../../../atoms/Text/StyledText"

const WhiteNavigation = ({ shownav }) => {
  const { show } = useMenuState()
  const dispatch = useMenuDispatch()

  return (
    <StyledNavigationList
      shownav={shownav}
    >
      <li>
            <StyledLink
            to="/o-mnie"
            hasdeclaredfontfamily="Oswald"
            hasdeclaredfontweight="medium"
            hasdeclaredfontsize="14px "
            activeClassName="active"
            hasdeclaredpadding="4px 8px"
            hasdeclaredfontcolor="#fff"
            headerlink="true"
            mobilemenulink="true"
            onClick={() => show && dispatch({ type: actions.TOGGLE_MENU })}
            >
                O mnie
            </StyledLink>
      </li>
      <li>
          <StyledText hasdeclaredfontcolor="#fff">
            <StyledLink
            to="/oferta"
            hasdeclaredfontfamily="Oswald"
            hasdeclaredfontweight="medium"
            hasdeclaredfontsize="14px "
            activeClassName="active"
            hasdeclaredpadding="4px 8px"
            headerlink="true"
            mobilemenulink="true"
            onClick={() => show && dispatch({ type: actions.TOGGLE_MENU })}
            >
                Oferta
            </StyledLink>
          </StyledText>
        
      </li>
      <li>
          <StyledText hasdeclaredfontcolor="#fff">
            <StyledLink
            to="/kontakt"
            hasdeclaredfontfamily="Oswald"
            hasdeclaredfontweight="medium"
            hasdeclaredfontsize="14px "
            activeClassName="active"
            hasdeclaredpadding="4px 8px"
            headerlink="true"
            mobilemenulink="true"
            onClick={() => show && dispatch({ type: actions.TOGGLE_MENU })}
            >
            Kontakt
            </StyledLink>
          </StyledText>
      </li>
    </StyledNavigationList>
  )
}

export default WhiteNavigation
