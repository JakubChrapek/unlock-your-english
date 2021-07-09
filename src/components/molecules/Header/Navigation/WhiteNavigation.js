import React from "react"

import { useMenuState, useMenuDispatch } from "../../../../context/menuContext"
import actions from "../../../../context/actions"

import { StyledNavigationList } from "../../../molecules/Navigation/StyledNavigationList"
import { StyledLink } from "../../../atoms/Link/StyledLink"
import { StyledText } from "../../../atoms/Text/StyledText"
import styled from "styled-components"

const PhoneContactLink = styled(StyledLink)`
  background-color: var(--red);
  color: var(--white);
  font-weight: bold;
  border-radius: 25px;
`

const WhiteNavigation = ({ shownav }) => {
  const { show } = useMenuState()
  const dispatch = useMenuDispatch()

  return (
    <StyledNavigationList shownav={shownav}>
      <li>
        <StyledText hasdeclaredfontcolor="#fff">
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
        </StyledText>
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
      <li>
        <StyledText hasdeclaredfontcolor="#fff">
          <PhoneContactLink
            hasdeclaredfontfamily="Oswald"
            hasdeclaredfontweight="medium"
            hasdeclaredfontcolor="#fff"
            hasdeclaredfontsize="14px "
            hasdeclaredpadding="4px 8px"
            headerlink="true"
            mobilemenulink="true"
            onClick={() => show && dispatch({ type: actions.TOGGLE_MENU })}
            as="a"
            href="tel:884889471"
          >
            884 889 471
          </PhoneContactLink>
        </StyledText>
      </li>
    </StyledNavigationList>
  )
}

export default WhiteNavigation
