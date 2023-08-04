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
    const [areAllEmailsSelected, setAllEmailsToSelected] = useState<boolean>(false)
    const [mailRecipient, setMailRecipient] = useState<IRecipient>({name : 'Jimmy Marklum', pic : './avatars/blank.png', title : 'Bank Advisor'})
    const [filterEmails, setFilterEmails] = useState<"file" | "toread" | null>(null)
    const activeMessagingSection : string = useParams().id || "inbox"

    function deleteSelectedEmails(){
        const nonDeletedEmails = [...emailsState].filter(email => email.selected === false)
        setEmailsState(nonDeletedEmails)
        setAllEmailsToSelected(false)
    }

    function filteringEmails(emailsState : Array<ISelectableEmail>){
        if(filterEmails === "file") return emailsState.filter(email => email.file != null)
        if(filterEmails === "toread") return emailsState.filter(email => email.read === true)
        return [...emailsState]
    }
    
    return(
        <main className="messagingPage__mainContainer">
            <VMenu activePage="messaging" />
            <section className="headernMessagesBox__container">
                <Header format="uncompressed" username="Tony Montana" iban="NL89RABO1289364745" clientID='X458-89995'/>
                { activeMessagingSection === 'inbox' && 
                    <><MessagingHorizontalMenu activeMessagingSection="inbox"/>
                        <div style={{display:'flex', flexDirection:'row', width:'100%', columnGap:'24px'}}>
                            <InboxTable emailsState={filteringEmails(emailsState)} setEmailsState={setEmailsState} areAllEmailsSelected={areAllEmailsSelected} setAllEmailsToSelected={setAllEmailsToSelected}/>
                            <VInboxMenu emailsState={filteringEmails(emailsState)} setEmailsState={setEmailsState} deleteSelectedEmails={deleteSelectedEmails} setFilterEmails={setFilterEmails}/>
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
                    <InboxTable emailsState={emailsState} setEmailsState={setEmailsState} areAllEmailsSelected={areAllEmailsSelected} setAllEmailsToSelected={setAllEmailsToSelected}/></>
                }
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