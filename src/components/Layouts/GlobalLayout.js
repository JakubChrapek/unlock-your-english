import React from "react"
import { MenuProvider } from "../../context/menuContext"
import GlobalStyle from "../../styles/GlobalStyle"
import Header from "../organisms/Header/Header"
import Footer from "../organisms/Footer/Footer"
import SEO from "../../seo/seo"

const GlobalLayout = ({ children }) => {
  return (
    <MenuProvider>
      <SEO />
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </MenuProvider>
  )
}

export default GlobalLayout
