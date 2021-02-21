import styled from "styled-components"

export const StyledImageWrapper = styled.div`
  width: 543px;
  height: 606px;
  position: relative;
  margin-top: 48px;
  @media only screen and (max-width: 1347px) {
    width: 503px;
    height: 566px;
  }
  @media only screen and (max-width: 1309px) {
    width: 464px;
    height: 526px;
  }
  @media only screen and (max-width: 1229px) {
    width: 424px;
    height: 486px;
  }
  @media only screen and (max-width: 1049px) {
    width: 384px;
    height: 446px;
  }
  @media only screen and (max-width: 1005px) {
    width: 344px;
    height: 406px;
    margin-top: 0;
  }
  @media only screen and (max-width: 897px) {
    width: 297px;
    height: 332px;
  }
  @media only screen and (max-width: 340px) {
    width: 277px;
    height: 312px;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 20px;
    bottom: -25px;
    background-color: var(--red);
    z-index: -1;
    @media only screen and (max-width: 1229px) {
      bottom: -15px;
    }
    @media only screen and (max-width: 1049px) {
      height: 95%;
      bottom: 0px;
    }
    @media only screen and (max-width: 897px) {
      height: 100%;
      bottom: -20px;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
`
