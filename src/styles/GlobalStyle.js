import React from "react";
import { createGlobalStyle } from "styled-components";
import { useMenuState } from "../context/menuContext";

const Style = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *::before,
    *::after{
        box-sizing: inherit;
        margin: 0;
        padding: 0;
  }
`;

const GlobalStyle = () => {
  const { show } = useMenuState();
  return <Style showMenu={show} />;
};

export default GlobalStyle;
