import '../styles/Header.css'
import banklogo from '/banklogo.png'
import buttonLogout from '/buttons/logout2.png'
import tonyAvatar from '/avatars/tonyavatar.png'

function Header(){
    return (
        <section className="header__container">
            <img src={tonyAvatar}/>
            <div className="namenIban__container">
                <span className="name">Tony Montana</span>
                <span className="iban">IBAN : NL89RABO1289364745</span>
            </div>
            <figure className='banklogo__container'>
                <img src={banklogo}/>
            </figure>
            <div className='verticalSeparator'>
            </div>
            <div className='logout__container'>
                <img role="button" src={buttonLogout}/>
                <span>LOG OUT</span>
            </div>
        </section>
    )
}

export default Header