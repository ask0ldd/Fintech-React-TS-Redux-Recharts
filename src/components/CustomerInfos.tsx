import '../styles/CustomerInfos.css'

function CustomerInfos(){
    return(
        <article className='customerInfos__container'>
            <h2>About You</h2>
            <ul>
                <li className='label'>Your Center :</li>
                <li className='value'>Bank Of America OC</li>
                <li className='label'>Address :</li>
                <li className='value'>2680 N Tustin St, Orange</li>
                <li className='label'>State :</li>
                <li className='value'>California 92865</li>
            </ul>
        </article>
    )
}

export default CustomerInfos