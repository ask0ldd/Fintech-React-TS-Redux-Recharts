import '../styles/StatsHorizontalMenu.css'

function StatsHorizontalMenu(){
    return(
        <div className="statsMenu__container">
            <div className="statsMenu__items">Income</div>
            <div className="statsMenu__items">Expense</div>
            <div className="statsMenu__items">Balance</div>
            <div className="statsMenu__items">Subscriptions</div>
            <div className="statsMenu__items">Incomes</div>
        </div>
    )
}

export default StatsHorizontalMenu