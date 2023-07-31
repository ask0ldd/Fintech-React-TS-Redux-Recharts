import '../../styles/NewMessage.css'

function NewMessage(){
    return(
    <article className="newMessage__container">
        <h2 style={{marginBottom:'1.15rem'}}>Compose your Email</h2>
        <label>From :</label>
        <input type="text" value="Antonio Montana" readOnly/>
        <label>To :</label>
        <input type="text"/>
        <label>Title :</label>
        <input type="text"/>
        <label>Body :</label>
        <textarea rows={8}/>
        <button>Send your Email</button>
    </article>
    )
}
export default NewMessage