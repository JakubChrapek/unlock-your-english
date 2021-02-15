import styled from "styled-components"

export const StyledMyOfferWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Slajdy zawsze muszą dotykać prawego skraju ekranu, więc lepiej zrezygnować z "trafienia" z szerokością
  1440 px do innych sekcji. */
  /* max-width: 1440px; */
  margin: 0 auto;
`
