import styled from "styled-components"

export const StyledImageWrapper = styled.div`
  width: 538px;
  height: 645px;
  transform: translateX(-70px);
  position: relative;
  @media only screen and (min-width: 1921px) {
    transform: translateX(0);
  }
  @media only screen and (max-width: 1639px) {
    width: 508px;
    height: 615px;
    transform: translateX(-50px);
  }
  @media only screen and (max-width: 1441px) {
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
  @media only screen and (max-width: 780px) {
    width: 328px;
    height: 425px;
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
    @media only screen and (max-width: 1639px) {
      bottom: -3px;
      height: 87%;
    }
    @media only screen and (max-width: 1441px) {
      bottom: 4px;
    }
    @media only screen and (max-width: 1249px) {
      bottom: 20px;
      height: 83%;
    }
    @media only screen and (max-width: 1033px) {
      bottom: 40px;
      height: 80%;
    }
    @media only screen and (max-width: 780px) {
      bottom: 20px;
      height: 84%;
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
