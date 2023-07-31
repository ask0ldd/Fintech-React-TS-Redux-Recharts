import '../../styles/NewMessage.css'

function NewMessage(){
    return(
    <article className="newMessage__container">
        <label>From</label>
        <input type="text" value="Antonio Montana" readOnly/>
        <label>To</label>
        <input type="text"/>
        <label>Title</label>
        <input type="text"/>
        <label>Body</label>
        <textarea rows={12}/>
    </article>
    )
}
export default NewMessage