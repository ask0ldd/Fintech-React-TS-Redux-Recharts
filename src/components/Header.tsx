import '../styles/Header.css'

function Header(){
    return (
        <section className="header__container">
            <img src='/avatars/tonyavatar.png'/>
            <div className="namenIban__container">
                <span className="name">Tony Montana</span>
                <span className="iban">IBAN : NL89RABO1289364745</span>
            </div>
            <figure className='banklogo__container'>
                <img src='/banklogo.png'/>
            </figure>
            <div className='verticalSeparator'>
            </div>
            <div className='logout__container'>
                <img role="button" src='/buttons/logout2.png'/>
                <span>LOG OUT</span>
            </div>
        </section>
    )
}

export default Header