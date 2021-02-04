import React from "react";
import { MenuProvider } from "../../context/menuContext";
import GlobalStyle from "../../styles/GlobalStyle";
import Header from "../organisms/Header/Header";
const GlobalLayout = ({ children }) => {
  return (
    <MenuProvider>
      <GlobalStyle />
      <Header />
      <h1>Layout</h1>
      {children}
    </MenuProvider>
  );
};

export default GlobalLayout;
