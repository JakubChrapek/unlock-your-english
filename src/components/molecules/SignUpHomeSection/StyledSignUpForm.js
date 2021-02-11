import styled from "styled-components"

export const StyledSignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 646px) {
    width: 100%;
    padding: 0 40px;
  }
  @media only screen and (max-width: 424px) {
    padding: 0 20px;
  }
  > div {
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      @media only screen and (max-width: 767px) {
        flex-direction: column;
        align-items: center;
      }
      > input {
        @media only screen and (max-width: 875px) {
          width: 427px;
        }
        @media only screen and (max-width: 646px) {
          width: 306px;
        }
        /* @media only screen and (max-width: 446px) {
          width: 317px;
        } */
        @media only screen and (max-width: 362px) {
          width: 280px;
        }

        font-size: 18px;
        border: none;
        font-family: Raleway;
        line-height: 1.32em;
        border-radius: 25px;
        padding: 14px 12px;
        width: 527px;
        text-align: center;
        color: var(--black);
        &::placeholder {
          font-family: Raleway;
        }
        &:focus {
          outline: none;
        }
      }
      > button {
        @media only screen and (max-width: 767px) {
          order: 3;
          margin-top: 24px;
          margin-left: 0;
        }
        padding: 14px 12px;
        width: 132px;
        margin-left: 32px;
      }
    }
  }
`
