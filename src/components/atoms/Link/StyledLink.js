import styled from "styled-components"
import { Link } from "gatsby"

export const StyledLink = styled(Link)`
  font-size: ${({ hasDeclaredFontSize }) =>
    hasDeclaredFontSize ? hasDeclaredFontSize : "16px"};
  font-weight: ${({ hasDeclaredFontWeight }) =>
    hasDeclaredFontWeight ? hasDeclaredFontWeight : "normal"};
  color: ${({ hasDeclaredFontColor }) => hasDeclaredFontColor};
  letter-spacing: ${({ hasdeclaredletterspacing }) =>
    hasdeclaredletterspacing ? hasdeclaredletterspacing : "0"};
  line-height: ${({ hasdeclaredlineheight }) =>
    hasdeclaredlineheight ? hasdeclaredlineheight : "1.3em"};
  font-family: ${({ hasDeclaredFontFamily }) =>
    hasDeclaredFontFamily ? hasDeclaredFontFamily : "Oswald, sans-serif;"};
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
  padding: ${({ hasDeclaredPadding }) =>
    hasDeclaredPadding ? hasDeclaredPadding : "0"};
  margin: ${({ hasdeclaredmargin }) =>
    hasdeclaredmargin ? hasdeclaredmargin : "0"};
  max-width: ${({ hasdeclaredmaxwidth }) =>
    hasdeclaredmaxwidth ? hasdeclaredmaxwidth : "none"};
  position: relative;
  cursor: pointer;
  @media only screen and (min-width: 1920px) {
    font-size: ${({ headerLink }) => (headerLink ? "22px" : "16px")};
  }
  @media only screen and (max-width: 767px) {
    color: ${({ mobileMenuLink }) =>
      mobileMenuLink ? "var(--black)" : "var(--white)"};
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
