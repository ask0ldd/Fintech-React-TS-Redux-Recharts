import { ReactNode, useEffect, useRef } from 'react'
import '../styles/Modal.css'

function Modal({children, modalVisibility, setModalVisibility, /*modalContent,*/ containerCSSClass} : IProps){

    const dialogRef = useRef<HTMLDialogElement>(null)
    const modalVisibilityRef = useRef<boolean>(modalVisibility)
    
    useEffect(() => {
        if(modalVisibilityRef && !dialogRef.current?.open) return dialogRef.current?.showModal()
        if(!modalVisibilityRef && dialogRef.current?.open) return dialogRef.current?.close()
    })
    
    // needs to pass setModalVisibility to modalContent
    return (
        <dialog data-testid="modal" ref={dialogRef} onClick={(e) => { if (e.target === dialogRef.current) setModalVisibility(false) }} onCancel={(e) => e.preventDefault()}>
            {children}
        </dialog> 
    )
}

export default Modal

interface IProps{
    children: ReactNode
    modalVisibility : boolean
    // modalContent : JSX.Element
    containerCSSClass? : string
    setModalVisibility : (bool : boolean) => void
}