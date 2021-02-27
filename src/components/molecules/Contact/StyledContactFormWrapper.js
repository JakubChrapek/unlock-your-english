import styled from "styled-components"

export const StyledContactFormWrapper = styled.div`
  margin-right: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 1921px) {
    margin-right: 120px;
  }
  @media only screen and (max-width: 1489px) {
    margin-right: 160px;
  }
  @media only screen and (max-width: 1249px) {
    > h2 {
      font-size: 54px;
    }
    > h3 {
      font-size: 38px;
    }
  }
  @media only screen and (max-width: 1033px) {
    margin-right: 90px;
  }
  @media only screen and (max-width: 957px) {
    margin-right: 60px;
    > h2 {
      font-size: 50px;
    }
    > h3 {
      font-size: 36px;
    }
  }
  @media only screen and (max-width: 877px) {
    > h2 {
      font-size: 40px;
    }
    > h3 {
      font-size: 28px;
    }
  }
  @media only screen and (max-width: 767px) {
    margin-right: 0;
    > h2 {
      display: none;
    }
    > h3 {
      display: none;
    }
    > form {
      padding-top: 40px;
    }
  }
  > h2 {
    align-self: flex-start;
  }
`
