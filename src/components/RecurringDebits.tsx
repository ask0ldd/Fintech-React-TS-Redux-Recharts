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
        <div className='recDebitsContainer'>
            <h2 className="debitsTitle">Recurring Debits</h2>
            {DebitsList.map((debit, index) => 
            <Debit 
                key={'debit'+index} 
                company={debit.company.toUpperCase()} 
                amount={formatAmount(debit.amount)}/>)}
            <div className='grid16'></div>
        </div>
    )
}

const Debit = ({company, amount} : DebitType) => {
    return(
        <article className="oneDebitContainer">
            <div className='debitDatas'>
                <div className='companynAmountContainer'>
                    <span className='debitRecipient'>{company}</span>
                    <span className={amount[0]!=='-' ? 'debitAmount' : 'debitAmountRed'}>{amount}</span>
                </div>
                <div className='debitDashes'></div>
            </div>
            <div className='debitArrow'>&gt;</div>
        </article>
    )
}

export default RecurringDebits