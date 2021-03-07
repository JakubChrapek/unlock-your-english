import React from "react"
import { createGlobalStyle } from "styled-components"
import { useMenuState } from "../context/menuContext"

const Style = createGlobalStyle`
    html{
        --red: #CE152B;
        --black: #000000;
        --gray: #23242A;
        --blue: #1D3E84;
        --white: #FFF;
    }

    body {
      &.no-js {
        visibility: hidden;
      }
    }
    
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
`

const GlobalStyle = () => {
  const { show } = useMenuState()
  return <Style showMenu={show} />
}

export default GlobalStyle
