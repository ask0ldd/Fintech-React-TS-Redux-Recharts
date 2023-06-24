import '../styles/VMenu.css'

function VMenu(){
    return(
        <div className='vmenu'>
            <div role="button" className='homeButton'>
                <img src="/menu_icons/home.svg"/>
            </div>
            <img src="/menu_icons/settings.png"/>
            <img src="/menu_icons/accounts.png"/>
            <img src="/menu_icons/chat.png"/>
            <img src="/menu_icons/settings.png"/>
            <img src="/menu_icons/darkmode.png"/>
        </div>
    )
}

export default VMenu