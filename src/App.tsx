import './App.css'
import './components/Transactions'
import Transactions from './components/Transactions'
import RecurringDebits from './components/RecurringDebits'
import Balance from './components/Balance'

/*const showString = (text : string) => {
 const textContainer = document.querySelector('#text') as HTMLElement;
 textContainer.innerHTML = text;
}*/


function App() {
  // showString('coucou')

  return (
    <div className="App">
      <div className='balance__ccard__transferCrypto__container'>
        <Balance/>
      </div>
      <div className='transactions__debits__container'>
        <Transactions/>
        <RecurringDebits/>
      </div>
    </div>
  )
}

export default App
