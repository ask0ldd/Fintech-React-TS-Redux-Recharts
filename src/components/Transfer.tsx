import '../styles/Transfer.css'

const formatAmount = (amount : number) : string => {
    return amount >= 0 ? '$'+amount.toFixed(2) : '-$'+amount.toFixed(2).toString().slice(1)
}

const Transfer = () => {
    return(
        <article className='transfer__container'>
            <h2 className="transfer__title">Quick Wire Transfer</h2>
            <div className="transfer__amountnButton__container">
                <div className='transfer__amount'>

                </div>
                <button className='transfer__amountButton'></button>
            </div>
            <div className='transfer__avatarsnButton__container'>
                
            </div>
            <div className='grid16'></div>
        </article>
    )

}

export default Transfer