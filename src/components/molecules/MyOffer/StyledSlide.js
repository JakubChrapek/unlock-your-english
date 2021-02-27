import styled from "styled-components"

export const StyledSlide = styled.div`
  min-width: 440px;
  margin-right: 40px;
  padding: 50px;
  position: relative;
  border-radius: 12px;
  -webkit-box-shadow: 10px 10px 50px 3px rgba(39, 92, 141, 0.1);
  box-shadow: 10px 10px 50px 3px rgba(39, 92, 141, 0.1);

  &:last-of-type {
    margin-right: 0;
  }
  &:first-of-type {
    margin-left: 50px;
  }

  @media only screen and (max-width: 600px) {
    min-width: calc(100vw - 80px);
    padding: 20px 20px 60px 30px;
    &:first-of-type {
      margin-left: 30px;
    }
  }
  @media only screen and (max-width: 347px) {
    h3 {
      font-size: 26px;
    }
    p {
      font-size: 16px;
      
        &:nth-child(2) {
          margin-bottom: 14px;
        }
      
    }
  }
`
