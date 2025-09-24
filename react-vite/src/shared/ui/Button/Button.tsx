import type { FC } from "react"

import * as Styled from "./Button.styled"

type TSize = "s" | "m" | "l"
type TType = "red"

type TButton = {
  size?: TSize
  type?: TType
  text: string
  onClickButton: () => void
}

const Button: FC<TButton> = ({ size, text, type = "red", onClickButton }) => {
  return (
    <Styled.Button onClick={onClickButton} {...{ size, type }}>
      {text}
    </Styled.Button>
  )
}

export default Button
