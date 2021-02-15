import styled from "styled-components"

export const StyledCheckboxWrapper = styled.div`
  display: ${({ hidecheckbox }) => (hidecheckbox ? "none" : "flex")};
  align-items: center;
  margin-top: 23px;
  input {
    display: none;
  }
  label {
    position: relative;
    transform: translateX(24px);
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      width: 24px;
      height: 24px;
      background-color: var(--white);
      left: -44px;
      top: 0;
      box-shadow: 5px 5px 14px -4px rgba(0, 0, 0, 0.2);
    }
    > svg {
      position: absolute;
      left: -44px;
      top: 0;
      opacity: 0;
      transition: opacity 250ms ease-in-out;
    }
    > p {
      @media only screen and (max-width: 480px) {
        max-width: 200px;
        text-align: center;
      }
    }
  }

  input[type="checkbox"]:checked + label > svg {
    opacity: 0.5;
    color: #2e3a59;
  }
`
