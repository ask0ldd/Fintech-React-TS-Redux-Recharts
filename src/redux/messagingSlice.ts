import { createSlice } from "@reduxjs/toolkit";
import { IEmail, ISelectableEmail, emails } from "../datas/emailsDatas";

const initialState : messagingState = {
    emails : emailsToSelectableEmails(emails), // emails
    // filteredEmails : emailsToSelectableEmails(emails), // filteredemails
    activePage : 1,
    sortingRule : {direction : 'desc', columnDatakey : 'date', datatype : 'date'},
    filter : null,
    selectAllCheckboxStatus : false
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
            const datatype = action.payload?.datatype || null
            const datakey = action.payload?.datakey || null
            let direction = action.payload?.direction || null
            if(datatype == null || datakey == null) return

            if(direction != null){
                return {...state, sortingRule : {direction : direction, columnDatakey : action.payload.datakey, datatype : action.payload.datatype}}
            }

            if(datatype === 'date') return {...state, sortingRule : {direction : 'desc', columnDatakey : action.payload.datakey, datatype : action.payload.datatype}}

            return {...state, sortingRule : {direction : 'asc', columnDatakey : action.payload.datakey, datatype : action.payload.datatype}}
        },
        setFilter : (state, action) => {
            if(action.payload.filter == null) return
            if(action.payload.filter === "toread" || action.payload.filter === "file")
                return {...state, filter : action.payload.filter}
        },
        setActivePage : (state, action) => {
            // !!! should check activepage in a more indepth way
            console.log({...state})
            if(action.payload.activePage == null) return
            return {...state, activePage : action.payload.activePage}
        },
        switchSelectAllCheckboxStatus : (state, action) => {
            if(action.payload.state != null) return {...state, selectAllCheckboxStatus : !state.selectAllCheckboxStatus}
            return {...state, selectAllCheckboxStatus : action.payload.status}
        },
        setTargetEmailSelectStatus : (state, action) => {
            if(action.payload.emailId == null) return
            // error cause no deep cloning : const emailsDuplicate = [...state.emails]
            // deep cloning version :
            const emailsDuplicate = state.emails.map(email => {return {...email}})
            const targetEmailIndex = emailsDuplicate.findIndex(email => email.id === action.payload.emailId)
            if (action.payload.status != null) {
                emailsDuplicate[targetEmailIndex].selected = action.payload.status
            }else{
                emailsDuplicate[targetEmailIndex].selected = !emailsDuplicate[targetEmailIndex].selected
            }
            return{...state, emails : emailsDuplicate}
        },
        unselectAllEmails : (state, action) => {
            const unselectedEmails = [...state.emails].map(email => { return {...email, selected : false}})
            return {...state, areAllDisplayedEmailsSelected : false, emails : unselectedEmails}
        },
        deleteEmail : (state, action) => {
            if(action.payload.emailId == null) return
            const emailsDuplicate = state.emails.map(email => {return {...email}})
            const targetEmailIndex = emailsDuplicate.findIndex(email => email.id === action.payload.emailId)
            emailsDuplicate.splice(targetEmailIndex, 1)
            return{...state, emails : emailsDuplicate}
        }
    },
})

export const {
    setSortingRule, 
    setActivePage,
    setFilter,
    reset, 
    switchSelectAllCheckboxStatus, 
    setTargetEmailSelectStatus, 
    unselectAllEmails, 
    deleteEmail
} = messagingSlice.actions

export default messagingSlice.reducer

interface messagingState{
    emails : Array<ISelectableEmail>
    // filteredEmails : Array<ISelectableEmail>
    activePage : number
    sortingRule : {direction: 'asc' | 'desc', columnDatakey : string, datatype : 'date' | 'string' | 'number'}
    filter : "toread" | "file" | null
    selectAllCheckboxStatus : boolean
}

function emailsToSelectableEmails(emailsList : Array<IEmail>){
    return emailsList.map(email => {
        const newEmail : ISelectableEmail = {...email, selected : false}
        return newEmail
    })
}