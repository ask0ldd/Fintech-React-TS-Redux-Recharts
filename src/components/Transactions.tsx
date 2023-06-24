import '../styles/Transactions.css'
import { Formatter } from '../services/formatter'
import { ITransactionType } from '../types/types'

const TransactionsList: Array <ITransactionType> = [
    {
        company:'Uber Taxi',
        date:'02-13-2012',
        amount:948.55
    },
    {
        company:'AT&T',
        date:'02-14-2012',
        amount:19.99
    },    
    {
        company:'Ebay',
        date:'02-18-2012',
        amount:98.55
    },
    {
        company:'Ebay',
        date:'02-19-2012',
        amount:45.50
    },
    {
        company:'Air BnB',
        date:'02-22-2012',
        amount:-120.00
    },
    {
        company:'Direct Energy',
        date:'02-23-2012',
        amount:-60.00
    },
    {
        company:'Ebay',
        date:'02-26-2012',
        amount:70.25
    },
]

const Transactions = () => {

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
                <div className='transaction__recipient'><span className='delayed__text'>{company}</span><div className='default__loading loading__mgp2'></div></div>
                <div className='datenAmount__container'>
                    <span className='transaction__date delayed__text'>{date}</span><span className={formatedAmount[0]!=='-' ? 'transaction__amount delayed__text' : 'transaction__amountRed delayed__text'}>{formatedAmount}</span><div className='default__loading'></div>
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