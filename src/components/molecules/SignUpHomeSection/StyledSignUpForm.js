import styled from "styled-components"

export const StyledSignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > input {
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
`
