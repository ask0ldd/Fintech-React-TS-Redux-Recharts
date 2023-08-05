import { createSlice } from "@reduxjs/toolkit";
import { IEmail, ISelectableEmail, emails } from "../datas/emailsDatas";

const initialState : messagingState = {
    emails : emailsToSelectableEmails(emails), // emails
    // filteredEmails : emailsToSelectableEmails(emails), // filteredemails
    activePage : 1,
    sortingRule : {direction : 'desc', columnDatakey : 'date', datatype : 'date'},
    filter : null,
    selectAllCheckboxStatus : false,
    displayedEmails_IDList : []
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
            const direction = action.payload?.direction || null

            if(datatype == null || datakey == null) return

            if(direction != null){
                return {...state, sortingRule : {direction : direction, columnDatakey : datakey, datatype : datatype}}
            }

            // if the col to sort is currently sorted & no direction has been given => just invert the direction
            if(state.sortingRule.columnDatakey === datakey) return {...state, sortingRule : {direction : invertDirection(state.sortingRule.direction), columnDatakey : datakey, datatype : datatype}}

            // if the col to sort is not currently sorted & no direction has been given => default direction implied by the datatype
            if(datatype === 'date') return {...state, sortingRule : {direction : 'desc', columnDatakey : datakey, datatype : datatype}}
            return {...state, sortingRule : {direction : 'asc', columnDatakey : datakey, datatype : datatype}}
        },
        setFilter : (state, action) => {
            const filter = action.payload?.filter || null
            if(filter == null) return
            if(filter === "toread" || filter === "file")
                return {...state, filter : filter}
        },
        setDisplayedEmails_IDList : (state, action) => {
            if(action.payload.idList == null) return
            return {...state, displayedEmails_IDList : action.payload.idList}
        },
        setActivePage : (state, action) => {
            // !!! should check activepage in a more indepth way
            if(action.payload.activePage == null) return
            const unselectedEmails = [...state.emails].map(email => { return {...email, selected : false}})
            return {...state, activePage : action.payload.activePage, selectAllCheckboxStatus : false, emails : unselectedEmails}
        },
        switchSelectAllCheckboxStatus : (state, action) => {
            if(action.payload.checkboxStatus == null) {
                const emailsDuplicate = state.emails.map(email => {
                    return state.displayedEmails_IDList.includes(email.id) ? {...email, selected : !state.selectAllCheckboxStatus} : {...email}
                })
                return {...state, selectAllCheckboxStatus : !state.selectAllCheckboxStatus, emails : emailsDuplicate}
            }
            return {...state, selectAllCheckboxStatus : action.payload.checkboxStatus}
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
        },
        deleteSelectedEmails : (state) => {
            const notSelectedEmails = state.emails.filter(email => email.selected===false)
            return{...state, emails : notSelectedEmails, selectAllCheckboxStatus : false}
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
    deleteEmail,
    deleteSelectedEmails,
    setDisplayedEmails_IDList
} = messagingSlice.actions

export default messagingSlice.reducer

interface messagingState{
    emails : Array<ISelectableEmail>
    // filteredEmails : Array<ISelectableEmail>
    activePage : number
    sortingRule : {direction: 'asc' | 'desc', columnDatakey : string, datatype : 'date' | 'string' | 'number'}
    filter : "toread" | "file" | null
    selectAllCheckboxStatus : boolean
    displayedEmails_IDList : Array<number>
}

function emailsToSelectableEmails(emailsList : Array<IEmail>){
    return emailsList.map(email => {
        const newEmail : ISelectableEmail = {...email, selected : false}
        return newEmail
    })
}

function invertDirection(direction : string){
    return direction === 'asc' ? 'desc' : 'asc'
}