import '../styles/Header.css'

function Header(){
    return (
        <section className="headerContainer">
            <img src="/avatars/tonyavatar.png"/>
            <div className="namenIbanContainer">
                <span className="name">Tony Montana</span>
                <span className="iban">IBAN : NL89RABO1289364745</span>
            </div>
            <figure className='banklogoContainer'>
                <img src="/banklogo.png"/>
            </figure>
            <div className='verticalSeparator'>
            </div>
            <div className='logoutContainer'>
                <img role="button" src="/buttons/logout2.png"/>
                <span>LOG OUT</span>
            </div>
        </section>
    )
}

export default Header