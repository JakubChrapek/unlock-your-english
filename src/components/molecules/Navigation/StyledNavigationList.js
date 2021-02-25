import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledNavigationList = styled(motion.ul)`
  list-style-type: none;
  display: flex;
  @media only screen and (max-width: 1680px) {
    li {
      a {
        font-size: 24px;
      }
    }
  }
  @media only screen and (max-width: 1400px) {
    li {
      a {
        font-size: 22px;
      }
    }
  }
  @media only screen and (max-width: 989px) {
    li {
      a {
        font-size: 20px;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: var(--white);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    opacity: ${({ shownav }) => (shownav ? "1" : "0")};
    transform: ${({ shownav }) =>
      shownav ? "translateY(0)" : "translateY(-300px)"};
    z-index: 1;
    transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
  }
  li {
    margin-right: 78px;
    @media only screen and (max-width: 990px) {
      margin-right: 48px;
    }
    @media only screen and (max-width: 767px) {
      margin-right: 0;
      margin-bottom: 37px;
      &:first-child {
        margin-top: 148px;
      }
      &:last-child {
        margin-bottom: 100px;
      }
      a {
        font-size: 16px;
      }
    }
    &:last-child {
      margin-right: 0;
    }
  }
`
