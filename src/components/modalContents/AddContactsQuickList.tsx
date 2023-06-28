import '../../styles/AddContactsQuickList.css'
import avatar1 from '/avatars/avatar1.png'
import avatar2 from '/avatars/avatar2.png'
import avatar3 from '/avatars/avatar3.png'
import avatar4 from '/avatars/avatar4.png'
import avatar5 from '/avatars/avatar5.png'
import avatar6 from '/avatars/avatar6.png'
import avatar7 from '/avatars/avatar7.png'
import avatar8 from '/avatars/avatar8.png'
import { useEffect, useState } from 'react'

function AddContactsQuickList(){

    const [rows, setRows] = useState([
        { name : 'Annette Black', avatar : avatar1, inQuicklist : false },
        { name : 'Arlene McCoy', avatar : avatar2, inQuicklist : false },
        { name : 'Cameron Williamson', avatar : avatar3, inQuicklist : false },
        { name : 'Darlene Robertson', avatar : avatar4, inQuicklist : false },
        { name : 'Theresa Webb', avatar : avatar5, inQuicklist : false },
        { name : 'Eleanor Pena', avatar : avatar6, inQuicklist : false },
        { name : 'Devon Lane', avatar : avatar7, inQuicklist : false },
        { name : 'Jenny Wilson', avatar : avatar8, inQuicklist : false },
    ])

    function numberOfSelectRows(){
        return rows.filter(row => row.inQuicklist).length
    }

    return (
        <div className='contactListModal__bodyContainer'>
            <h2>Favorite Recipients</h2>
            <div className="contactsList__container">
                {rows.map((row, index) => <ContactRow name={row.name} key={'contactrow-'+index} rowIndex={index} avatarUrl={row.avatar} rows={rows} setRows={setRows}/>)}
            </div>
            <div className='contactsSelected__container'>
            {numberOfSelectRows()}  contacts selected
            </div>
            <button className='confirmSelection__button'>Confirm Your Selection</button>
        </div>
    )
}

function ContactRow({name, avatarUrl, rows, setRows, rowIndex} : ContactRowProps){
    return(
    <div className='contactRow'>
        <img src={avatarUrl} alt="avatar picture 1"/>
        <div className='contactRow__name'>{name}</div>
        <button className='transfer__amountButton violetButton xButton' 
        onClick={() => {
            const newRows = [...rows]
            newRows[rowIndex] = {...newRows[rowIndex], inQuicklist : !newRows[rowIndex].inQuicklist}
            setRows(newRows)
        }}></button>
    </div>
    )
}

export default AddContactsQuickList

interface ContactRowProps{
    name : string
    avatarUrl : string
    rows : Array<IRow>
    setRows : any //!!!! a definir
    rowIndex : number
}

interface IRow{
    name:string
    avatar:string
    inQuicklist:boolean
}