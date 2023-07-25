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
                <h3 className='infosSection__title'>
                    Contact Informations
                </h3>
                <div className='labelRow'>
                    <span>Mobile :</span>
                    <span>Email Address :</span>
                </div>
                <div className='valueRow'>
                    <span>311-555-2368</span>
                    <span>Tony@LosZetas.com</span>
                </div>
                <h3 className='infosSection__title'>
                    Residential Address
                </h3>
                <div className='labelRow'>
                    <span>Address :</span>
                    <span>City :</span>
                </div>
                <div className='valueRow'>
                    <span>2932 N Glassel St, Apt 18</span>
                    <span>Los Angeles, CA 92865</span>
                </div>
                <button>Update your Profile</button>
            </div>
        </article>
    )
}

export default CustomerInfos