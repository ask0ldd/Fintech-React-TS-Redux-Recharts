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
import TransferValidation from './components/modalContents/TransferValidation'
import { useState } from 'react'
import { IRow } from './types/types'

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

  const [rows, setRows] = useState<Array<IRow>>([
    { name : 'Annette Black', avatar : './avatars/avatar1.png', inQuicklist : true },
    { name : 'Arlene McCoy', avatar : './avatars/avatar2.png', inQuicklist : false },
    { name : 'Cameron Williamson', avatar : './avatars/avatar3.png', inQuicklist : false },
    { name : 'Darlene Robertson', avatar : './avatars/avatar4.png', inQuicklist : true },
    { name : 'Theresa Webb', avatar : './avatars/avatar5.png', inQuicklist : false },
    { name : 'Eleanor Pena', avatar : './avatars/avatar6.png', inQuicklist : false },
    { name : 'Devon Lane', avatar : './avatars/avatar7.png', inQuicklist : true },
    { name : 'Jenny Wilson', avatar : './avatars/avatar8.png', inQuicklist : true },
  ])

  const { modalVisibility, setModalVisibility, modalContentId, setModalContentId } = useModalManager({initialVisibility : false, initialModalContentId : 'addContactsQuicklist'})



  return (
    <main className="App">
      <VMenu/>
      <div className='balance__ccard__transferCrypto__container'>
        <Header format="compressed" username="Tony Montana" iban="NL89RABO1289364745" clientID='X458-89995'/>
        <Balance statementAmount={{balance: 3601, income: 1601, expenses: 901}}/>
        <CreditCards/>
        <div className='transfer__cryptos__container'>
            <Transfer rows={rows} setModalVisibility={setModalVisibility} setModalContentId={setModalContentId}/>
            <Cryptos/>
        </div>
      </div>
      <section className='transactions__debits__container'>
        <Transactions/>
        <RecurringDebits/>
      </section>
      { 
      { // equivalent to switch
        'addContactsQuicklist' :  
        <Modal modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}>
          <AddContactsQuickList setModalVisibility={setModalVisibility} rows={rows} setRows={setRows}/>
        </Modal>,
        'transferValidation' :
        <Modal modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}>
          <TransferValidation setModalVisibility={setModalVisibility} rows={rows} setRows={setRows}/>
        </Modal>,
      } [modalContentId] 
      // equivalent to default
      ||  <Modal modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}>
            <AddContactsQuickList setModalVisibility={setModalVisibility} rows={rows} setRows={setRows}/>
          </Modal>
      }
    </main>
  )
}

export default App
