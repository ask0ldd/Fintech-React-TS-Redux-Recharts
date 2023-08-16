import { useParams } from "react-router-dom"
import BalanceBarsChart from "../components/Stats/BalanceBarsChart"
import IncomeBarChart from "../components/Stats/IncomeBarChart"
import Header from "../components/Header"
import StatsHorizontalMenu from "../components/StatsHorizontalMenu"
import VMenu from "../components/VMenu"
import '../styles/Stats.css'
import ExpensesBarChart from "../components/Stats/ExpensesBarChart"
import BalanceSubBarChart from "../components/Stats/BalanceSubBarChart"

export const datas : IDatas = [
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

function Stats(){

    const activeGraph : string = useParams().id || "balance"
    
    return(
        <main className="statsPage__mainContainer">
            <VMenu activePage="stats" />
            <section className="headernGraph__container">
                <Header format="uncompressed" username="Tony Montana" iban="NL89RABO1289364745" clientID='X458-89995'/>
                {activeGraph === 'balance' && <><StatsHorizontalMenu activeGraph={activeGraph}/><BalanceBarsChart datas={datas}/></>}
                {activeGraph === 'income' && <><StatsHorizontalMenu activeGraph={activeGraph}/><IncomeBarChart datas={datas}/></>}
                {activeGraph === 'expenses' && <><StatsHorizontalMenu activeGraph={activeGraph}/><ExpensesBarChart datas={datas}/></>}
                {activeGraph === 'subbalance' && <><StatsHorizontalMenu activeGraph={activeGraph}/><BalanceSubBarChart datas={datas}/></>}               
            </section>
        </main>
    )
}

export default Stats

export interface IDatas extends Array<IDatasRow > { }

interface IDatasRow{
    month: string
    financial: {income: number, expenses: number}
}