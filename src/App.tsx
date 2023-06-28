import './App.css'
import './components/Transactions'
import Transactions from './components/Transactions'
import RecurringDebits from './components/RecurringDebits'
import Balance from './components/Balance'
import Transfer from './components/Transfer'
import Cryptos from './components/Cryptos'
import Header from './components/Header'
import VMenu from './components/VMenu'
import CreditCards from './components/CreditCards'
import Modal from './components/Modal'
import useModalManager from './hooks/useModalManager'
import AddContactsQuickList from './components/modalContents/AddContactsQuickList'

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

  const { modalVisibility, setModalVisibility } = useModalManager({initialVisibility : false})

  return (
    <div className="App">
      <VMenu/>
      <div className='balance__ccard__transferCrypto__container'>
        <Header/>
        <Balance/>
        <CreditCards/>
        <div className='transfer__cryptos__container'>
            <Transfer setModalVisibility={setModalVisibility}/>
            <Cryptos/>
        </div>
      </div>
      <div className='transactions__debits__container'>
        <Transactions/>
        <RecurringDebits/>
      </div>
      <Modal modalContent={<AddContactsQuickList setModalVisibility={setModalVisibility}/>} modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}/>
    </div>
  )
}

export default App
