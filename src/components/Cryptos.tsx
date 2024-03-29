import '../styles/Cryptos.css'
import { Formatter } from '../services/formatter'
import { ICryptoAsset } from '../types/types'
import { CryptoDatas } from '../datas/datas'

const Cryptos = () => {
    return(
        <article className='cryptos__container'>
            <h2 className="transfer__title">Cryptos</h2>
            {CryptoDatas.map((data, index) => 
            <Crypto 
                key={'crypto'+index}
                name={data.name} 
                owned={data.owned} 
                growth={data.growth} 
                dashes={data.dashes} />)}
            <div className='grid16'></div>
        </article>
    )

}

const Crypto = ({name, owned, growth, dashes} : ICryptoAsset) => {
    return(
        <article className={dashes === true ? 'crypto__container2' : 'crypto__smallerContainer2'}>
            <div className='crypto__name2'><span className={/*'delayed__text'*/ ''}>{name}</span><div style={{display:'none'}} className='default__loading loading__mg6'></div></div>
            <div className={owned >= 0 ? 'owned__positive2' : 'owned__negative2'}><span className={/*'delayed__text'*/ ''}>{Formatter.addCurrencySignToAmount('$', owned)}</span><div style={{display:'none'}} className='default__loading loading__mg2'></div></div>
            <div className='crypto__percentage2'><span className={/*'delayed__text'*/ ''}>{growth>=0 ? '+'+growth+'.0%' : '-'+growth+'.0%'}</span><div style={{display:'none'}} className='default__loading'></div></div>
            <div className={dashes === true ? 'crypto__arrow2' : 'crypto__smallArrow2'}>&gt;</div>
            {dashes === true && <div className='crypto__dashes2'></div>}
        </article>
    )
}

export default Cryptos