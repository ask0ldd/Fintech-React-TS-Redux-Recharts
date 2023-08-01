import '../styles/VMenu.css'
import settingsIcon from '/menu_icons/settings.png'
import homeIcon from '/menu_icons/home.png'
import accountsIcon from '/menu_icons/accounts.png'
import chatIcon from '/menu_icons/chat.png'
import statsIcon from '/menu_icons/stats.png'
import darkmodeIcon from '/menu_icons/darkmode.png'
import { Link } from 'react-router-dom'

function VMenu({activePage} : IProps){
    console.log(activePage)
    return(
        <nav className='vmenu' aria-label='primary'>
            <Link to="/" className={activePage === 'home' ? 'homeButton vmenu-anchor activeItem' : 'homeButton vmenu-anchor'}>
                <img data-testid="home-menuItem" src={homeIcon}/>
            </Link>
            <Link to="/stats/balance" className={activePage === 'stats' ? 'vmenu-anchor activeItem' : 'vmenu-anchor'}><img data-testid="stats-menuItem" src={statsIcon}/></Link>
            <Link to="/trading" className={activePage === 'trading' ? 'vmenu-anchor activeItem' : 'vmenu-anchor'}><img style={{transform:'translate(1px, -1px)'}} data-testid="accounts-menuItem" src={accountsIcon}/></Link>
            <Link to="/messaging" className={activePage === 'messaging' ? 'vmenu-anchor activeItem' : 'vmenu-anchor'}><img data-testid="chat-menuItem" src={chatIcon}/></Link>
            <Link to="/settings" className={activePage === 'settings' ? 'vmenu-anchor activeItem' : 'vmenu-anchor'}><img data-testid="settings-menuItem" src={settingsIcon}/></Link>
            <img data-testid="mode-menuItem" src={darkmodeIcon}/>
        </nav>
    )
}

export default VMenu

interface IProps{
    activePage?: string
}