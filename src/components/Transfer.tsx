import '../styles/Transfer.css'
import avatar1 from '/avatars/avatar1.png'
import avatar2 from '/avatars/avatar2.png'
import avatar3 from '/avatars/avatar3.png'
import avatar4 from '/avatars/avatar4.png'
import avatar5 from '/avatars/avatar5.png'
import { Formatter } from '../services/formatter'

const Transfer = ({setModalVisibility}:IProps) => {
    return(
        <article className='transfer__container'>
            <h2 className="transfer__title">Quick Wire Transfer</h2>
            <div className="transfer__amountnButton__container">
                <div className='transfer__amount'>
                    <div className='transfer__innerButton'>Amount</div><span className='transfer__amountText'>$300</span>
                </div>
                <button className='transfer__amountButton violetButton vButton'></button>
            </div>
            <div className='transfer__avatarsnButton__container'>
                <img src={avatar1} alt="avatar picture 1"/>
                <img src={avatar2} alt="avatar picture 2"/>
                <img src={avatar3} alt="avatar picture 3"/>
                <img src={avatar4} alt="avatar picture 4"/>
                <img src={avatar5} alt="avatar picture 5"/>
                <button className='transfer__amountButton violetButton xButton' onClick={() => setModalVisibility(true)}></button>
            </div>
            <div className='grid16'></div>
        </article>
    )

}

export default Transfer

interface IProps{
    setModalVisibility : (bool : boolean) => void
}