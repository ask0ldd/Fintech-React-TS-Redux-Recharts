import CryptoAreaChart from "../components/CryptoAreaChart"
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
                    <div className='trading__items'></div>
                    <div className='trading__items'></div>
                    <div className='trading__items'>
                        <div className="trading__items__innerContainer">
                            <div className="textContainer">
                                <h2 className="tradingPage__mainContainer">Top Performer (7d)</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='tradingItemsRow__container'>
                    <div className='trading__items'></div><div className='trading__items'></div><div className='trading__items'></div>
                </div>
                <div className='tradingGraphnList__container'>
                    <CryptoAreaChart/>
                    <OwnedCurrencyList/>
                </div>
            </div>
        </div>
    )
}

export default Trading