import { useParams } from "react-router-dom"
import BalanceBarsChart from "../components/BalanceBarsChart"
import IncomeBarChart from "../components/IncomeBarChart"
import Header from "../components/Header"
import StatsHorizontalMenu from "../components/StatsHorizontalMenu"
import VMenu from "../components/VMenu"
import '../styles/Stats.css'
import ExpensesBarChart from "../components/ExpensesBarChart"
import BalanceSubBarChart from "../components/BalanceSubBarChart"

function Stats(){
    const activeGraph = useParams().id
    
    return(
        <main className="statsPage__mainContainer">
            <VMenu activePage="stats" />
            <section className="headernGraph__container">
                <Header format="uncompressed" username="Tony Montana" iban="NL89RABO1289364745" clientID='X458-89995'/>
                {activeGraph === 'balance' && <StatsHorizontalMenu activeGraph={activeGraph}/>}
                {activeGraph === 'balance' && <BalanceBarsChart/>}
                {activeGraph === 'income' && <StatsHorizontalMenu activeGraph={activeGraph}/>}
                {activeGraph === 'income' && <IncomeBarChart/>}
                {activeGraph === 'expenses' && <StatsHorizontalMenu activeGraph={activeGraph}/>}
                {activeGraph === 'expenses' && <ExpensesBarChart/>}
                {activeGraph === 'subbalance' && <StatsHorizontalMenu activeGraph={activeGraph}/>}
                {activeGraph === 'subbalance' && <BalanceSubBarChart/>}
               
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