import React from "react"
import { StyledHamburgerButton } from "../../atoms/HamburgerButton/StyledHamburgerButton"

import Navigation from "../../molecules/Header/Navigation/Navigation"
import Logo from "../../molecules/Logo/Logo"

import { StyledHeader } from "../../atoms/Header/StyledHeader"
import { StyledHeaderWrapper } from "../../atoms/Header/StyledHeaderWrapper"

import { useMenuState, useMenuDispatch } from "../../../context/menuContext"
import actions from "../../../context/actions"

const Header = () => {
  const { show } = useMenuState()
  const dispatch = useMenuDispatch()

  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <Logo />
        <Navigation showNav={show} />
        <StyledHamburgerButton
          onClick={() => {
            dispatch({ type: actions.TOGGLE_MENU })
          }}
          showNav={show}
        />
      </StyledHeaderWrapper>
    </StyledHeader>
  )
}

export default Header
