import Header from '../components/Header'
import VMenu from '../components/VMenu'
import '../styles/ConversionRates.css'

function ConversionRates(){
    return (
        <div className="conversionPage__mainContainer">
            <VMenu activePage="conversion" />
            <div className="right__container">
                <Header/>
                <div className='conversionItemsRow__container'>
                    <div className='conversion__items'></div><div className='conversion__items'></div><div className='conversion__items'></div>
                </div>
                <div className='conversionItemsRow__container'>
                    <div className='conversion__items'></div><div className='conversion__items'></div><div className='conversion__items'></div>
                </div>
                <div className='conversionGraphnList__container'>
                    
                </div>
            </div>
        </div>
    )
}

export default ConversionRates