import React from "react"

import { useMenuState, useMenuDispatch } from "../../../../context/menuContext"
import actions from "../../../../context/actions"

import { StyledNavigationList } from "../../../molecules/Navigation/StyledNavigationList"
import { StyledLink } from "../../../atoms/Link/StyledLink"
import styled from "styled-components"

const PhoneContactLink = styled(StyledLink)`
  background-color: var(--red);
  color: var(--white);
  font-weight: bold;
  border-radius: 25px;
  &:after {
    content: none;
  }
`

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
          hasdeclaredfontcolor={pathnameColor}
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
          hasdeclaredfontcolor={pathnameColor}
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
          hasdeclaredfontcolor={pathnameColor}
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
      <li>
        <PhoneContactLink
          hasdeclaredfontfamily="Oswald"
          hasdeclaredfontweight="medium"
          hasdeclaredfontcolor={pathnameColor}
          hasdeclaredfontsize="13px "
          hasdeclaredpadding="6px 20px"
          headerlink="true"
          mobilemenulink="true"
          noBefore
          onClick={() => show && dispatch({ type: actions.TOGGLE_MENU })}
          as="a"
          href="tel:884889471"
        >
          884 889 471
        </PhoneContactLink>
      </li>
    </StyledNavigationList>
  )
}

export default Navigation
