import '../styles/Transfer.css'
import { Formatter } from '../services/formatter'
import { IRow } from '../types/types'
import { useState } from 'react'

const Transfer = ({setModalVisibility, rows, setModalContentId}:IProps) => {

    function getContactsInQuicklist(){
        return rows.filter(row => row.inQuicklist)
    }

    const blankQuicklist = ['./avatars/blank.png', './avatars/blank.png', './avatars/blank.png', './avatars/blank.png', './avatars/blank.png']

    const [transferRecipientName, setTransferRecipientName] = useState<string>()

    function getBlankAvatarsToFillQuicklist(){
        return [...blankQuicklist].slice(0, 5-getContactsInQuicklist().length)
    }

    return(
        <article className='transfer__container'>
            <h2 className="transfer__title">Quick Wire Transfer</h2>
            <div className="transfer__amountnButton__container">
                <div className='transfer__amount'>
                    <div className='transfer__innerButton'>Amount</div><span className='transfer__amountText'>$300</span>
                </div>
                <button className='transfer__amountButton violetButton vButton'
                onClick={() => {
                    setModalContentId('transferValidation')
                    setModalVisibility(true)
                }}></button>
            </div>
            <div className='transfer__avatarsnButton__container'>
                {
                    getContactsInQuicklist().map((row, index) => 
                        <img onClick={() => {setTransferRecipientName(row.name)}} 
                        style={row.name === transferRecipientName ? {border:'2px solid rgba(166, 41, 237, 1)', borderRadius:'20px'} : {}} 
                        className='nonBlankAvatar' key={'avatarQL-'+index} 
                        src={row.avatar} alt={row.name + " avatar"}/>) 
                }
                { getBlankAvatarsToFillQuicklist().map((row, index) => <img key={'blankAvatar-'+index} src='./avatars/blank.png' alt="blank space"/>) }
                <button className='transfer__amountButton violetButton xButton' 
                onClick={() => {
                    setModalContentId('addContactsQuicklist')
                    setModalVisibility(true)
                }}>
                </button>
            </div>
            <div className='grid16'></div>
        </article>
    )

}

export default Transfer

interface IProps{
    setModalVisibility : (bool : boolean) => void
    rows : Array<IRow>
    setModalContentId : (bool : string) => void
}