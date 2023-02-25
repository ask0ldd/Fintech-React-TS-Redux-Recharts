import './App.css'
import './components/Transactions'
import Transactions from './components/Transactions'

/*const showString = (text : string) => {
 const textContainer = document.querySelector('#text') as HTMLElement;
 textContainer.innerHTML = text;
}*/


function App() {
  // showString('coucou')

  return (
    <div className="App">
      <Transactions/>
    </div>
  )
}

export default App
