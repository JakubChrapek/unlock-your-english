import styled from "styled-components"

export const StyledOfferItemsWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  @media (max-width: 1366px) {
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  }
  padding: 75px 40px;
`
