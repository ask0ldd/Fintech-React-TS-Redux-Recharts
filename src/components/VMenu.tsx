import '../styles/VMenu.css'
import settingsIcon from '/menu_icons/settings.png'
import homeIcon from '/menu_icons/home.svg'
import accountsIcon from '/menu_icons/accounts.png'
import chatIcon from '/menu_icons/chat.png'
import darkmodeIcon from '/menu_icons/darkmode.png'

function VMenu(){
    return(
        <div className='vmenu'>
            <div role="button" className='homeButton'>
                <img src={homeIcon}/>
            </div>
            <img src={settingsIcon}/>
            <img src={accountsIcon}/>
            <img src={chatIcon}/>
            <img src={settingsIcon}/>
            <img src={darkmodeIcon}/>
        </div>
    )
}

export default VMenu