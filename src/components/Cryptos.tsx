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

const datas = [
    '.delayed__text',
]

window.onload = (e) => {
    setTimeout(() => {
        const datasFields = Array.from(document.querySelectorAll(datas[0])) as HTMLElement[]
        const loadingAnims = Array.from(document.querySelectorAll('.default__loading')) as HTMLElement[]
        datasFields.forEach(field => 
            {field.style.display = "block"
            field.style.opacity = "1"
            })
        loadingAnims.forEach(anim => anim.style.display = "none")
    }, 6000)
}

const Cryptos = () => {
    return(
        <article className='cryptos__container'>
            <h2 className="transfer__title">Cryptos</h2>
            {CryptoDatas.map((data, index) => 
            <CryptoNew 
                key={'crypto'+index}
                name={data.name} 
                owned={data.owned} 
                growth={data.growth} 
                dashes={data.dashes} />)}
            <div className='grid16'></div>
        </article>
    )

}

/*const Crypto = ({name, owned, growth, dashes} : CryptoAsset) => {
    return(
        <article className={dashes === true ? 'crypto__container' : 'crypto__smallerContainer'}>
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
            <div className={dashes === true ? 'crypto__arrow' : 'crypto__smallArrow'}>
            &gt;
            </div>
        </article>
    )
}*/

const CryptoNew = ({name, owned, growth, dashes} : CryptoAsset) => {
    return(
        <article className={dashes === true ? 'crypto__container2' : 'crypto__smallerContainer2'}>
            <div className='crypto__name2'><span className='delayed__text'>{name}</span><div className='default__loading loading__mg6'></div></div>
            <div className={owned >= 0 ? 'owned__positive2' : 'owned__negative2'}><span className='delayed__text'>{formatAmount(owned)}</span><div className='default__loading loading__mg2'></div></div>
            <div className='crypto__percentage2'><span className='delayed__text'>{growth+'.0%'}</span><div className='default__loading'></div></div>
            <div className={dashes === true ? 'crypto__arrow2' : 'crypto__smallArrow2'}>&gt;</div>
            {dashes === true && <div className='crypto__dashes2'></div>}
        </article>
    )
}

export default Cryptos