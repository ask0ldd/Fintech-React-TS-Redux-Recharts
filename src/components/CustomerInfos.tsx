import '../styles/CustomerInfos.css'

function CustomerInfos(){
    return(
        <article className='customerInfos__container'>
            <h2>About You</h2>
            <div className='infosTable__container'>
                <div className='labelRow'>
                    <span>Firstname :</span>
                    <span>Last :</span>
                </div>
                <div className='valueRow'>
                    <span>Antonio</span>
                    <span>Montana</span>
                </div>
                <div className='labelRow'>
                    <span>Date of Birth :</span>
                    <span>Citizenship :</span>
                </div>
                <div className='valueRow'>
                    <span>08/09/1956</span>
                    <span>Cuban</span>
                </div>

            </div>
        </article>
    )
}

export default CustomerInfos