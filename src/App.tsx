import './App.css'
import './components/Transactions'
import Transactions from './components/Transactions'
import RecurringDebits from './components/RecurringDebits'

/*const showString = (text : string) => {
 const textContainer = document.querySelector('#text') as HTMLElement;
 textContainer.innerHTML = text;
}*/


function App() {
  // showString('coucou')

  return (
    <div className="App">
      <div className='TransactionsDebitsContainer'>
        <Transactions/>
        <RecurringDebits/>
      </div>
    </div>
  )
}

export default App
