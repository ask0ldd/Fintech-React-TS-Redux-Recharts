import { Link } from 'react-router-dom'
import '../styles/CreditCards.css'
import CreditCardsOptions from './CreditCardsOptions'

function CreditCards(){
    return (
        <div className='CreditcardnOptions__container'>
            <article className='creditcards__container'>
                <div className='creditcardsnTitle__container'>
                    <h2 className='creditcards__title'>Credit Cards</h2>
                    <img className='creditcards' src='./creditcards.png'/>
                </div>
                <div className='separator'></div>
                <div className='creditcards__rightContainer'>
                    <div className='expiration__container'>Expires in : <span>4 min 57</span></div>
                    <div className='qrcodenOptions__container'>
                        <div className='qrcode__container'>
                            <div className='qrcodeicons__container'>
                                <img className='qrcode__refresh' src='./qrcode_icons/refresh.png'/>
                                <img className='qrcode__trash' src='./qrcode_icons/dispose.png'/>
                            </div>
                            <img className='qrcode' src='./qrcode.png'/>
                        </div>
                    </div>
                </div>
            </article>
            <div className='creditcardsOptions__container'>
                <Link to="/settings"><CreditCardsOptions iconFilename="whitelock"/></Link>
                <Link to="/trading"><CreditCardsOptions iconFilename="whiteconversion"/></Link>
                <Link to="/settings"><CreditCardsOptions iconFilename="whitesettings"/></Link>
            </div>
        </div>
    )
}

export default CreditCards