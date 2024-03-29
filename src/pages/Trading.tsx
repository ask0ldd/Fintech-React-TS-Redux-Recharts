import CryptoAreaChart from "../components/Trading/CryptoAreaChart"
import Header from "../components/Header"
import OwnedCurrencyList from "../components/Trading/OwnedCurrencyList"
import VMenu from "../components/VMenu"
import '../styles/trading/Trading.css'

function Trading(){
    return(
        <main className="tradingPage__mainContainer">
            <VMenu activePage="trading" />
            <div className="right__container">
                <Header format="uncompressed" username="Tony Montana" iban="NL89RABO1289364745" clientID='X458-89995'/>
                <section className='tradingItemsRow__container'>
                    <div style={{flexDirection:'column', alignItems:'start'}} className='trading__items'>
                        <h3 style={{marginTop:'2px'}}>Crypto Balance (7d)</h3>
                        <p style={{marginTop:'12px'}} className="mainText">12,025 USD (prev. 8,737 USD)</p>
                    </div>
                    <div className='trading__items'>
                        <div className="trading__items__textContainer">
                            <h3 style={{marginTop:'2px'}}>Top Currency Perf. (7d)</h3>
                            <p style={{marginTop:'12px'}} className="mainText">CHF / Swiss Franc</p>
                        </div>
                        <div className="trading__items__button">
                            +2.6%
                        </div>
                    </div>
                    <div className='trading__items'>
                        <div className="trading__items__textContainer">
                            <h3 style={{marginTop:'2px'}}>Top Crypto Perf. (7d)</h3>
                            <p style={{marginTop:'12px'}} className="mainText">ETH / Ethereum</p>
                        </div>
                        <div className="trading__items__button">
                            +8.3%
                        </div>
                    </div>
                </section>
                <section className='tradingItemsRow__container'>
                    <div style={{flexDirection:'column', alignItems:'start'}} className='trading__items'>
                        <h3 style={{marginTop:'2px'}}>Crypto Balance (7d)</h3>
                        <p style={{marginTop:'12px'}} className="mainText">12,025 USD (prev. 8,737 USD)</p>
                    </div>
                    <div className='trading__items'>
                        <div className="trading__items__textContainer">
                            <h3 style={{marginTop:'4px'}}>Worst Currency Perf. (7d)</h3>
                            <p style={{marginTop:'10px'}} className="mainText">APS / Argentine Peso</p>
                        </div>
                        <div className="trading__items__button">
                            -5.1%
                        </div>
                    </div>
                    <div className='trading__items'>
                        <div className="trading__items__textContainer">
                            <h3 style={{marginTop:'4px'}}>Worst Crypto Perf. (7d)</h3>
                            <p style={{marginTop:'10px'}} className="mainText">BIN / Binance</p>
                        </div>
                        <div className="trading__items__button">
                            -3.2%
                        </div>
                    </div>
                </section>
                <section className='tradingGraphnList__container'>
                    <CryptoAreaChart/>
                    <OwnedCurrencyList/>
                </section>
            </div>
        </main>
    )
}

export default Trading