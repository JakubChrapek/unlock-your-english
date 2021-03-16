import React from "react"
import { MenuProvider } from "../../context/menuContext"
import GlobalStyle from "../../styles/GlobalStyle"
import Header from "../organisms/Header/Header"
import Footer from "../organisms/Footer/Footer"
import SEO from "../../seo/seo"

import { useLocation } from "@reach/router"

const GlobalLayout = ({ children }) => {
  let pathname = useLocation().pathname

  const getThemeFromPathname = name =>{
    if(name === "/"){
      return "light"
    }else{
      return "dark"
    }
  }

  return (
    <>
      <MenuProvider>
        <GlobalStyle />
        <SEO />
        <Header theme={getThemeFromPathname(pathname)} />
        {children}
        <Footer />
      </MenuProvider>
    </>
  )
}

export default GlobalLayout
