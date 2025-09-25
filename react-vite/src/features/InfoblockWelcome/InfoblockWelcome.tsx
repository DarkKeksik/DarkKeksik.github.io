import { useState, type FC } from "react"
import { createPortal } from "react-dom"

import { FormFunding } from "@entities/index"
import { Button } from "@shared/ui"

const InfoblockWelcome: FC = () => {
  const [isOpen, setIsOpen] = useState(true)

  const onOpenModal = () => {
    setIsOpen(true)
  }

  const onCloseModal = () => {
    setIsOpen(false)
  }

  console.log("isOpen ", isOpen)

  return (
    <>
      <Button text="Open modal" onClickButton={onOpenModal} />
      {createPortal(<FormFunding onClose={onCloseModal} isOpenModal={isOpen} />, document.body)}
    </>
  )
}

export default InfoblockWelcome
