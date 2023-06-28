export interface IDebitType {
    company: string
    amount: number
}

export interface ITransactionType {
    company: string
    date: string
    amount: number
}

export interface ICryptoAsset {
    name:string
    owned:number
    growth:number
    dashes:boolean
}

export interface IRow{
    name:string
    avatar:string
    inQuicklist:boolean
}