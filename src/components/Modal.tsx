import { useEffect, useRef } from 'react'
import '../styles/Modal.css'

function Modal({modalVisibility, setModalVisibility, modalContent, containerCSSClass} : IProps){

    const dialogRef = useRef<HTMLDialogElement>(null)
    const modalVisibilityRef = useRef(modalVisibility)
    
    useEffect(() => {
        if(modalVisibilityRef && !dialogRef.current?.open) return dialogRef.current?.showModal()
        if(!modalVisibilityRef && dialogRef.current?.open) return dialogRef.current?.close()
    })
    
    return (
        modalVisibility ? <dialog ref={dialogRef} >
            {modalContent}
        </dialog> : <>aaa</>
    )
}

export default Modal

interface IProps{
    modalVisibility : boolean
    modalContent : /*() => */JSX.Element
    containerCSSClass? : string
    setModalVisibility : (bool : boolean) => void
}