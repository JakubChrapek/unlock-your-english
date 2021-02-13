import styled from "styled-components"

export const StyledOfferTextWrapper = styled.div`
  p {
    ul {
      list-style-type: none;
      li {
        &::before {
          content: "-";
        }
      }
    }
    &::last-child {
      margin-bottom: 100px;
    }
  }
`
