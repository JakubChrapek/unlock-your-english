import styled from "styled-components"

export const StyledOfferSiteItemWrapper = styled.div`
  max-width: 440px;
  padding: 50px;
  height: 400px;
  box-shadow: 5px 10px 15px -6px rgba(0, 0, 0, 0.33);
  position: relative;
  place-self: center;
  > div {
    display: flex;
    align-items: center;
    height: 100%;
    max-height: 100px;
    margin-bottom: 26px;
  }
  > p {
    position: absolute;
    bottom: 30px;
    left: 50px;
    @media only screen and (max-width: 767px) {
      color: var(--red);
    }
  }
`
