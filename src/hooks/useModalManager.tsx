/* eslint-disable react-hooks/exhaustive-deps */
/* c8 ignore start */
import { useState, useEffect, useReducer } from "react"

/**
 * Function : Modal management tool.
 * @param {IModalObject} PassedObject
 * @param {boolean} PassedObject.initialVisibility - Should the modal be visible at creation ?
 * @param {JSX.element} PassedObject.content - React component to inject into the modal.
 * @return {Object.< modalVisibility: boolean, modalContent: JSX.element, headerComponent: JSX.element, setModalVisibility: function, setModalContent: function, setHeaderComponent: function >}
 * modalVisibility - Visibility of the modal.
 * modalContent - Component used as the body of the modal.
 * headerComponent - Component used as a modals header.
 * setModalVisibility - Sets the visibility of the modal.
 * setModalContent - Sets a new react component as the body of the modal.
 * setHeaderComponent - Set a new react component as the header of the modal.
 */
function useModalManager({initialVisibility, initialModalContentId/*reducerFn, reducerInitialState*/} : IModalObject){

    const [modalVisibility, setModalVisibility] = useState<boolean>(initialVisibility)
    const [modalContentId, setModalContentId] = useState<string>(initialModalContentId)

    useEffect(() => {
  
        function keyboardListener(e : KeyboardEvent){
            if(e.code == "Escape" && modalVisibility) {
                e.preventDefault(); 
                e.stopPropagation(); 
                setModalVisibility(false)
            }
        }

        window.addEventListener('keydown', keyboardListener)

        // clean up to avoid having two listeners active => since useEffect is triggered twice in strict mode
        return () => {
            window.removeEventListener('keydown', keyboardListener)
        }

    }, [modalVisibility, setModalVisibility])

    useEffect(() => {

        modalVisibility ? scrollLock(true) : scrollLock(false)

    }, [modalVisibility])

    return { modalVisibility, setModalVisibility, modalContentId, setModalContentId }
}

export default useModalManager

interface IModalObject{
    initialVisibility : boolean
    initialModalContentId : string
    // content : () => JSX.Element
    /*reducerFn? : () => any
    reducerInitialState? : any*/
}

function scrollLock(bool : boolean)
{
    if(bool === true)
    {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        window.onscroll = () => {
            window.scrollTo(scrollLeft, scrollTop)
        }
    }else{
        window.onscroll = () => {}
    }
}
