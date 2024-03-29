import { Link } from 'react-router-dom'
import '../../styles/StatsHorizontalMenu.css'

function StatsHorizontalMenu({activeGraph} : IProps){
    return(
        <nav className="statsMenu__container" aria-label='secondary'>
            <Link role="button" to="/stats/income" className={activeGraph === "income" ? "statsMenu__items statsMenu__itemsActive" : "statsMenu__items"}>Income</Link>
            <Link role="button" to="/stats/expenses" className={activeGraph === "expenses" ? "statsMenu__items statsMenu__itemsActive" : "statsMenu__items"}>Expense</Link>
            <Link role="button" to="/stats/balance" className={activeGraph === "balance" ? "statsMenu__items statsMenu__itemsActive" : "statsMenu__items"}>Income vs Expenses</Link>
            <Link role="button" to="/stats/subbalance" className={activeGraph === "subbalance" ? "statsMenu__items statsMenu__itemsActive" : "statsMenu__items"}>Balance</Link>
            <div className="statsMenu__items">Misc</div>
        </nav>
    )
}

export default StatsHorizontalMenu

interface IProps{
    activeGraph: string
}