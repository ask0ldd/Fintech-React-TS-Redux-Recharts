import '../../styles/messaging/ContactsList.css'

function ContactsList(){
    return(
        <article className="contactsList__container">
            <h2 style={{marginBottom:'1.15rem',}}>Contacts</h2>
            <div className='contact__container'>
                <img src="../avatars/blank.png"/>
                <div>
                    <p style={{fontWeight:'600'}}>Jimmy Marklum</p>
                    <p style={{fontWeight:'400'}}>Account Manager</p>
                </div>
            </div>
            <div className='contact__container'>
                <img src="../avatars/blank.png"/>
                <div>
                    <p style={{fontWeight:'600'}}>Jimmy Marklum</p>
                    <p style={{fontWeight:'400'}}>Account Manager</p>
                </div>
            </div>
            <div className='contact__container'>
                <img src="../avatars/blank.png"/>
                <div>
                    <p style={{fontWeight:'600'}}>Jimmy Marklum</p>
                    <p style={{fontWeight:'400'}}>Account Manager</p>
                </div>
            </div>
            <div className='contact__container'>
                <img src="../avatars/blank.png"/>
                <div>
                    <p style={{fontWeight:'600'}}>Jimmy Marklum</p>
                    <p style={{fontWeight:'400'}}>Account Manager</p>
                </div>
            </div>
            <div className='contact__container'>
                <img src="../avatars/blank.png"/>
                <div>
                    <p style={{fontWeight:'600'}}>Jimmy Marklum</p>
                    <p style={{fontWeight:'400'}}>Account Manager</p>
                </div>
            </div>
        </article>
    )
}

export default ContactsList