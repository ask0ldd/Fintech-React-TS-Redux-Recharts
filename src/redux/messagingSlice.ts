import { createSlice } from "@reduxjs/toolkit";
import { /*IEmail, */ISelectableEmail, emails } from "../datas/emailsDatas";

export const initialState : messagingState = {
    emails : emails,
    sortedEmails : [...emails].sort((a,b) => dateToTime(b['date']) - dateToTime(a['date'])),
    activePage : 1,
    sortingRule : {direction : 'desc', columnDatakey : 'date', datatype : 'date'},
    filter : null,
    selectAllCheckboxStatus : false,
    displayedEmails_IDList : generateInitialDisplayedEmailsIDList([...emails].sort((a,b) => dateToTime(b['date']) - dateToTime(a['date'])))
}

export const messagingSlice = createSlice({
    name : 'messaging',
    initialState,
    reducers : {
        /* c8 ignore start */
        // personal memo : action : reducer fn
        reset : () => {
            return initialState
        },
        /* c8 ignore stop */
        setSortingRule : (state, action) => {
            const datatype = action.payload?.datatype || null
            const datakey = action.payload?.datakey || null
            const direction = action.payload?.direction || null

            if(datatype == null || datakey == null) return

            /* c8 ignore next 3 */
            if(direction != null){
                return {...state, sortingRule : {direction : direction, columnDatakey : datakey, datatype : datatype}}
            }

            // if the col to sort is currently sorted & no direction has been given => just invert the direction
            if(state.sortingRule.columnDatakey === datakey) return {...state, sortingRule : {direction : invertDirection(state.sortingRule.direction), columnDatakey : datakey, datatype : datatype}}

            // if the col to sort is not currently sorted & no direction has been given => default direction implied by the datatype
            if(datatype === 'date') return {...state, sortingRule : {direction : 'desc', columnDatakey : datakey, datatype : datatype}}
            return {...state, sortingRule : {direction : 'asc', columnDatakey : datakey, datatype : datatype}}
        },

        // pushing to state all emails after filtering & sorting
        setSortedEmails : (state) => {
            // filtering
            const filteringFn = (email : ISelectableEmail) => {
                if(state.filter==="toread") return email.read != true
                if(state.filter==="file") return email.file != null
                return true
            }
            const filteredEmails = [...state.emails].map(email => {return {...email}}).filter(filteringFn)
            // sorting
            if(state.sortingRule.datatype === 'date'){
                const sortedEmails = state.sortingRule.direction === 'asc' ? 
                    [...filteredEmails].sort((a,b) => dateToTime(a[state.sortingRule.columnDatakey as keyof typeof a] as string) - dateToTime(b[state.sortingRule.columnDatakey as keyof typeof b] as string))
                    : [...filteredEmails].sort((a,b) => dateToTime(b[state.sortingRule.columnDatakey as keyof typeof b] as string) - dateToTime(a[state.sortingRule.columnDatakey as keyof typeof a] as string))
                return {...state, sortedEmails : sortedEmails}
            }
            const sortedEmails = state.sortingRule.direction === 'asc' ? 
                [...filteredEmails].sort((a,b) => frCollator.compare(a[state.sortingRule.columnDatakey as keyof typeof a] as string, b[state.sortingRule.columnDatakey as keyof typeof b] as string))
                : [...filteredEmails].sort((a,b) => frCollator.compare(b[state.sortingRule.columnDatakey as keyof typeof b] as string, a[state.sortingRule.columnDatakey as keyof typeof a] as string))
            return {...state, sortedEmails : sortedEmails}
        },

        // defining the filtering rules
        setFilter : (state, action) => {
            const filter = action.payload?.filter || null
            if(filter == null) return
            if(filter === "toread" || filter === "file")
                return {...state, filter : filter}
        },

        // push a ID list of the currently visible inbox emails
        // (useful to restrict the field of action of select all )
        setDisplayedEmails_IDList : (state, action) => {
            if(action.payload.idList == null) return
            return {...state, displayedEmails_IDList : action.payload.idList}
        },

        // set a selected inbox page as the visible one
        setActivePage : (state, action) => {
            // !!! should check activepage in a more indepth way
            if(action.payload.activePage == null) return
            const unselectedEmails = [...state.emails].map(email => { return {...email, selected : false}})
            return {...state, activePage : action.payload.activePage, selectAllCheckboxStatus : false, emails : unselectedEmails}
        },

        // invert the status of "select all mails" checkbox
        switchSelectAllCheckboxStatus : (state, action) => {
            if(action.payload.checkboxStatus == null) {
                const emailsDuplicate = state.emails.map(email => {
                    return state.displayedEmails_IDList.includes(email.id) ? {...email, selected : !state.selectAllCheckboxStatus} : {...email}
                })
                return {...state, selectAllCheckboxStatus : !state.selectAllCheckboxStatus, emails : emailsDuplicate}
            }
            /* c8 ignore next */
            return {...state, selectAllCheckboxStatus : action.payload.checkboxStatus} // should update select prop of the emails too
        },

        // set the selection status of a target email
        setTargetEmailSelectStatus : (state, action) => {
            if(action.payload.emailId == null) return
            // error cause no deep cloning : const emailsDuplicate = [...state.emails]
            // deep cloning version :
            const emailsDuplicate = state.emails.map(email => {return {...email}})
            const targetEmailIndex = emailsDuplicate.findIndex(email => email.id === action.payload.emailId)
            /* c8 ignore next 2 */
            if (action.payload.status != null) {
                emailsDuplicate[targetEmailIndex].selected = action.payload.status
            }else{
                emailsDuplicate[targetEmailIndex].selected = !emailsDuplicate[targetEmailIndex].selected
            }
            return{...state, emails : emailsDuplicate}
        },

        /* c8 ignore next 4 */
        unselectAllEmails : (state, action) => {
            const unselectedEmails = [...state.emails].map(email => { return {...email, selected : false}})
            return {...state, areAllDisplayedEmailsSelected : false, emails : unselectedEmails}
        },

        deleteEmail : (state, action) => {
            if(action.payload.emailId == null) return
            const emailsDuplicate = state.emails.map(email => {return {...email, selected : false}})
            const targetEmailIndex = emailsDuplicate.findIndex(email => email.id === action.payload.emailId)
            emailsDuplicate.splice(targetEmailIndex, 1)
            return{...state, emails : emailsDuplicate}
        },

        deleteSelectedEmails : (state) => {
            const notSelectedEmails = state.emails.filter(email => email.selected === false)
            return{...state, emails : notSelectedEmails, selectAllCheckboxStatus : false, activePage : 1}
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
    setDisplayedEmails_IDList,
    setSortedEmails
} = messagingSlice.actions

export default messagingSlice.reducer

interface messagingState{
    emails : Array<ISelectableEmail>
    sortedEmails : Array<ISelectableEmail>
    activePage : number
    sortingRule : {direction: 'asc' | 'desc', columnDatakey : string, datatype : 'date' | 'string' | 'number'}
    filter : "toread" | "file" | null
    selectAllCheckboxStatus : boolean
    displayedEmails_IDList : Array<number>
}

function invertDirection(direction : string){
    return direction === 'asc' ? 'desc' : 'asc'
}

function dateToTime(date : string){
    const [month, day, year] = date.split('/')
    return new Date(parseInt(year), parseInt(month), parseInt(day)).getTime()
}

export function generateInitialDisplayedEmailsIDList(sortedEmails : Array<ISelectableEmail>){ 
    const displayedEmails_IDs = []
    for(let index = 0; index < 15; index++){
        displayedEmails_IDs.push(sortedEmails[index].id)
        if(sortedEmails[index+1]?.id == null) break;
    }
    return displayedEmails_IDs
}

export const frCollator = new Intl.Collator('en')

/*function emailsToSelectableEmails(emailsList : Array<IEmail>){
    return emailsList.map(email => {
        const newEmail : ISelectableEmail = {...email, selected : false}
        return newEmail
    })
}*/