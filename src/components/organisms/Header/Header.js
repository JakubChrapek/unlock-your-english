import React, { useState } from "react"
import { useLocation } from "@reach/router"

import { useMenuState, useMenuDispatch } from "../../../context/menuContext"
import actions from "../../../context/actions"

import { StyledHamburgerButton } from "../../atoms/HamburgerButton/StyledHamburgerButton"
import Navigation from "../../molecules/Header/Navigation/Navigation"
import Logo from "../../molecules/Logo/Logo"

import { StyledHeader } from "../../atoms/Header/StyledHeader"
import { StyledHeaderWrapper } from "../../atoms/Header/StyledHeaderWrapper"
import { StyledHamburgerButtonSpan } from "../../atoms/HamburgerButton/StyledHamburgerButtonSpan"

const Header = () => {
  const { show: mobile } = useMenuState()
  const [show, setShow] = useState(false)
  const dispatch = useMenuDispatch()
  let pathname = useLocation().pathname

  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <Logo showNav={mobile} pathnameColor={pathname} />
        <StyledHamburgerButton
          onClick={() => {
            setShow(!show)
            dispatch({ type: actions.TOGGLE_MENU })
          }}
        >
          <StyledHamburgerButtonSpan
            showNav={mobile}
            pathnameColor={pathname}
          />
          <StyledHamburgerButtonSpan
            hasdeclaredwidth="75%"
            showNav={mobile}
            pathnameColor={pathname}
          />
        </StyledHamburgerButton>
      </StyledHeaderWrapper>
      <Navigation showNav={mobile} pathnameColor={pathname} />
    </StyledHeader>
  )
}

export default Header
