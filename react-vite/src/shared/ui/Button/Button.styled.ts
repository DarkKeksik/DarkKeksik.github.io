import styled, { css } from "styled-components"

type TSize = "s" | "m" | "l"
type TType = "red"

type TButton = {
  size?: TSize
  type?: TType
}

export const Button = styled.button<TButton>`
  min-width: 130px;
  border-radius: 12px;
  padding: 7px 16px;
  font-size: 1rem;
  font-weight: 500;
  transition-duration: ${({ theme }) => theme.main.transitionDuration};
  cursor: pointer;

  ${({ type, theme }) => {
    switch (type) {
      case "red":
        return css`
          border: 2px solid ${theme.main.bgButtons};
          background: ${theme.main.bgButtons};
          color: ${theme.main.colorButtons};

          &:hover {
            background: ${theme.main.hoverBgButtons};
            border-color: ${theme.main.hoverBgButtons};
          }

          &:active {
            border-color: ${theme.main.bgButtons};
            background: ${theme.main.colorButtons};
            color: ${theme.main.colorText};
          }
        `
    }
  }}
`
