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
        <div className='vmenu'>
            <Link to="/" className='homeButton'>
                <img src={homeIcon}/>
            </Link>
            <Link to="/stats/balance" className='vmenu-anchor'><img src={statsIcon}/></Link>
            <Link to="/trading" className='vmenu-anchor'><img src={accountsIcon}/></Link>
            <img src={chatIcon}/>
            <img src={settingsIcon}/>
            <img src={darkmodeIcon}/>
        </div>
    )
}

export default VMenu

interface IProps{
    activePage?: string
}