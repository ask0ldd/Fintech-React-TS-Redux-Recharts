import '../styles/Transactions.css'
import { Formatter } from '../services/formatter'
import { ITransactionType } from '../types/types'
import { TransactionsList } from '../datas/datas'
import { useState } from 'react'

const Transactions = () => {

    const [isTextDelayed, setTextHasDelayed] = useState<boolean>(false)

    return (
        <article className="transactions__container">
            <h2 className="transactions__title">Last Transactions</h2>
            {TransactionsList.map((transac, index) => 
                <Transaction 
                key={'transac'+index} 
                company={transac.company/*.toUpperCase()*/} 
                date={transac.date} 
                amount={transac.amount}/>
            )}
            <div className='grid16'></div>
        </article>
      )
}

const Transaction = ({company, date, amount} : ITransactionType) => {

    const formatedAmount = Formatter.addCurrencySignToAmount('$', amount)

    return(
        <article className="oneTransaction__container">
            <div className='transaction__datas'>
                <div className='transaction__recipient'><span className={'delayed__text'}>{company}</span><div className='default__loading loading__mgp2'></div></div>
                <div className='datenAmount__container'>
                    <span className='transaction__date delayed__text'>{date}</span><span className={amount >= 0 ? 'transaction__amount delayed__text' : 'transaction__amountRed delayed__text'}>{formatedAmount}</span><div className='default__loading'></div>
                </div>
                <div className='transaction__dashes'></div>
            </div>
            <div className='transaction__arrow'>
            &gt;
            </div>
        </article>
    )
}

export default Transactions