import React, { useEffect, useState } from "react"

import { useMenuState, useMenuDispatch } from "../../../context/menuContext"
import actions from "../../../context/actions"

import { StyledHamburgerButton } from "../../atoms/HamburgerButton/StyledHamburgerButton"
import Navigation from "../../molecules/Header/Navigation/Navigation"
import Logo from "../../molecules/Logo/Logo"

import { StyledHeader } from "../../atoms/Header/StyledHeader"
import { StyledHeaderWrapper } from "../../atoms/Header/StyledHeaderWrapper"
import { StyledHamburgerButtonSpan } from "../../atoms/HamburgerButton/StyledHamburgerButtonSpan"

const Header = ({ theme }) => {
  const { show: mobile } = useMenuState()
  const [show, setShow] = useState(false)
  const dispatch = useMenuDispatch()

  return (
    <StyledHeader>
      <div>
        {console.log("Header", theme)}
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
        <Navigation
          shownav={mobile}
          pathnameColor={theme === "dark" ? "var(--black)" : "var(--white)"}
        />
      </div>
    </StyledHeader>
  )
}

export default Header
