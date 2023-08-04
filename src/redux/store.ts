import { configureStore } from "@reduxjs/toolkit"
import messagingReducer from "./messagingSlice"

export const store = configureStore({
    reducer: {
        messaging : messagingReducer
    },
    devTools : true,
  })

// set auth cookies when persistentConnection + state token not null
/*store.subscribe(() => {
  const currentState = store.getState()
  if(currentState.auth.token != null && currentState.auth.email != null 
  && cookiesManager.getToken() == null && cookiesManager.getEmail() == null 
  && currentState.auth.persistentConnection) 
    cookiesManager.setAuthCookies(currentState.auth.email, currentState.auth.token)
})*/

// !!! si token cookie => set state cookie + logged cookie state synchroniser

// export those types so they can be used globally : to type some redux hooks
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store