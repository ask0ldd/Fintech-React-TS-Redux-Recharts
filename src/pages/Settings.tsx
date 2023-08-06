import BankInfos from '../components/Settings/BankInfos'
import CustomerInfos from '../components/Settings/CustomerInfos'
import Header from '../components/Header'
import VMenu from '../components/VMenu'
import '../styles/Settings.css'
import ContactlessPayment from '../components/Settings/ContactlessPayment'
import QuickDeactivation from '../components/Settings/QuickDeactivation'

function Settings(){
    return (
        <main className="settingsPage__mainContainer">
            <VMenu activePage="settings" />
            <section className="headernSettings__container">
                <Header format="uncompressed" username="Tony Montana" iban="NL89RABO1289364745" clientID='X458-89995'/>
                <div className='settingsArticles__container'>
                    <div className='leftSettingsCol__container'>
                        <CustomerInfos/>
                        <QuickDeactivation/>
                    </div>
                    <div className='rightSettingsCol__container'>
                        <BankInfos/>
                        <ContactlessPayment/>
                        <QuickDeactivation/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Settings