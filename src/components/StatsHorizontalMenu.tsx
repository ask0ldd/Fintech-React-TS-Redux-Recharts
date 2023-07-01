import { Link } from 'react-router-dom'
import '../styles/StatsHorizontalMenu.css'

function StatsHorizontalMenu({activeGraph} : IProps){
    return(
        <div className="statsMenu__container">
            <Link to="/stats/income" className={activeGraph === "income" ? "statsMenu__items statsMenu__itemsActive" : "statsMenu__items"}>Income</Link>
            <Link to="/stats/expenses" className={activeGraph === "expenses" ? "statsMenu__items statsMenu__itemsActive" : "statsMenu__items"}>Expense</Link>
            <Link to="/stats/balance" className={activeGraph === "balance" ? "statsMenu__items statsMenu__itemsActive" : "statsMenu__items"}>Income vs Expenses</Link>
            <div className="statsMenu__items">Balance</div>
            <div className="statsMenu__items">Incomes</div>
        </div>
    )
}

export default StatsHorizontalMenu

interface IProps{
    activeGraph: string
}