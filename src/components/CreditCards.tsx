import creditcards from '/creditcards.png'
import '../styles/CreditCards.css'

function CreditCards(){
    return (
        <article className='creditcards__container'>
            <div className='creditcardsnTitle__container'>
                <h2 className='creditcards__title'>Credit Cards</h2>
                <img className='creditcards' src={creditcards}/>
                <div className='creditcards__rightContainer'>
                    <div>Expires in : 4 min 57</div>
                </div>
            </div>
            <div className='separator'></div>
        </article>
    )
}

export default CreditCards