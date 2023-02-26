import '../styles/Cryptos.css'

const formatAmount = (amount : number) : string => {
    return amount >= 0 ? '$'+amount.toFixed(2) : '-$'+amount.toFixed(2).toString().slice(1)
}

const Cryptos = () => {
    return(
        <div className='cryptos__container'>
            <div className='grid16'></div>
        </div>
    )

}

export default Cryptos