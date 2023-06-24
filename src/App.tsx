import './App.css'
import './components/Transactions'
import Transactions from './components/Transactions'
import RecurringDebits from './components/RecurringDebits'
import Balance from './components/Balance'
import Transfer from './components/Transfer'
import Cryptos from './components/Cryptos'
import Header from './components/Header'
import VMenu from './components/VMenu'

/*const showString = (text : string) => {
 const textContainer = document.querySelector('#text') as HTMLElement;
 textContainer.innerHTML = text;
}*/

const datas = [
  '.delayed__text',
]

window.onload = (e) => {
  setTimeout(() => {
      const datasFields = Array.from(document.querySelectorAll(datas[0])) as HTMLElement[]
      const loadingAnims = Array.from(document.querySelectorAll('.default__loading')) as HTMLElement[]
      datasFields.forEach(field => 
          {field.style.display = "block"
          field.style.opacity = "1"
          })
      loadingAnims.forEach(anim => anim.style.display = "none")
  }, 6000)
}


function App() {
  // showString('coucou')

  return (
    <div className="App">
      <VMenu/>
      <div className='balance__ccard__transferCrypto__container'>
        <Header/>
        <Balance/>
        <div className='transfer__cryptos__container'>
            <Transfer/>
            <Cryptos/>
        </div>
      </div>
      <div className='transactions__debits__container'>
        <Transactions/>
        <RecurringDebits/>
      </div>
    </div>
  )
}

export default App
