import '../styles/Header.css'
import bankLogo from '/banklogo.png'
import logoutIcon from '/buttons/logout2.png'
import tonyAvatar from '/avatars/tonyavatar.png'

function Header({format} : IProps){
    return (
        <section className={format === 'compressed' ? "header__container__compressed" : "header__container"}>
            <div className='avatarnName__container'>
                <img src={tonyAvatar}/>
                <div className="namenIban__container">
                    <span className="name">Tony Montana</span>
                    <span className="iban">IBAN : NL89RABO1289364745</span>
                </div>
            </div>
            <figure className='banklogo__container'>
                <img src={bankLogo}/>
            </figure>
            <div className='verticalSeparator'>
            </div>
            <div className='logout__container'>
                <img role="button" src={logoutIcon}/>
                <span>LOG OUT</span>
            </div>
        </section>
    )
}

export default Header

interface IProps {
    format? : string
}