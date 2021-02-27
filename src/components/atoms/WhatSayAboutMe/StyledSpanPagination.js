import styled from "styled-components"

export const StyledSpanPagination = styled.span`
  width: 12px;
  height: 12px;
  border: 8px solid #fff;
  box-sizing: content-box;
  background-color: ${({ active }) => (active ? "var(--blue)" : "#e5e5e5")};
  border-radius: 50%;
  display: block;
  margin-right: 12px;
  cursor: pointer;
`
