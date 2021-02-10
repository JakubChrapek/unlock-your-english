import styled from "styled-components"

export const StyledLeftBar = styled.div`
  width: 422px;
  height: 500px;
  margin-left: 48px;
  border-radius: 25px;
  @media only screen and (max-width: 1155px) {
    width: 382px;
    height: 460px;
  }
  @media only screen and (max-width: 1097px) {
    width: 362px;
    height: 440px;
  }
  @media only screen and (max-width: 915px) {
    width: 322px;
    height: 400px;
    margin-left: 20px;
  }
  @media only screen and (max-width: 887px) {
    width: 302px;
    height: 382px;
  }
  @media only screen and (max-width: 767px) {
    width: 277px;
    height: 328px;
    margin-left: 0;
    margin-bottom: 40px;
  }
`
