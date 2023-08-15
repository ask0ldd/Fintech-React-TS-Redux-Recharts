import '../styles/VMenu.css'
import settingsIcon from '/menu_icons/settings.png'
import homeIcon from '/menu_icons/home.png'
import accountsIcon from '/menu_icons/accounts.png'
import chatIcon from '/menu_icons/chat.png'
import statsIcon from '/menu_icons/stats.png'
import darkmodeIcon from '/menu_icons/darkmode.png'
import { Link } from 'react-router-dom'

function VMenu({activePage} : IProps){
    // console.log(activePage)
    return(
        <nav className='vmenu' aria-label='primary'>
            <Link to="/" className={activePage === 'home' ? 'homeButton vmenu-anchor activeItem' : 'homeButton vmenu-anchor'}>
                <img alt="home menu item" src={homeIcon}/>
            </Link>
            <Link to="/stats/balance" className={activePage === 'stats' ? 'vmenu-anchor activeItem' : 'vmenu-anchor'}><img alt="stats menu item" src={statsIcon}/></Link>
            <Link to="/trading" className={activePage === 'trading' ? 'vmenu-anchor activeItem' : 'vmenu-anchor'}><img alt="accounts menu item" style={{transform:'translate(1px, -1px)'}} src={accountsIcon}/></Link>
            <Link to="/messaging" className={activePage === 'messaging' ? 'vmenu-anchor activeItem' : 'vmenu-anchor'}><img alt="chat menu item" src={chatIcon}/></Link>
            <Link to="/settings" className={activePage === 'settings' ? 'vmenu-anchor activeItem' : 'vmenu-anchor'}><img alt="settings menu item" src={settingsIcon}/></Link>
            <img alt="dark mode menu item" src={darkmodeIcon}/>
        </nav>
    )
}

export default VMenu

interface IProps{
    activePage?: string
}