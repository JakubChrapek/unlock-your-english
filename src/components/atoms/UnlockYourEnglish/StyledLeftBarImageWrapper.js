import styled from "styled-components"

export const StyledLeftBarImageWrapper = styled.div`
  width: ${({ hasdeclaredwidth }) =>
    hasdeclaredwidth ? hasdeclaredwidth : "0"};
  height: ${({ hasdeclaredheight }) =>
    hasdeclaredheight ? hasdeclaredheight : "0"};
  padding: ${({ hasDeclaredPadding }) =>
    hasDeclaredPadding ? hasDeclaredPadding : "0"};
  margin: ${({ hasdeclaredmargin }) =>
    hasdeclaredmargin ? hasdeclaredmargin : "0"};

  background-color: ${({ hasdeclaredbgcolor }) =>
    hasdeclaredbgcolor ? hasdeclaredbgcolor : "var(--white)"};
  transform: ${({ hasdeclaredtransform }) =>
    hasdeclaredtransform ? hasdeclaredtransform : "none"};
  border-radius: 15px;
`
