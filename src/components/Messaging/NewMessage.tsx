import '../../styles/messaging/NewMessage.css'

function NewMessage({mailRecipient} : IProps){
    return(
    <article className="newMessage__container">
        <h2 style={{marginBottom:'1.15rem'}}>Compose your Email</h2>
        <label htmlFor="sender">From :</label>
        <input id="sender" type="text" value="Antonio Montana" readOnly/>
        <label htmlFor="recipient">To :</label>
        /* c8 ignore next */
        <input id="recipient" name="recipient" type="text" defaultValue={mailRecipient.name || ''}/>
        <label htmlFor="title">Title :</label>
        <input id="title" type="text"/>
        <label htmlFor="body">Body :</label>
        <textarea id="body" rows={8}/>
        <button>Send your Email</button>
    </article>
    )
}
export default NewMessage

interface IProps{
    mailRecipient : IRecipient
}

export interface IRecipient{
    name : string
    pic : string
    title : string
}