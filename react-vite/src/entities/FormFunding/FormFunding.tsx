import type { PropsWithChildren, FC } from "react"

import { Modal } from "@shared/ui"

import * as Styled from "./FormFunding.styled"

type TFormFunding = { isOpenModal?: boolean }

const FormFunding: FC<TFormFunding> = ({ onClose, isOpenModal = false }) => {
  return (
    <Modal title="Get the Business Funding You Need" isVisible={isOpenModal} onClose={onClose}>
      <Styled.Description>
        <Styled.DescriptionItem>
          <Styled.Text>
            Expand your business with a&nbsp;flexible loan tailored to&nbsp;your needs. Whether
            you’re investing in&nbsp;new equipment, increasing inventory, or&nbsp;boosting cash
            flow, we&nbsp;offer quick approvals and competitive rates to&nbsp;keep your business
            growing.
          </Styled.Text>
        </Styled.DescriptionItem>
        <Styled.DescriptionItem></Styled.DescriptionItem>
      </Styled.Description>
    </Modal>
  )
}

export default FormFunding
