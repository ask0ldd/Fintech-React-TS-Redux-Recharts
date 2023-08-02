import '../../styles/AddContactsQuickList.css'
import { useEffect, useState } from 'react'
import { IRow } from '../../types/types'

function AddContactsQuickList({setModalVisibility, rows, setRows} : IProps){

    function numberOfSelectedRows(){
        return rows.filter(row => row.inQuicklist).length
    }

    return (
        <div className='recipientListModal__bodyContainer'>
            <h2>Favorite Recipients</h2>
            <div className="recipientsList__container">
                {rows.map((row, index) => <ContactRow name={row.name} key={'contactrow-'+index} rowIndex={index} avatarUrl={row.avatar} rows={rows} setRows={setRows}/>)}
            </div>
            <div className='recipientsSelected__container'>
                {numberOfSelectedRows()}  contacts selected
            </div>
            <button className='confirmSelection__button' onClick={() => setModalVisibility(false)}>Confirm Your Selection</button>
        </div>
    )
}

function ContactRow({name, avatarUrl, rows, setRows, rowIndex} : IContactRowProps){

    function isContactInQuicklist(){
        return rows[rowIndex].inQuicklist
    }

    function nItemsInQuickList(){
        return ([...rows].filter(row => row.inQuicklist)).length
    }

    return(
    <div className='recipientRow'>
        <img src={avatarUrl} alt="avatar picture 1"/>
        <div className='recipientRow__name'>{name}</div>
        <button className={!isContactInQuicklist() ? 'transfer__amountButton xButton violetButton' : 'transfer__amountButton xButton greenButton'}
        onClick={() => {
            if(nItemsInQuickList() > 4 && !isContactInQuicklist()) return ;
            const newRows = [...rows]
            // update the quicklisted row
            newRows[rowIndex] = {...newRows[rowIndex], inQuicklist : !newRows[rowIndex].inQuicklist}
            setRows(newRows)
        }}></button>
    </div>
    )
}

export default AddContactsQuickList

interface IContactRowProps{
    name : string
    avatarUrl : string
    rows : Array<IRow>
    setRows : (arg : Array<IRow>) => void
    rowIndex : number
}

interface IProps{
    setModalVisibility : (bool : boolean) => void
    rows : Array<IRow>
    setRows : (arg : Array<IRow>) => void
}