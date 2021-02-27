import styled from "styled-components"

export const StyledMyOfferWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  > h2 {
    @media only screen and (max-width: 600px) {
      padding-bottom: 10px;
      font-size: 36px;
    }
  }
`
