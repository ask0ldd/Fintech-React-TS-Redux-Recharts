import '../styles/Cryptos.css'

const formatAmount = (amount : number) : string => {
    return amount >= 0 ? '$'+amount.toFixed(2) : '-$'+amount.toFixed(2).toString().slice(1)
}

interface CryptoAsset {
    name:string
    owned:number
    growth:number
}

const CryptoDatas : Array <CryptoAsset> = [
    {
        name:'Bitcoin',
        owned:36217.80,
        growth:6.00
    },
    {
        name:'Ethereum',
        owned:948.55,
        growth:3.00        
    }
]

const Cryptos = () => {
    return(
        <article className='cryptos__container'>
            <h2 className="transfer__title">Cryptos</h2>
            {CryptoDatas.map((data, index) => 
            <Crypto 
                name={data.name} 
                owned={data.owned} 
                growth={data.growth} />)}
            <div className='grid16'></div>
        </article>
    )

}

const Crypto = ({name, owned, growth} : CryptoAsset) => {
    return(
        <article className='crypto__container'>
            <div className="crypto__datasnDashes">
                <div className='crypto__datas'>
                    <span className='crypto__name'>{name}</span>
                    <div className='crypto__values'>
                        <span className={owned >= 0 ? 'owned__positive' : 'owned__negative'}>{formatAmount(owned)}</span>
                        <span>{growth}</span>
                    </div>
                </div>
                <div className='crypto__dashes'></div>
            </div>
            <div className='crypto__arrow'></div>
        </article>
    )
}

export default Cryptos