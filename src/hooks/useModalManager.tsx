/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useReducer } from "react"
// import ModalHeader from "../ModalHeader"

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
    // initial visibility / initial content

    const [modalVisibility, setModalVisibility] = useState<boolean>(initialVisibility)
    const [modalContentId, setModalContentId] = useState<string>(initialModalContentId)
    // const [headerComponent, setHeaderComponent] = useState<JSX.Element>(ModalHeader({setModalVisibility})) /* set default modal header with props passed */
    /*let reducerState; let reducerDispatch;
    if (reducerFn) {[reducerState, reducerDispatch] = useReducer(reducerFn, reducerInitialState)}*/

    useEffect(() => {
  
        function keyboardListener(e : KeyboardEvent){
            if(e.code == "Escape" && modalVisibility) {e.preventDefault(); setModalVisibility(false)}
        }

        window.addEventListener('keydown', keyboardListener)

        // soutenance : clean up to avoid having two listeners active => since useEffect is triggered twice in strict mode
        return () => {
            window.removeEventListener('keydown', keyboardListener)
        }

    }, [])

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
    if(bool)
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
