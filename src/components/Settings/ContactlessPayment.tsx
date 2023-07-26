import '../../styles/ContactlessPayment.css'

function ContactlessPayment(){
    return(
        <article className='contactlessPayment__container'>
            <div className='creditCardInfosnTitle__container'>
                <h2>Contactless Payment</h2>
                <span className='cardNumber'>Card : <span className='cardNumber__value'>VISA, 4929766588942496</span></span>
                <span className='expirationDate'>Expiration Date : <span className='expirationDate__value'>12/2026</span></span>
            </div>
            <div className='contactlessActivation__container'>
                <span className='onOff__label'>On</span>
                <div className='switchContainer'>
                    <div className='switch' aria-role='button'>
                        
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ContactlessPayment