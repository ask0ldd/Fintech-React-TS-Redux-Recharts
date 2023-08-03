import { useParams } from "react-router-dom"
import Header from "../components/Header"
import MessagingHorizontalMenu from "../components/MessagingHorizontalMenu"
import VMenu from "../components/VMenu"
import '../styles/Messaging.css'
import InboxTable from "../components/messaging/InboxTable"
import NewMessage, { IRecipient } from "../components/messaging/NewMessage"
import { useState } from "react"
import ContactsList from "../components/messaging/ContactsList"
import VInboxMenu from "../components/messaging/VInboxMenu"
import { IEmail, ISelectableEmail, emails } from "../datas/emailsDatas"

function Messaging(){
    
    // add fav contacts list
    
    const [emailsState, setEmailsState] = useState<Array<ISelectableEmail>>(emailsToSelectableEmails(emails))

    const activeMessagingSection : string = useParams().id || "inbox"

    const [mailRecipient, setMailRecipient] = useState<IRecipient>({name : 'Jimmy Marklum', pic : './avatars/blank.png', title : 'Bank Advisor'})
    
    return(
        <main className="messagingPage__mainContainer">
            <VMenu activePage="messaging" />
            <section className="headernMessagesBox__container">
                <Header format="uncompressed" username="Tony Montana" iban="NL89RABO1289364745" clientID='X458-89995'/>
                { activeMessagingSection === 'inbox' && <><MessagingHorizontalMenu activeMessagingSection="inbox"/><div style={{display:'flex', flexDirection:'row', width:'100%', columnGap:'24px'}}><InboxTable emailsState={emailsState} setEmailsState={setEmailsState}/><VInboxMenu/></div></>}
                { activeMessagingSection === 'newmail' && <><MessagingHorizontalMenu activeMessagingSection="newmail"/><div style={{display:'flex', flexDirection:'row', width:'100%', columnGap:'24px'}}><NewMessage mailRecipient={mailRecipient}/><ContactsList/></div></>}
                { activeMessagingSection === 'sent' && <><MessagingHorizontalMenu activeMessagingSection="sent"/><InboxTable emailsState={emailsState} setEmailsState={setEmailsState}/></>}
            </section>

        </main>
    )
}

export default Messaging

function emailsToSelectableEmails(emailsList : Array<IEmail>){
    return emailsList.map(email => {
        const newEmail : ISelectableEmail = {...email, selected : false}
        return newEmail
    })
}