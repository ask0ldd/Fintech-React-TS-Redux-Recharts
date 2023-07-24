import '../styles/Balance.css'

const Balance = ({statementAmount} : IProps) => {
    return(
        <div className='balance__container'>
            <article className='balance__column'>
                <span className='balance__title'>Balance</span>
                <span className='balance__amount'>${statementAmount.balance}</span>
                <div className='balance__select'><span className='balance__percentage'>+10% (30 days)</span><div className='balance__selectArrows'></div></div>
            </article>
            <div className='balance__separator'></div>
            <article className='balance__column'>
                <span className='balance__title'>Income</span>
                <span className='balance__amount'>${statementAmount.income}</span>
                <div className='balance__select'><span className='balance__percentage'>+10% (30 days)</span><div className='balance__selectArrows'></div></div>
            </article>
            <div className='balance__separator'></div>
            <article className='balance__column'>
                <span className='balance__title'>Expenses</span>
                <span className='balance__amount'>${statementAmount.expenses}</span>
                <div className='balance__select'><span className='balance__percentage'>+10% (30 days)</span><div className='balance__selectArrows'></div></div>
            </article>
            <div className='grid16'></div>
        </div>
    )
}

export default Balance

interface IProps{
    statementAmount : {
        balance : number | 0, 
        income : number | 0, 
        expenses : number | 0, 
    }
}