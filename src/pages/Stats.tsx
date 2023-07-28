import { useParams } from "react-router-dom"
import BalanceBarsChart from "../components/Stats/BalanceBarsChart"
import IncomeBarChart from "../components/Stats/IncomeBarChart"
import Header from "../components/Header"
import StatsHorizontalMenu from "../components/StatsHorizontalMenu"
import VMenu from "../components/VMenu"
import '../styles/Stats.css'
import ExpensesBarChart from "../components/Stats/ExpensesBarChart"
import BalanceSubBarChart from "../components/Stats/BalanceSubBarChart"

function Stats(){

    const activeGraph : string = useParams().id || "balance"
    
    return(
        <main className="statsPage__mainContainer">
            <VMenu activePage="stats" />
            <section className="headernGraph__container">
                <Header format="uncompressed" username="Tony Montana" iban="NL89RABO1289364745" clientID='X458-89995'/>
                {activeGraph === 'balance' && <><StatsHorizontalMenu activeGraph={activeGraph}/><BalanceBarsChart/></>}
                {activeGraph === 'income' && <><StatsHorizontalMenu activeGraph={activeGraph}/><IncomeBarChart/></>}
                {activeGraph === 'expenses' && <><StatsHorizontalMenu activeGraph={activeGraph}/><ExpensesBarChart/></>}
                {activeGraph === 'subbalance' && <><StatsHorizontalMenu activeGraph={activeGraph}/><BalanceSubBarChart/></>}               
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