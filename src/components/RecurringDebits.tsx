import '../styles/RecurringDebits.css'
import { Formatter } from '../services/formatter'
import { IDebitType } from '../types/types'
import { DebitsList } from '../datas/datas'

const RecurringDebits = () => {

    return (
        <article className='recDebits__container'>
            <h2 className="debits__title">Recurring Debits</h2>
            {DebitsList.map((debit, index) => 
                <Debit 
                    key={'debit' + index} 
                    company={debit.company/*.toUpperCase()*/} 
                    amount={debit.amount}/>
            )}
            <div className='grid16'></div>
        </article>
    )
}

const Debit = ({company, amount} : IDebitType) => {

    const amountAsString = Formatter.addCurrencySignToAmount('$', amount)

    return(
        <article className="oneDebit__container">
            <div className='debit__datas'>
                <div className='companynAmount__container'>
                    <span className='debit__recipient'>{company}</span>
                    <span className={amountAsString[0]!=='-' ? 'debit__amount' : 'debit__amountRed'}>{amountAsString}</span>
                </div>
                <div className='debit__dashes'></div>
            </div>
            <div className='debit__arrow'>&gt;</div>
        </article>
    )
}

export default RecurringDebits