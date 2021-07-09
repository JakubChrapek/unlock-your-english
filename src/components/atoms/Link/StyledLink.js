import styled from "styled-components"
import { Link } from "gatsby"

export const StyledLink = styled(Link)`
  font-size: ${({ hasdeclaredfontsize }) =>
    hasdeclaredfontsize ? hasdeclaredfontsize : "16px"};
  font-weight: ${({ hasdeclaredfontweight }) =>
    hasdeclaredfontweight ? hasdeclaredfontweight : "normal"};
  color: ${({ hasdeclaredfontcolor }) =>
    hasdeclaredfontcolor ? hasdeclaredfontcolor : "var(--white)"};
  letter-spacing: ${({ hasdeclaredletterspacing }) =>
    hasdeclaredletterspacing ? hasdeclaredletterspacing : "0"};
  line-height: ${({ hasdeclaredlineheight }) =>
    hasdeclaredlineheight ? hasdeclaredlineheight : "1.3em"};
  font-family: ${({ hasdeclaredfontfamily }) =>
    hasdeclaredfontfamily ? hasdeclaredfontfamily : "Oswald, sans-serif;"};
  text-decoration: ${({ hasdeclaredtextdecoration }) =>
    hasdeclaredtextdecoration ? hasdeclaredtextdecoration : "none"};
  display: ${({ hasdeclareddisplay }) =>
    hasdeclareddisplay ? hasdeclareddisplay : "inline-block"};
  text-transform: ${({ hasdeclaredtexttransform }) =>
    hasdeclaredtexttransform ? hasdeclaredtexttransform : "none"};
  transform: ${({ hasdeclaredtransform }) =>
    hasdeclaredtransform ? hasdeclaredtransform : "translate(0,0)"};
  text-align: ${({ hasdeclaredtextalign }) =>
    hasdeclaredtextalign ? hasdeclaredtextalign : "left"};
  padding: ${({ hasdeclaredpadding }) =>
    hasdeclaredpadding ? hasdeclaredpadding : "0"};
  margin: ${({ hasdeclaredmargin }) =>
    hasdeclaredmargin ? hasdeclaredmargin : "0"};
  max-width: ${({ hasdeclaredmaxwidth }) =>
    hasdeclaredmaxwidth ? hasdeclaredmaxwidth : "none"};
  position: relative;
  cursor: pointer;
  @media only screen and (min-width: 1920px) {
    font-size: ${({ headerlink }) => (headerlink ? "22px" : "16px")};
  }
  @media only screen and (max-width: 767px) {
    color: ${({ mobilemenulink }) =>
      mobilemenulink ? "var(--black)" : "var(--white)"};
  }
  &:after {
    content: "";
    position: absolute;
    bottom: ${({ hasdeclaredbgbottomposition }) =>
      hasdeclaredbgbottomposition ? hasdeclaredbgbottomposition : "0px"};
    left: 0px;
    height: 1px;
    background-color: ${({ hasdeclaredbgcolor }) =>
      hasdeclaredbgcolor ? hasdeclaredbgcolor : "var(--red)"};
    width: 100%;
    transform: scale(0, 0);
    transform-origin: center bottom;
    transition: transform 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }

  &:hover,
  &:active,
  &:focus {
    &:after {
      transform: scaleY(1);
    }
  }
  &.active {
    &:after {
      transform: scaleY(1);
    }
  }
`
