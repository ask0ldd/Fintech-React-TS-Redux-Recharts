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

interface DebitType {
    company: string
    amount: string
}

const RecurringDebits = () => {

    return (
        <article className='recDebits__container'>
            <h2 className="debits__title">Recurring Debits</h2>
            {DebitsList.map((debit, index) => 
            <Debit 
                key={'debit'+index} 
                company={debit.company.toUpperCase()} 
                amount={formatAmount(debit.amount)}/>)}
            <div className='grid16'></div>
        </article>
    )
}

const Debit = ({company, amount} : DebitType) => {
    return(
        <article className="oneDebit__container">
            <div className='debit__datas'>
                <div className='companynAmount__container'>
                    <span className='debit__recipient'>{company}</span>
                    <span className={amount[0]!=='-' ? 'debit__amount' : 'debit__amountRed'}>{amount}</span>
                </div>
                <div className='debit__dashes'></div>
            </div>
            <div className='debit__arrow'>&gt;</div>
        </article>
    )
}

export default RecurringDebits