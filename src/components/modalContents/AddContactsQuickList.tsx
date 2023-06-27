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
                <ContactRow name={'Annette Black'} avatarUrl={avatar1}/>
                <ContactRow name={'Arlene McCoy'} avatarUrl={avatar2}/>
                <ContactRow name={'Cameron Williamson'} avatarUrl={avatar3}/>
                <ContactRow name={'Darlene Robertson'} avatarUrl={avatar4}/>
                <ContactRow name={'Theresa Webb'} avatarUrl={avatar5}/>
                <ContactRow name={'Eleanor Pena'} avatarUrl={avatar4}/>
                <ContactRow name={'Devon Lane'} avatarUrl={avatar5}/>
                <ContactRow name={'Jenny Wilson'} avatarUrl={avatar3}/>
            </div>
            <div className='contactsSelected__container'>
                4  contacts selected
            </div>
            <button className='confirmSelection__button'>Confirm Your Selection</button>
        </div>
    )
}

// props : alt img / nom user / id
function ContactRow({name, avatarUrl} : ContactRowProps){
    return(
    <div className='contactRow'>
        <img src={avatarUrl} alt="avatar picture 1"/>Cameron Williamson<button className='transfer__amountButton violetButton xButton'></button>
    </div>
    )
}

export default AddContactsQuickList

interface ContactRowProps{
    name : string
    avatarUrl : string
}