import { ICryptoAsset, IDebitType, ITransactionType } from "../types/types";

export const CryptoDatas : Array <ICryptoAsset> = [
    {
        name:'Bitcoin',
        owned:36217.80,
        growth:6.00,
        dashes:true
    },
    {
        name:'Ethereum',
        owned:948.55,
        growth:3.00,
        dashes:false      
    }
]

export const DebitsList: Array <IDebitType> = [
    {
        company: 'Uber Taxi',
        amount: 120.00,
        dashes: true,
    },
    {
        company:'Direct Energy',
        amount:128.99,
        dashes: false,
    },    
]

export const TransactionsList: Array <ITransactionType> = [
    {
        company:'Uber Taxi',
        date:'02-13-2012',
        amount:948.55
    },
    {
        company:'AT&T',
        date:'02-14-2012',
        amount:19.99
    },    
    {
        company:'Ebay',
        date:'02-18-2012',
        amount:98.55
    },
    {
        company:'Ebay',
        date:'02-19-2012',
        amount:45.50
    },
    {
        company:'Air BnB',
        date:'02-22-2012',
        amount:-120.00
    },
    {
        company:'Direct Energy',
        date:'02-23-2012',
        amount:-60.00
    },
    /*{
        company:'Ebay',
        date:'02-26-2012',
        amount:70.25
    },*/
]