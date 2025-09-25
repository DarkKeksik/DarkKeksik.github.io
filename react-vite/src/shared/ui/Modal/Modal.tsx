import type { FC, PropsWithChildren } from "react"

import { Button } from "../"
import * as Styled from "./Modal.styled"

type TModal = PropsWithChildren<{ onClose: () => void; isVisible: boolean; title?: string }>

const Modal: FC<TModal> = ({ onClose, isVisible = false, children, title }) => {
  return (
    <Styled.Modal isVisible={isVisible}>
      <Styled.Background />

      <div className="h-w-100 flex-center-center p-20">
        <Styled.Content>
          <Styled.Title>{title}</Styled.Title>
          {children}
          <Styled.Panel>
            <Button onClickButton={onClose} text="Apply now" />
          </Styled.Panel>
        </Styled.Content>
      </div>
    </Styled.Modal>
  )
}

export default Modal
