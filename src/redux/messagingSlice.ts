import { createSlice } from "@reduxjs/toolkit";
import { IEmail, ISelectableEmail, emails } from "../datas/emailsDatas";

const initialState : messagingState = {
    untouchedEmails : emailsToSelectableEmails(emails),
    emails : emailsToSelectableEmails(emails),
    activePage : 1,
    sortingRule : {direction : 'desc', columnDatakey : 'date'}
}

export const messagingSlice = createSlice({
    name : 'messaging',
    initialState,
    reducers : {
        // action : reducer fn
        reset : () => {
            return initialState
        },
        setSortingRule : (state, action) => {
            // !!! should check sortingrule in a more indepth way
            if(action.payload.sortingRule == null) return {...state}
            return {...state, sortingRule : action.payload.sortingRule}
        },
        setActivePage : (state, action) => {
            // !!! should check activepage in a more indepth way
            if(action.payload.activePage == null) return {...state}
            return {...state, activePage : action.payload.activePage}
        },
    },
})

export const {setSortingRule, setActivePage, reset} = messagingSlice.actions

export default messagingSlice.reducer

interface messagingState{
    untouchedEmails : Array<ISelectableEmail>
    emails : Array<ISelectableEmail>
    activePage : number
    sortingRule : {direction: 'asc' | 'desc', columnDatakey : string}
}

function emailsToSelectableEmails(emailsList : Array<IEmail>){
    return emailsList.map(email => {
        const newEmail : ISelectableEmail = {...email, selected : false}
        return newEmail
    })
}