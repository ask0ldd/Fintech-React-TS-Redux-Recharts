import '../styles/OwnedCurrencyList.css'

const wallet =[
    {currency : 'BTC', amount: 502.09, price: 30301.05, previousPrice : 28100.50},
    {currency : 'ETH', amount: 24.99, price: 1868.30, previousPrice : 1832.05},
    {currency : 'BTC', amount: 502.09, price: 30301.05, previousPrice : 28100.50},
    {currency : 'ETH', amount: 24.99, price: 1868.30, previousPrice : 1832.05},
    {currency : 'BTC', amount: 502.09, price: 30301.05, previousPrice : 28100.50},
    {currency : 'ETH', amount: 24.99, price: 1868.30, previousPrice : 1832.05},
    {currency : 'BTC', amount: 502.09, price: 30301.05, previousPrice : 28100.50},
    {currency : 'ETH', amount: 24.99, price: 1868.30, previousPrice : 1832.05},
    {currency : 'BTC', amount: 502.09, price: 30301.05, previousPrice : 28100.50},
]

function OwnedCurrencyList(){
    return(
        <article className='ownedCurrencyList__container'>
            <h2>Your Wallet</h2>
            <table>
                <thead><tr><th style={{textAlign:'left', width:'60px', paddingLeft:'0.745rem'}}>Currency</th><th>Amount</th><th>Value (USD)</th><th>Price (USD)</th><th style={{paddingRight:'0.75rem'}}>Last 30d</th></tr></thead>
                <tbody>
                    {[...wallet].map((array, index) => {const priceVar = ((array.price / array.previousPrice - 1) * 100).toFixed(2); return(<tr style={wallet.length-1 === index ? {borderBottom:'1px solid rgba(65, 65, 65, 0.9)'} : {}}className={ index%2 === 0 ? 'ownedCurrencyList__rowEven' : ''} key={'walletRow'+index}><td style={{textAlign:'left', paddingLeft:'0.75rem', color:'#5C39AA', fontFamily:'Poppins', fontWeight:'700'}}>{array.currency}</td><td>{array.amount.toFixed(2)}</td><td>{(array.price * array.amount).toFixed(2)}</td><td>{array.price.toFixed(2)}</td><td className={parseFloat(priceVar) >= 0 ? 'ownedCurrencyList__inc' : ''} style={{paddingRight:'0.75rem'}}>{parseFloat(priceVar) >= 0 ? '+'+priceVar : '-'+priceVar}</td></tr>)})}
                </tbody>
            </table>
        </article>
    )
}

export default OwnedCurrencyList