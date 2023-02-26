import '../styles/RecurringDebits.css'

const DebitsList = [
    {
        company:'Uber Taxi',
        amount:948.55
    },
    {
        company:'Direct Energy',
        amount:128.99
    },    
]

const formatAmount = (amount : number) : string => {
    return amount >= 0 ? '$'+amount.toFixed(2) : '-$'+amount.toFixed(2).toString().slice(1)
}

const RecurringDebits = () => {

    return (
        <div className='recDebitsContainer'>
            <h2 className="debitsTitle">Recurring Debits</h2>

        </div>
    )
}

export default RecurringDebits