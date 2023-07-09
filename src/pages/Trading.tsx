import Header from "../components/Header"
import OwnedCurrencyList from "../components/OwnedCurrencyList"
import VMenu from "../components/VMenu"
import '../styles/Trading.css'

function Trading(){
    return(
        <div className="tradingPage__mainContainer">
            <VMenu activePage="trading" />
            <div className="right__container">
                <Header/>
                <div className='tradingItemsRow__container'>
                    <div className='trading__items'></div><div className='trading__items'></div><div className='trading__items'></div>
                </div>
                <div className='tradingItemsRow__container'>
                    <div className='trading__items'></div><div className='trading__items'></div><div className='trading__items'></div>
                </div>
                <div className='tradingGraphnList__container'>
                    <OwnedCurrencyList/>
                </div>
            </div>
        </div>
    )
}

export default Trading