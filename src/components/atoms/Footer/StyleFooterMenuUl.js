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
    }
  }
`
