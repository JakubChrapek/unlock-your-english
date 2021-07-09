import React from "react"

import { useMenuState, useMenuDispatch } from "../../../../context/menuContext"
import actions from "../../../../context/actions"

import { StyledNavigationList } from "../../../molecules/Navigation/StyledNavigationList"
import { StyledLink } from "../../../atoms/Link/StyledLink"
import { StyledText } from "../../../atoms/Text/StyledText"
import styled from "styled-components"
import { FaPhone } from "react-icons/fa"
import { PhoneContactLink } from "./PhoneContactLink"

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
            hasdeclaredfontsize="13px "
            hasdeclaredpadding="0.3em 1em"
            mobilemenulink="true"
            noBefore
            onClick={() => show && dispatch({ type: actions.TOGGLE_MENU })}
            as="a"
            href="tel:884889471"
          >
            884 889 471
            <FaPhone size="20px" color="var(--white)" />
          </PhoneContactLink>
        </StyledText>
      </li>
    </StyledNavigationList>
  )
}

export default WhiteNavigation
