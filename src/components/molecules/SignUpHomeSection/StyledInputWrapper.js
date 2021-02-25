import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledInputWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  > div {
    &:first-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      > div {
        &:first-child {
          display: ${({ hidecheckbox }) => (hidecheckbox ? "none" : "block")};
        }
      }
      > input {
        display: ${({ hidecheckbox }) => (hidecheckbox ? "none" : "block")};
      }
    }
  }
  input {
    margin-top: 60px;
    @media only screen and (max-width: 875px) {
      width: 427px;
    }
    @media only screen and (max-width: 646px) {
      width: 306px;
      margin-top: 50px;
    }
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
  button {
    @media only screen and (max-width: 767px) {
      order: 3;
      margin-top: 24px;
      margin-left: 0;
      align-self: center;
    }
    padding: 14px 12px;
    width: 132px;
    margin-left: 22px;
    height: 51px;
    align-self: flex-end;
  }
`
