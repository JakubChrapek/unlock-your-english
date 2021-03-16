import React, { useState } from "react"

import { useMenuState, useMenuDispatch } from "../../../context/menuContext"
import actions from "../../../context/actions"

import { useLocation } from "@reach/router"

import { StyledHamburgerButton } from "../../atoms/HamburgerButton/StyledHamburgerButton"
import Navigation from "../../molecules/Header/Navigation/Navigation"
import Logo from "../../molecules/Logo/Logo"

import { StyledHeader } from "../../atoms/Header/StyledHeader"
import { StyledHeaderWrapper } from "../../atoms/Header/StyledHeaderWrapper"
import { StyledHamburgerButtonSpan } from "../../atoms/HamburgerButton/StyledHamburgerButtonSpan"
import WhiteNavigation from "../../molecules/Header/Navigation/WhiteNavigation"

const Header = ({ theme }) => {
  const { show: mobile } = useMenuState()
  const [show, setShow] = useState(false)
  const dispatch = useMenuDispatch()
  let pathname = useLocation().pathname
  return (
    <StyledHeader>
      <div>
        <StyledHeaderWrapper>
          <Logo
            shownav={mobile}
            pathnameColor={theme === "dark" ? "var(--black)" : "var(--white)"}
          />
          
              <StyledHamburgerButton
                onClick={() => {
                  setShow(!show)
                  dispatch({ type: actions.TOGGLE_MENU })
                }}
              >
                <StyledHamburgerButtonSpan
                  shownav={mobile}
                  pathnameColor={theme === "dark" ? "var(--black)" : "var(--white)"}
                />
                <StyledHamburgerButtonSpan
                  hasdeclaredwidth="75%"
                  shownav={mobile}
                  pathnameColor={theme === "dark" ? "var(--black)" : "var(--white)"}
                />
              </StyledHamburgerButton>
          
        </StyledHeaderWrapper>
        {pathname === "/" ? <WhiteNavigation shownav={mobile}/> : <Navigation
          shownav={mobile}
          pathnameColor={theme === "light" ? "var(--white)" : "var(--black)"}
        />}
      </div>
    </StyledHeader>
  )
}

export default Header
