import type { FC } from "react"

import * as Styled from "./Link.styled"

type TLint = {
  link: string
  text: string
  targer: string
  isUppercase?: boolean
}

const Link: FC<TLint> = ({ link, text, targer, isUppercase = false }) => {
  return (
    <Styled.Link href={link} target={targer} isUppercaseText={isUppercase}>
      {text}
    </Styled.Link>
  )
}

export default Link
