import '../../styles/messaging/ContactsList.css'

function ContactsList(){
    return(
        <article className="contactsList__container">
            <h2 style={{marginBottom:'1.15rem',}}>Contacts</h2>
            <div className='contact__container'>
                <figure style={{marginTop:'6px'}}>*</figure>
                <img src="../avatars/avatar4.png"/>
                <div>
                    <p style={{fontWeight:'600'}}>Jimmy Marklum</p>
                    <p style={{fontWeight:'400'}}>Account Manager</p>
                </div>
            </div>
            <div className='contact__container'>
                <figure style={{marginTop:'6px'}}>*</figure>
                <img src="../avatars/avatar5.png"/>
                <div>
                    <p style={{fontWeight:'600'}}>Sonya Poniatosky</p>
                    <p style={{fontWeight:'400'}}>Investment Specialist</p>
                </div>
            </div>
            <div className='contact__container'>
                <figure style={{marginTop:'6px'}}>*</figure>
                <img src="../avatars/avatar8.png"/>
                <div>
                    <p style={{fontWeight:'600'}}>Julie Brown</p>
                    <p style={{fontWeight:'400'}}>Customer Service</p>
                </div>
            </div>
            <div className='contact__container'>
                <figure style={{marginTop:'6px'}}>*</figure>
                <img src="../avatars/avatar7.png"/>
                <div>
                    <p style={{fontWeight:'600'}}>Aria Delico</p>
                    <p style={{fontWeight:'400'}}>Head of Cust. Service</p>
                </div>
            </div>
            <div className='contact__container'>
                <figure style={{marginTop:'6px'}}>*</figure>
                <img src="../avatars/avatar3.png"/>
                <div>
                    <p style={{fontWeight:'600'}}>Minnie Steinbeck</p>
                    <p style={{fontWeight:'400'}}>Portfolio Manager</p>
                </div>
            </div>
        </article>
    )
}

export default ContactsList