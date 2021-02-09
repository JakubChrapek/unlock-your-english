import styled from "styled-components"

export const StyledLeftBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 555px;
  justify-content: center;
  @media only screen and (max-width: 767px) {
    width: 340px;
  }
  > div {
    &:first-child {
      @media only screen and (max-width: 1094px) {
        width: 263px;
        height: 323px;
      }
      @media only screen and (max-width: 1078px) {
        width: 243px;
        height: 303px;
      }
      @media only screen and (max-width: 996px) {
        width: 223px;
        height: 283px;
      }
      @media only screen and (max-width: 911px) {
        width: 190px;
        height: 225px;
      }
    }
    &:nth-child(2) {
      @media only screen and (max-width: 1094px) {
        width: 191px;
        height: 243px;
        transform: translate(-20px, 66px);
      }
      @media only screen and (max-width: 1078px) {
        width: 171px;
        height: 223px;
      }
      @media only screen and (max-width: 996px) {
        width: 151px;
        height: 203px;
      }
      @media only screen and (max-width: 911px) {
        width: 146px;
        height: 178px;
        transform: translate(-20px, 40px);
      }
    }
    &:nth-child(3) {
      @media only screen and (max-width: 1094px) {
        width: 218px;
        height: 255px;
        transform: translate(0, -100px);
      }
      @media only screen and (max-width: 1078px) {
        width: 198px;
        height: 235px;
      }
      @media only screen and (max-width: 996px) {
        width: 178px;
        height: 215px;
      }
      @media only screen and (max-width: 911px) {
        width: 150px;
        height: 185px;
        transform: translate(0, -70px);
      }
    }
  }
`
