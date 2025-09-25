import type { FC } from "react"

import * as Styled from "./MainPage.styled"

import { InfoblockWelcome } from "@features/index"

const MainPage: FC = () => {
  return (
    <Styled.Wrap>
      <Styled.ContentSection isInverted>
        <InfoblockWelcome />
      </Styled.ContentSection>
      <Styled.ContentSection>Another content</Styled.ContentSection>
      <Styled.ContentSection isInverted>Some content</Styled.ContentSection>
    </Styled.Wrap>
  )
}

export default MainPage
