import React, { useEffect } from "react"
import { MenuProvider } from "../../context/menuContext"
import GlobalStyle from "../../styles/GlobalStyle"
import Header from "../organisms/Header/Header"
import Footer from "../organisms/Footer/Footer"
import SEO from "../../seo/seo"

import { useLocation } from "@reach/router"

const GlobalLayout = ({ children }) => {
  return (
    <>
      <MenuProvider>
        <GlobalStyle />
        <SEO />
        <Header theme={useLocation().pathname === "/" ? "light" : "dark"} />
        {children}
        <Footer />
      </MenuProvider>
    </>
  )
}

export default GlobalLayout
