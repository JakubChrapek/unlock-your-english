import React, { useEffect, useState } from "react"
import { useLocation } from "@reach/router"

import { useMenuState, useMenuDispatch } from "../../../context/menuContext"
import actions from "../../../context/actions"

import { StyledHamburgerButton } from "../../atoms/HamburgerButton/StyledHamburgerButton"
import Navigation from "../../molecules/Header/Navigation/Navigation"
import Logo from "../../molecules/Logo/Logo"

import { StyledHeader } from "../../atoms/Header/StyledHeader"
import { StyledHeaderWrapper } from "../../atoms/Header/StyledHeaderWrapper"
import { StyledHamburgerButtonSpan } from "../../atoms/HamburgerButton/StyledHamburgerButtonSpan"

const Header = ({ location }) => {
  const { show: mobile } = useMenuState()
  const [show, setShow] = useState(false)
  const dispatch = useMenuDispatch()

  useEffect(() => {
    console.log(location)
  }, [location])

  return (
    <StyledHeader>
      <div>
        <StyledHeaderWrapper>
          <Logo
            shownav={mobile}
            pathnameColor={
              location.pathname && location.pathname !== "/"
                ? location.pathname
                : "/"
            }
          />
          <StyledHamburgerButton
            onClick={() => {
              setShow(!show)
              dispatch({ type: actions.TOGGLE_MENU })
            }}
          >
            <StyledHamburgerButtonSpan
              shownav={mobile}
              pathnameColor={
                location.pathname && location.pathname !== "/"
                  ? location.pathname
                  : "/"
              }
            />
            <StyledHamburgerButtonSpan
              hasdeclaredwidth="75%"
              shownav={mobile}
              pathnameColor={
                location.pathname && location.pathname !== "/"
                  ? location.pathname
                  : "/"
              }
            />
          </StyledHamburgerButton>
        </StyledHeaderWrapper>
        <Navigation
          shownav={mobile}
          pathnameColor={
            location.pathname && location.pathname !== "/"
              ? location.pathname
              : "/"
          }
        />
      </div>
    </StyledHeader>
  )
}

export default Header
