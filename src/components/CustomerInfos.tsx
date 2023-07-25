import '../styles/CustomerInfos.css'

function CustomerInfos(){
    return(
        <article className='customerInfos__container'>
            <h2>About You</h2>
            <div className='infosTable__container'>
                <div className='labelRow'>Your Center :</div>
                <div className='valueRow'>Bank Of America OC</div>
                <div className='labelRow'>Address :</div>
                <div className='valueRow'>2680 N Tustin St, Orange</div>

            </div>
        </article>
    )
}

export default CustomerInfos