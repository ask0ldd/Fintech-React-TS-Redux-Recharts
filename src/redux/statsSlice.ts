import { createSlice } from "@reduxjs/toolkit";

const datas : IDatas = [
    { month: 'Jan', financial : {income:3952, expenses:2927} },
    { month: 'Feb', financial : {income:5053, expenses:3502} },
    { month: 'Mar', financial : {income:4070, expenses:3012} },
    { month: 'Apr', financial : {income:5012, expenses:4231} },
    { month: 'May', financial : {income:3127, expenses:2843} },
    { month: 'Jun', financial : {income:4857, expenses:4152} },
    { month: 'Jul', financial : {income:3888, expenses:3675} },
    { month: 'Aug', financial : {income:4781, expenses:4307} },
    { month: 'Sep', financial : {income:3492, expenses:3210} },
    { month: 'Oct', financial : {income:4313, expenses:4107} },
    { month: 'Nov', financial : {income:4918, expenses:3115} },
    { month: 'Dec', financial : {income:4650, expenses:4153} },
]

export const initialState : statsState = {
    datas : datas,
    activePage : 'balance'
}

export const statsSlice = createSlice({
    name : 'stats',
    initialState,
    reducers : {
        setActivePage(state, action){
            if(action.payload?.page == 'inbox' 
            || action.payload?.page == 'expenses' 
            || action.payload?.page == 'balance' 
            || action.payload?.page == 'subbalance')
            return {...state, activePage : action.payload?.page}
        }
    }

})

export default statsSlice.reducer

interface statsState {
    datas : IDatas
    activePage : 'inbox' | 'expenses' | 'balance' | 'subbalance'
}

interface IDatas extends Array<IDatasRow > { }

interface IDatasRow{
    month: string
    financial: {income: number, expenses: number}
}