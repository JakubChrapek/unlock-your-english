import styled from "styled-components"

export const StyledLeftBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 555px;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 340px;
  }
  @media only screen and (max-width: 369px) {
    width: 320px;
    padding-left: 20px;
  }
  > div {
    &:first-child {
      @media only screen and (max-width: 1400px) {
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
      @media only screen and (max-width: 420px) {
        width: 187px;
        height: 222px;
      }
      @media only screen and (max-width: 369px) {
        width: 170px;
        height: 205px;
      }
    }
    &:nth-child(2) {
      @media only screen and (max-width: 1400px) {
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
      @media only screen and (max-width: 420px) {
        width: 152px;
        height: 188px;
      }
      @media only screen and (max-width: 369px) {
        width: 126px;
        height: 193px;
      }
    }
    &:nth-child(3) {
      @media only screen and (max-width: 1400px) {
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
      @media only screen and (max-width: 420px) {
        width: 140px;
        height: 175px;
      }
      @media only screen and (max-width: 369px) {
        width: 130px;
        height: 165px;
      }
    }
  }
`
