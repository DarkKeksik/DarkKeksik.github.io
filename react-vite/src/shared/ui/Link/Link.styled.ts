import styled, { css, keyframes } from "styled-components"

type TLink = {
  isUppercaseText?: boolean
}

const growLine = keyframes`
  from {
    width: 0;
  }
  to {
    width: 75%;
  }
`

export const Link = styled.a<TLink>`
  position: relative;
  font-size: 12px;
  font-weight: 600;
  color: var(--links-color);
  letter-spacing: 0.5px;

  ${({ isUppercaseText }) =>
    isUppercaseText &&
    css`
      text-transform: uppercase;
    `}

  before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    background: var(--bg-buttons);
    border-radius: 5px;
  }

  .link:hover:before {
    animation: calc(${({ theme }) => theme.main.transitionDuration} / 10) ease-in both running
      ${growLine};
  }
`
