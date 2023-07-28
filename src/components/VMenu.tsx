import '../styles/VMenu.css'
import settingsIcon from '/menu_icons/settings.png'
import homeIcon from '/menu_icons/home.svg'
import accountsIcon from '/menu_icons/accounts.png'
import chatIcon from '/menu_icons/chat.png'
import statsIcon from '/menu_icons/stats.png'
import darkmodeIcon from '/menu_icons/darkmode.png'
import { Link } from 'react-router-dom'

function VMenu({activePage} : IProps){
    return(
        <nav className='vmenu' aria-label='primary'>
            <Link to="/" className='homeButton'>
                <img src={homeIcon}/>
            </Link>
            <Link to="/stats/balance" className='vmenu-anchor'><img data-testid="stats-menuItem" src={statsIcon}/></Link>
            <Link to="/trading" className='vmenu-anchor'><img data-testid="accounts-menuItem" src={accountsIcon}/></Link>
            <Link to="/messaging" className='vmenu-anchor'><img data-testid="chat-menuItem" src={chatIcon}/></Link>
            <Link to="/settings" className='vmenu-anchor'><img data-testid="settings-menuItem" src={settingsIcon}/></Link>
            <img data-testid="mode-menuItem" src={darkmodeIcon}/>
        </nav>
    )
}

export default VMenu

interface IProps{
    activePage?: string
}