let NodeModal = document.getElementById('modal_funding')
let NodeBGModal = document.getElementById('modal_bg_funding')

let NodeBtnModalClose = document.getElementById('btn-modal-close')
let NodeBtnModalOpen = document.getElementById('btn-modal-open')
let NodeBtnModalApply = document.getElementById('btn-modal-apply')

const classNameOpenModal = "modal_showed"
const NodeTargetsCloseModal = [NodeBGModal, NodeBtnModalClose, NodeBtnModalApply]

const onTransitionEndAnimHide = ({ target }) => {
    if (target === NodeModal) {
        NodeModal.classList.add("display-none")
        NodeModal.setAttribute("aria-modal", "false")
        NodeModal.removeEventListener("transitionend", onTransitionEndAnimHide)
    }
}

const setHideModal = () => {
    NodeModal.classList.remove(classNameOpenModal)
    NodeModal.addEventListener("transitionend", onTransitionEndAnimHide)
}

const setShowModal = () => {
    NodeModal.classList.remove("display-none")
    
    // Выполняем после удаления display-none (после тика), анимацию и др
    requestAnimationFrame(() => {
        NodeModal.setAttribute("aria-modal", "true")
        NodeModal.classList.add(classNameOpenModal)
    })
}

// Что то на событийном (start)
document.addEventListener('keydown', ({ code }) => {
    if(code === "Escape") {
        setHideModal()
    }
})

NodeTargetsCloseModal.forEach((NodeEl) => {
    NodeEl.addEventListener("click", setHideModal)
})

NodeBtnModalOpen.addEventListener("click", setShowModal)
// Что то на событийном (end)