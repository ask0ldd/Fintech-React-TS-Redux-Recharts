import { Link } from "react-router-dom"
import '../styles/MessagingHorizontalMenu.css'

function MessagingHorizontalMenu({activeMessagingSection} : IProps){
    return(
    <nav className="messagingMenu__container">
            <Link to="/messaging/newmail" className={activeMessagingSection === "newmail" ? "messagingMenu__items messagingMenu__itemsActive" : "messagingMenu__items"}>Send a New Message</Link>
            <Link to="/messaging/inbox" className={activeMessagingSection === "inbox" ? "messagingMenu__items messagingMenu__itemsActive" : "messagingMenu__items"}>Your Messages</Link>
            <Link to="/messaging/sent" className={activeMessagingSection === "sent" ? "messagingMenu__items messagingMenu__itemsActive" : "messagingMenu__items"}>Sent Messages</Link>
    </nav>)
}

export default MessagingHorizontalMenu

interface IProps{
    activeMessagingSection: string
}