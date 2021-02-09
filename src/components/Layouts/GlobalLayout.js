import React from "react"
import { MenuProvider } from "../../context/menuContext"
import GlobalStyle from "../../styles/GlobalStyle"
import Header from "../organisms/Header/Header"
import Footer from "../organisms/Footer/Footer"

const GlobalLayout = ({ children }) => {
  return (
    <MenuProvider>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </MenuProvider>
  )
}

export default GlobalLayout
