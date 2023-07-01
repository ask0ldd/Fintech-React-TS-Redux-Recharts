import '../styles/VMenu.css'
import settingsIcon from '/menu_icons/settings.png'
import homeIcon from '/menu_icons/home.svg'
import accountsIcon from '/menu_icons/accounts.png'
import chatIcon from '/menu_icons/chat.png'
import darkmodeIcon from '/menu_icons/darkmode.png'
import { Link } from 'react-router-dom'

function VMenu(){
    return(
        <div className='vmenu'>
            <div role="button" className='homeButton'>
                <img src='./menu_icons/home.svg'/>
            </div>
            <Link to="/stats" className='vmenu-anchor'><img src='./menu_icons/stats.png'/></Link>
            <img src='./menu_icons/accounts.png'/>
            <img src='./menu_icons/chat.png'/>
            <img src='./menu_icons/settings.png'/>
            <img src='./menu_icons/darkmode.png'/>
        </div>
    )
}

export default VMenu