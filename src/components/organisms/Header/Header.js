import React from "react";
import { StyledHamburgerButton } from "../../atoms/HamburgerButton/StyledHamburgerButton";

import Navigation from "../../molecules/Header/Navigation/Navigation";

import { useMenuState, useMenuDispatch } from "../../../context/menuContext";
import actions from "../../../context/actions";
const Header = () => {
  const { show } = useMenuState();
  const dispatch = useMenuDispatch();

  return (
    <div>
      <Navigation showNav={show} />
      <StyledHamburgerButton
        onClick={() => {
          dispatch({ type: actions.TOGGLE_MENU });
        }}
        showNav={show}
      >
        button
      </StyledHamburgerButton>
      Header
    </div>
  );
};

export default Header;
