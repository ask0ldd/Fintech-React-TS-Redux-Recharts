import '../styles/Cryptos.css'

const formatAmount = (amount : number) : string => {
    return amount >= 0 ? '$'+amount.toFixed(2) : '-$'+amount.toFixed(2).toString().slice(1)
}

interface CryptoAsset {
    name:string
    owned:number
    growth:number
    dashes:boolean
}

const CryptoDatas : Array <CryptoAsset> = [
    {
        name:'Bitcoin',
        owned:36217.80,
        growth:6.00,
        dashes:true
    },
    {
        name:'Ethereum',
        owned:948.55,
        growth:3.00,
        dashes:false      
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
                growth={data.growth} 
                dashes={data.dashes} />)}
            <div className='grid16'></div>
        </article>
    )

}

const Crypto = ({name, owned, growth, dashes} : CryptoAsset) => {
    return(
        <article className={dashes === true ? 'crypto__container' : 'crypto__smallContainer'}>
            <div className="crypto__datasnDashes">
                <div className='crypto__datas'>
                    <span className='crypto__name'>{name}</span>
                    <div className='crypto__values'>
                        <span className={owned >= 0 ? 'owned__positive' : 'owned__negative'}>{formatAmount(owned)}</span>
                        <span className='crypto__percentage'>{growth+'.0%'}</span>
                    </div>
                </div>
                {dashes === true && <div className='crypto__dashes'></div>}
            </div>
            <div className='crypto__arrow'></div>
        </article>
    )
}

export default Cryptos