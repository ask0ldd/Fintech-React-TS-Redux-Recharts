import '../styles/Cryptos.css'

const formatAmount = (amount : number) : string => {
    return amount >= 0 ? '$'+amount.toFixed(2) : '-$'+amount.toFixed(2).toString().slice(1)
}

const Cryptos = () => {
    return(
        <article className='cryptos__container'>
            <h2 className="transfer__title">Cryptos</h2>
            <div className='grid16'></div>
        </article>
    )

}

export default Cryptos