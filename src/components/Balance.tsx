import '../styles/Balance.css'

const Balance = () => {
    return(
        <div className='balance__container'>
            <article className='balance__column'>
                <span className='balance__title'>Balance</span>
                <span className='balance__amount'>$3601</span>
                <div className='balance__select'><span className='balance__percentage'>+10% (30 days)</span><div className='balance__selectArrows'></div></div>
            </article>
            <div className='balance__separator'></div>
            <article className='balance__column'>
                <span className='balance__title'>Income</span>
                <span className='balance__amount'>$1601</span>
                <div className='balance__select'><span className='balance__percentage'>+10% (30 days)</span><div className='balance__selectArrows'></div></div>
            </article>
            <div className='balance__separator'></div>
            <article className='balance__column'>
                <span className='balance__title'>Expenses</span>
                <span className='balance__amount'>$901</span>
                <div className='balance__select'><span className='balance__percentage'>+10% (30 days)</span><div className='balance__selectArrows'></div></div>
            </article>
            <div className='grid16'></div>
        </div>
    )

}

export default Balance