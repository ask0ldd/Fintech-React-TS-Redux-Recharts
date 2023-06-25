import creditcards from '/creditcards.png'
import qrcode from '/qrcode.png'
import '../styles/CreditCards.css'

function CreditCards(){
    return (
        <article className='creditcards__container'>
            <div className='creditcardsnTitle__container'>
                <h2 className='creditcards__title'>Credit Cards</h2>
                <img className='creditcards' src={creditcards}/>
            </div>
            <div className='separator'></div>
            <div className='creditcards__rightContainer'>
                <div className='expiration__container'>Expires in : <span>4 min 57</span></div>
                <div className='qrcode__container'>
                    <div>aaa</div>
                    <img src={qrcode}/>
                </div>
            </div>
        </article>
    )
}

export default CreditCards