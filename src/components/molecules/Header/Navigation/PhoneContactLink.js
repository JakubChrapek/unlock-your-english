import React from "react"
import styled from "styled-components"
import { StyledLink } from "../../../atoms/Link/StyledLink"

export const PhoneContactLink = styled(StyledLink)`
  background-color: var(--red);
  color: var(--white);
  font-weight: bold;
  border-radius: 25px;
  font-size: 0.9em;
  &:after {
    content: none;
  }
  svg {
    margin-left: 0.5em;
    width: 1em;
    height: 1em;
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:hover svg {
    transform: rotate(-8deg);
  }
`
