import React, { useEffect } from "react"
import { MenuProvider } from "../../context/menuContext"
import GlobalStyle from "../../styles/GlobalStyle"
import Header from "../organisms/Header/Header"
import Footer from "../organisms/Footer/Footer"
import SEO from "../../seo/seo"

const GlobalLayout = ({ children, location }) => {
  return (
    <>
      <MenuProvider>
        <GlobalStyle />
        <SEO />
        <Header theme={location.pathname !== "/" ? "dark" : "light"} />
        {console.log("Layout: ", location.pathname)}
        {children}
        <Footer />
      </MenuProvider>
    </>
  )
}

export default GlobalLayout
