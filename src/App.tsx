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
import { useState } from 'react'
import { IRow } from './types/types'
import avatar1 from '/avatars/avatar1.png'
import avatar2 from '/avatars/avatar2.png'
import avatar3 from '/avatars/avatar3.png'
import avatar4 from '/avatars/avatar4.png'
import avatar5 from '/avatars/avatar5.png'
import avatar6 from '/avatars/avatar6.png'
import avatar7 from '/avatars/avatar7.png'
import avatar8 from '/avatars/avatar8.png'

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
    { name : 'Annette Black', avatar : avatar1, inQuicklist : true },
    { name : 'Arlene McCoy', avatar : avatar2, inQuicklist : false },
    { name : 'Cameron Williamson', avatar : avatar3, inQuicklist : false },
    { name : 'Darlene Robertson', avatar : avatar4, inQuicklist : true },
    { name : 'Theresa Webb', avatar : avatar5, inQuicklist : false },
    { name : 'Eleanor Pena', avatar : avatar6, inQuicklist : false },
    { name : 'Devon Lane', avatar : avatar7, inQuicklist : true },
    { name : 'Jenny Wilson', avatar : avatar8, inQuicklist : true },
  ])

  const { modalVisibility, setModalVisibility } = useModalManager({initialVisibility : false, initialModalContentId : 'addContactsQuicklist'})

  return (
    <div className="App">
      <VMenu/>
      <div className='balance__ccard__transferCrypto__container'>
        <Header/>
        <Balance/>
        <CreditCards/>
        <div className='transfer__cryptos__container'>
            <Transfer rows={rows} setModalVisibility={setModalVisibility}/>
            <Cryptos/>
        </div>
      </div>
      <div className='transactions__debits__container'>
        <Transactions/>
        <RecurringDebits/>
      </div>
      <Modal modalContent={<AddContactsQuickList setModalVisibility={setModalVisibility} rows={rows} setRows={setRows}/>} modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}/>
    </div>
  )
}

export default App
