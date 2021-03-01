import styled from "styled-components"

export const StyledOfferSiteItemWrapper = styled.div`
  max-width: 440px;
  padding: 50px;
  @media (max-width: 1366px) {
    padding: 40px;
  }
  height: 400px;
  box-shadow: 5px 10px 15px -6px rgba(0, 0, 0, 0.33);
  position: relative;
  place-self: center;
  border-radius: 8px;
  > div {
    display: flex;
    align-items: center;
    height: 100%;
    max-height: 100px;
    margin-bottom: 16px;
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
