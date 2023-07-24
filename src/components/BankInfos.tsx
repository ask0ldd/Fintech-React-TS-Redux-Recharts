import '../styles/BankInfos.css'
import bankphoto from '/bankphoto.jpg'

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
    </article>
  )   
}

export default BankInfos