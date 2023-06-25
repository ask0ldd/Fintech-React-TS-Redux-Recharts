import creditcards from '/creditcards.png'
import qrcode from '/qrcode.png'
import dispose from '/qrcode_icons/dispose.png'
import refresh from '/qrcode_icons/refresh.png'
import '../styles/CreditCards.css'
import CreditCardsOptions from './CreditCardsOptions'

function CreditCards(){
    return (
        <div className='CreditcardnOptions__container'>
            <article className='creditcards__container'>
                <div className='creditcardsnTitle__container'>
                    <h2 className='creditcards__title'>Credit Cards</h2>
                    <img className='creditcards' src={creditcards}/>
                </div>
                <div className='separator'></div>
                <div className='creditcards__rightContainer'>
                    <div className='expiration__container'>Expires in : <span>4 min 57</span></div>
                    <div className='qrcodenOptions__container'>
                        <div className='qrcode__container'>
                            <div className='qrcodeicons__container'>
                                <img className='qrcode__refresh' src={refresh}/>
                                <img src={dispose}/>
                            </div>
                            <img className='qrcode' src={qrcode}/>
                        </div>
                    </div>
                </div>
            </article>
            <div className='creditcardsOptions__container'>
                <CreditCardsOptions iconFilename="whitelock"/>
                <CreditCardsOptions iconFilename="whiteconversion"/>
                <CreditCardsOptions iconFilename="whitesettings"/>
            </div>
        </div>
    )
}

export default CreditCards