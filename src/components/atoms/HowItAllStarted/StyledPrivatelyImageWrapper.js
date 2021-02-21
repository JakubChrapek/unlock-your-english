import styled from "styled-components"

export const StyledPrivatelyImageWrapper = styled.div`
  width: 527px;
  height: 738px;
  position: absolute;
  right: 0;
  top: 150px;
  @media only screen and (max-width: 1199px) {
    width: 487px;
    height: 698px;
  }
  @media only screen and (max-width: 1135px) {
    width: 447px;
    height: 658px;
  }
  @media only screen and (max-width: 1089px) {
    width: 407px;
    height: 618px;
  }
  @media only screen and (max-width: 909px) {
    width: 357px;
    height: 558px;
    top: 170px;
  }
  @media only screen and (max-width: 871px) {
    width: 337px;
    height: 538px;
    top: 190px;
  }
  @media only screen and (max-width: 767px) {
    position: relative;
    top: 40px;
    right: 0;
    width: 263px;
    height: 367px;
  }
  &::after {
    content: "";
    width: 104%;
    height: 100%;
    position: absolute;
    right: 0;
    bottom: -25px;
    background-color: var(--red);
    z-index: -2;
    @media only screen and (max-width: 1199px) {
      bottom: -15px;
    }
    @media only screen and (max-width: 1135px) {
      height: 97%;
      bottom: 0;
    }
    @media only screen and (max-width: 1089px) {
      height: 92%;
      bottom: 20px;
    }
    @media only screen and (max-width: 909px) {
      bottom: 30px;
    }
    @media only screen and (max-width: 871px) {
      bottom: 40px;
      height: 88%;
    }
    @media only screen and (max-width: 767px) {
      bottom: -20px;
      height: 100%;
    }
  }
`
