import { configureStore } from "@reduxjs/toolkit"
import messagingReducer, { initialState, setActivePage, setDisplayedEmails_IDList, setSortedEmails } from "./messagingSlice"
import { ISelectableEmail } from "../datas/emailsDatas"

export const store = configureStore({
    reducer: {
        messaging : messagingReducer
    },
    devTools : true,
  })

// export those types so they can be used globally : to type some redux hooks
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

store.subscribe(() => {
  handleStateChange()
})

let currentStoreValue = initialState

function handleStateChange(){
  const previousValue = currentStoreValue
  currentStoreValue = store.getState().messaging

  // activePage update? update the list of displayed emails
  if(previousValue.activePage !== currentStoreValue.activePage){
    store.dispatch(setDisplayedEmails_IDList({idList : generateDisplayedEmailsIDList([...store.getState().messaging.sortedEmails])}))
  }

  // emails update? update the list of displayed emails
  if(JSON.stringify(previousValue.emails) !== JSON.stringify(currentStoreValue.emails)) {
    console.log("emails changed")
    store.dispatch(setSortedEmails())
    store.dispatch(setDisplayedEmails_IDList({idList : generateDisplayedEmailsIDList([...store.getState().messaging.sortedEmails])}))
  }

  // sorting update? update the list of displayed emails
  if(JSON.stringify(previousValue.sortingRule) !== JSON.stringify(currentStoreValue.sortingRule)) {
    store.dispatch(setSortedEmails())
    store.dispatch(setDisplayedEmails_IDList({idList : generateDisplayedEmailsIDList([...store.getState().messaging.sortedEmails])}))
    store.dispatch(setActivePage({activePage : 1}))
  }

  if(previousValue.filter !== currentStoreValue.filter){
    store.dispatch(setSortedEmails())
    store.dispatch(setDisplayedEmails_IDList({idList : generateDisplayedEmailsIDList([...store.getState().messaging.sortedEmails])}))
    store.dispatch(setActivePage({activePage : 1}))
  }
}

function generateDisplayedEmailsIDList(sortedEmails : Array<ISelectableEmail>){ 
  const displayedEmails_IDs = []
  for(let index = (store.getState().messaging.activePage-1)*15; index < store.getState().messaging.activePage * 15; index++){
      displayedEmails_IDs.push(sortedEmails[index].id)
      if(sortedEmails[index+1]?.id == null) break;
  }
  return displayedEmails_IDs
}

export const frCollator = new Intl.Collator('en')