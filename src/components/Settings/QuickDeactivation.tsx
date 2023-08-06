import { useState } from 'react'
import '../../styles/settings/ContactlessPayment.css'

function QuickDeactivation(){

    const [isSwitchActive, setSwitchActive] = useState<boolean>(false)

    return(
        <article className='contactlessPayment__container'>
            <div className='creditCardInfosnTitle__container'>
                <h2>Quick Deactivation</h2>
                <span className='cardNumber'>Card : <span className='cardNumber__value'>VISA, 4929766588942496</span></span>
                <span className='expirationDate'>Expiration Date : <span className='expirationDate__value'>12/2026</span></span>
            </div>
            <div className='contactlessActivation__container'>
                <span className='onOff__label' style={isSwitchActive ? {} : {color:'#8397AF', opacity:'0.8'}}>{isSwitchActive ? 'On' : 'Off'}</span>
                <div className='switchContainer' onClick={() => setSwitchActive(!isSwitchActive)}>
                    <div className={isSwitchActive ? 'switch' : 'deactivatedSwitch'}>

                    </div>
                </div>
            </div>
        </article>
    )
}

export default QuickDeactivation