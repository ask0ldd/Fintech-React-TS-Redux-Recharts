import { createSlice } from "@reduxjs/toolkit";
import { IEmail, ISelectableEmail, emails } from "../datas/emailsDatas";

const initialState : messagingState = {
    emails : emailsToSelectableEmails(emails), // emails
    filteredEmails : emailsToSelectableEmails(emails), // filteredemails
    activePage : 1,
    sortingRule : {direction : 'desc', columnDatakey : 'date'},
    areAllDisplayedEmailsSelected : false
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
        switchAllEmailsSelectionStatus : (state, action) => {
            if(action.payload.state != null) return {...state, areAllDisplayedEmailsSelected : !state.areAllDisplayedEmailsSelected}
            return {...state, areAllDisplayedEmailsSelected : action.payload.status}
        },
        setTargetEmailToSelected : (state, action) => {

        },
        unselectAllEmails : (state, action) => {

        },
        deleteEmails : (state, action) => {

        }
    },
})

export const {setSortingRule, setActivePage, reset} = messagingSlice.actions

export default messagingSlice.reducer

interface messagingState{
    emails : Array<ISelectableEmail>
    filteredEmails : Array<ISelectableEmail>
    activePage : number
    sortingRule : {direction: 'asc' | 'desc', columnDatakey : string}
    areAllDisplayedEmailsSelected : boolean
}

function emailsToSelectableEmails(emailsList : Array<IEmail>){
    return emailsList.map(email => {
        const newEmail : ISelectableEmail = {...email, selected : false}
        return newEmail
    })
}