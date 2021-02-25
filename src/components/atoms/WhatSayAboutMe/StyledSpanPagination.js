import styled from "styled-components"

export const StyledSpanPagination = styled.span`
  width: 12px;
  height: 12px;
  background-color: #e5e5e5;
  background-color: ${({ active }) => (active ? "var(--blue)" : "#e5e5e5")};
  border-radius: 50%;
  display: block;
  margin-right: 20px;
  cursor: pointer;
`
