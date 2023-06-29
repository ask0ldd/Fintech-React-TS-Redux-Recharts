import { IRow } from "../../types/types"
import '../../styles/TransferValidation.css'

function TransferValidation({setModalVisibility, rows, setRows} : IProps){
 return(
    <div className='transferValidation__bodyContainer'>
        <h2>Transfer Summary</h2>
        <div className="transferSummary__container">
            aaa
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