import { useState } from 'react'
import '../../styles/ContactlessPayment.css'

function ContactlessPayment(){

    const [isSwitchActive, setSwitchActive] = useState<boolean>(true)

    return(
        <article className='contactlessPayment__container'>
            <div className='creditCardInfosnTitle__container'>
                <h2>Contactless Payment</h2>
                <span className='cardNumber'>Card : <span className='cardNumber__value'>VISA, 4929766588942496</span></span>
                <span className='expirationDate'>Expiration Date : <span className='expirationDate__value'>12/2026</span></span>
            </div>
            <div className='contactlessActivation__container'>
                <span className='onOff__label'>{isSwitchActive ? 'On' : 'Off'}</span>
                <div className='switchContainer' onClick={() => setSwitchActive(!isSwitchActive)}>
                    <div className={isSwitchActive ? 'switch' : 'deactivatedSwitch'} style={{/*right: isSwitchActive ? '0px' : '34px'*/}}>

                    </div>
                </div>
            </div>
        </article>
    )
}

export default ContactlessPayment