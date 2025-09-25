import styled, { css } from "styled-components"

type TModal = {
  isVisible: boolean
}

export const Modal = styled.div<TModal>`
  position: fixed;
  top: 0;
  width: 100%;
  max-height: 0;
  height: 100%;
  overflow: hidden;
  font-family: ${({ theme }) => theme.main && theme.main.fontFamily};
  transition-duration: calc(${({ theme }) => theme.main.transitionDuration} * 1.5);

  ${({ isVisible }) => css`
    ${isVisible
      ? css`
          max-height: 100%;
        `
      : css`
          max-height: 0;
        `}
  `}
`

export const Title = styled.h2`
  max-width: 90%;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
`

export const Description = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
`

export const Background = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.main.bgModal};
  z-index: 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  position: relative;
  padding: 32px 44px 32px 44px;
  max-width: calc(700px / 1rem * 1rem);
  width: 100%;
  min-height: calc(380px / 1rem * 1rem);
  box-sizing: border-box;

  background: ${({ theme }) => theme.main.bgModalContent};
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.main.colorModalBorder};
  overflow: hidden;
  z-index: 1;
`

export const Panel = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 12px;
`
