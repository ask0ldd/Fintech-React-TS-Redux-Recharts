import { useParams } from "react-router-dom"
import Header from "../components/Header"
import MessagingHorizontalMenu from "../components/MessagingHorizontalMenu"
import VMenu from "../components/VMenu"
import '../styles/Messaging.css'
import InboxTable from "../components/Messaging/InboxTable"
import NewMessage, { IRecipient } from "../components/Messaging/NewMessage"
import { useState } from "react"
import ContactsList from "../components/Messaging/ContactsList"
import VInboxMenu from "../components/Messaging/VInboxMenu"
import { IEmail, ISelectableEmail, emails } from "../datas/emailsDatas"

// Messaging Page
// *** Components :
// - VMenu : Main Nav
// - Header : Main Header
// - MessagingHorizontalMenu : Secondary Nav
// - InboxTable : Table containing the received mails
// - ContactsList : Contacts list
// - New Message : Form used to send a new message
function Messaging(){
    
    const [mailRecipient, setMailRecipient] = useState<IRecipient>({name : 'Jimmy Marklum', pic : './avatars/blank.png', title : 'Bank Advisor'})
    const activeMessagingSection : string = useParams().id || "inbox"
   
    return(
        <main className="messagingPage__mainContainer">
            <VMenu activePage="messaging" />
            <section className="headernMessagesBox__container">
                <Header format="uncompressed" username="Tony Montana" iban="NL89RABO1289364745" clientID='X458-89995'/>
                { activeMessagingSection === 'inbox' && 
                    <><MessagingHorizontalMenu activeMessagingSection="inbox"/>
                        <div style={{display:'flex', flexDirection:'row', width:'100%', columnGap:'24px'}}>
                            <InboxTable/>
                            <VInboxMenu/>
                        </div></>
                }
                { activeMessagingSection === 'newmail' && 
                    <><MessagingHorizontalMenu activeMessagingSection="newmail"/>
                        <div style={{display:'flex', flexDirection:'row', width:'100%', columnGap:'24px'}}>
                            <NewMessage mailRecipient={mailRecipient}/>
                            <ContactsList/>
                        </div></>
                }
                { activeMessagingSection === 'sent' && 
                    <><MessagingHorizontalMenu activeMessagingSection="sent"/>
                    <InboxTable/></>
                }
            </section>

        </main>
    )
}

export default Messaging