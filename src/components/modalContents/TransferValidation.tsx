import { IRow } from "../../types/types"
import '../../styles/TransferValidation.css'

function TransferValidation({setModalVisibility, rows, setRows} : IProps){
 return(
    <div className='transferValidation__bodyContainer'>
        <h2>Transfer Confirmation</h2>
        <h3>Transfer Summary</h3>
        <div className="transferSummary__container">
            <img src="./avatars/tonyavatar.png"/>
            <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
                <span>Recipient</span>
                <span>Recipient</span>
                <span>Recipient</span>
                <span>Recipient</span>
            </div>
        </div>
        <h3>Estimated Date</h3>
        <div className="estimatedDate__container">
            24/06/2023
        </div>
        <button className='confirmSelection__button' onClick={() => setModalVisibility(false)}>Confirm This Transfer</button>
    </div>
 )
}

export default TransferValidation

interface IProps{
    setModalVisibility : (bool : boolean) => void
    rows : Array<IRow>
    setRows : (arg : Array<IRow>) => void
}