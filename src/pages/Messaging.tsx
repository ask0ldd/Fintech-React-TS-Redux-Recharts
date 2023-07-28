import { useParams } from "react-router-dom"
import Header from "../components/Header"
import MessagingHorizontalMenu from "../components/MessagingHorizontalMenu"
import VMenu from "../components/VMenu"
import '../styles/Messaging.css'
import InboxTable from "../components/Messaging/InboxTable"

function Messaging(){

    const activeMessagingSection : string = useParams().id || "inbox"
    
    return(
        <main className="messagingPage__mainContainer">
            <VMenu activePage="messaging" />
            <section className="headernMessagesBox__container">
                <Header format="uncompressed" username="Tony Montana" iban="NL89RABO1289364745" clientID='X458-89995'/>
                { activeMessagingSection === 'inbox' && <><MessagingHorizontalMenu activeMessagingSection="inbox"/><InboxTable/></>}
            </section>

        </main>
    )
}

export default Messaging