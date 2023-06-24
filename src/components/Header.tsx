import '../styles/Header.css'
import banklogo from '/banklogo.png'
import buttonLogout from '/buttons/logout2.png'
import tonyAvatar from '/avatars/tonyavatar.png'

function Header(){
    return (
        <section className="headerContainer">
            <img src={tonyAvatar}/>
            <div className="namenIbanContainer">
                <span className="name">Tony Montana</span>
                <span className="iban">IBAN : NL89RABO1289364745</span>
            </div>
            <figure className='banklogoContainer'>
                <img src={banklogo}/>
            </figure>
            <div className='verticalSeparator'>
            </div>
            <div className='logoutContainer'>
                <img role="button" src={buttonLogout}/>
                <span>LOG OUT</span>
            </div>
        </section>
    )
}

export default Header