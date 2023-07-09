import Header from "../components/Header"
import VMenu from "../components/VMenu"

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
                    <div className='tradingList__container'>
                        <h2>Your Wallet</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trading