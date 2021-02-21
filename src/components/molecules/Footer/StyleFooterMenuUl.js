import styled from "styled-components"

export const StyleFooterMenuUl = styled.ul`
  list-style-type: none;
  display: flex;
  li {
    cursor: pointer;
    margin-right: ${({ hasmarginright }) => (hasmarginright ? "37px" : "0")};
    &:last-child {
      margin-right: 0;
    }
    a {
      color: var(--black);
      @media only screen and (max-width: 1328px) {
        margin-right: ${({ hasmarginright }) =>
          hasmarginright ? "0" : "44px"};
      }
      @media only screen and (max-width: 1184px) {
        margin-right: ${({ hasmarginright }) =>
          hasmarginright ? "0" : "34px"};
      }
      @media only screen and (max-width: 767px) {
        margin: ${({ hasmarginright }) =>
          hasmarginright ? "0" : "0 4px 22px 4px"};
      }
    }
  }
`
