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
        <div className="statsPage__mainContainer">
            <VMenu activePage="stats" />
            <section className="headernGraph__container">
                <Header/>
                {activeGraph === 'balance' && <StatsHorizontalMenu activeGraph={activeGraph}/>}
                {activeGraph === 'balance' && <BalanceBarsChart/>}
                {activeGraph === 'income' && <StatsHorizontalMenu activeGraph={activeGraph}/>}
                {activeGraph === 'income' && <IncomeBarChart/>}
                {activeGraph === 'expenses' && <StatsHorizontalMenu activeGraph={activeGraph}/>}
                {activeGraph === 'expenses' && <ExpensesBarChart/>}
                {activeGraph === 'subbalance' && <StatsHorizontalMenu activeGraph={activeGraph}/>}
                {activeGraph === 'subbalance' && <BalanceSubBarChart/>}
               
            </section>
        </div>
    )
}

export default Stats