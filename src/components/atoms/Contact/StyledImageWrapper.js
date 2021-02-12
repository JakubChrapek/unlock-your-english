import styled from "styled-components"

export const StyledImageWrapper = styled.div`
  width: 578px;
  height: 685px;
  transform: translateX(-70px);
  position: relative;
  @media only screen and (max-width: 1347px) {
    width: 478px;
    height: 585px;
    transform: translateX(-50px);
  }
  @media only screen and (max-width: 1249px) {
    width: 378px;
    height: 485px;
    transform: translateX(-30px);
  }
  @media only screen and (max-width: 1033px) {
    width: 338px;
    height: 455px;
    transform: translateX(-20px);
  }
  @media only screen and (max-width: 767px) {
    align-self: flex-start;
  }
  @media only screen and (max-width: 546px) {
    width: 193px;
    height: 229px;
  }
  &::after {
    content: "";
    width: 100%;
    height: 89%;
    background-color: var(--red);
    position: absolute;
    bottom: -15px;
    right: -15px;
    z-index: -2;
    @media only screen and (max-width: 1347px) {
      bottom: 4px;
      height: 87%;
    }
    @media only screen and (max-width: 1249px) {
      bottom: 20px;
      height: 83%;
    }
    @media only screen and (max-width: 1033px) {
      bottom: 40px;
      height: 80%;
    }
    @media only screen and (max-width: 767px) {
      bottom: 37px;
    }
    @media only screen and (max-width: 546px) {
      bottom: -15px;
      height: 93%;
    }
  }
`
