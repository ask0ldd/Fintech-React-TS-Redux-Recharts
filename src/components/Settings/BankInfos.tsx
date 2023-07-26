import '../../styles/BankInfos.css'
import bankphoto from '/bankphoto7.png'
import timeIcon from '/icons/time.png'

function BankInfos(){
  return(
    <article className='bankInfos__container'>
        <h2>Your Bank</h2>
        <ul>
            <li className='label'>Your Center :</li>
            <li className='value'>Bank Of America OC</li>
            <li className='label'>Address :</li>
            <li className='value'>2680 N Tustin St, Orange</li>
            <li className='label'>State :</li>
            <li className='value'>California 92865</li>
        </ul>
        <div className='bankphoto__container'>
            <img src={bankphoto}/>
        </div>
        <div className="schedule__container">
            <img className='timeIcon' src={timeIcon}/>
            <div className='separator'></div>
            <ul>
                <li>Open on :</li> {/* should be h4 */}
                <li className='item'>Monday - Satursday</li>
                <li className='item'>Sunday</li>
            </ul>
            <div className='separator'></div>
            <ul>
                <li>Business Hours :</li> {/* should be h4 */}
                <li className='item'>8h - 12h / 13h - 17h</li>
                <li className='item'>8h - 12h</li>
            </ul>

        </div>
    </article>
  )   
}

export default BankInfos