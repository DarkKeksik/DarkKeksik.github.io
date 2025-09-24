import styled, { css } from "styled-components"

type TContentSection = {
  isInverted?: boolean
}

export const ContentSection = styled.section<TContentSection>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  height: calc(500px / 1rem * 1rem);

  ${({ isInverted = false }) => {
    if (!isInverted) {
      return
    }

    return css`
      background: #3c3c3c;
      color: white;
    `
  }}
`
