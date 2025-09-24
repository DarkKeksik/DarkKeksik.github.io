import type { FC } from "react"

import { Button } from "@shared/ui"

const onClickModal = () => {
  alert("I'm future modal")
}

const InfoblockWelcome: FC = () => {
  return <Button text="Open modal" onClickButton={onClickModal} />
}

export default InfoblockWelcome
