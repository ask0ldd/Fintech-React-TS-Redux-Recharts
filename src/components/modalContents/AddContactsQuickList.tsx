import '../../styles/AddContactsQuickList.css'
import avatar1 from '/avatars/avatar1.png'
import avatar2 from '/avatars/avatar2.png'
import avatar3 from '/avatars/avatar3.png'
import avatar4 from '/avatars/avatar4.png'
import avatar5 from '/avatars/avatar5.png'

function AddContactsQuickList(){
    return (
        <div className='contactListModal__bodyContainer'>
            <h2>Add Usual Recipients</h2>
            <div className="contactsList__container">
                <ContactRow avatarUrl={avatar1}/>
                <ContactRow avatarUrl={avatar2}/>
                <ContactRow avatarUrl={avatar3}/>
                <ContactRow avatarUrl={avatar4}/>
                <ContactRow avatarUrl={avatar5}/>
            </div>
        </div>
    )
}

// props : alt img / nom user / id
function ContactRow({avatarUrl} : ContactRowProps){
    return(
    <div className='contactRow'>
        <img src={avatarUrl} alt="avatar picture 1"/>Cameron Williamson<button className='transfer__amountButton violetButton xButton'></button>
    </div>
    )
}

export default AddContactsQuickList

interface ContactRowProps{
    avatarUrl : string
}