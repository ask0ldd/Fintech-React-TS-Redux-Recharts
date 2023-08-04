import { createSlice } from "@reduxjs/toolkit";

const initialState : messagingState = {
    loginFailedValidation : false,
    editNamesFailedValidation : false,
}

export const messagingSlice = createSlice({
    name : 'forms',
    initialState,
    reducers : {
        // action : reducer fn
        reset : () => {
            return initialState
        },
        setLoginError : (state, action) => {
            if(action.payload.hasValidationFailed == null) return {...state}
            return {...state, loginFailedValidation : action.payload.hasValidationFailed}
        },
        setEditNamesError : (state, action) => {
            if(action.payload.hasValidationFailed == null) return {...state}
            return {...state, editNamesFailedValidation : action.payload.hasValidationFailed}
        },
    },
})

export const {setLoginError, setEditNamesError, reset} = messagingSlice.actions

export default messagingSlice.reducer

interface messagingState{
    loginFailedValidation : boolean
    editNamesFailedValidation : boolean
}