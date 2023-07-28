import Header from "../components/Header"
import VMenu from "../components/VMenu"

function Messaging(){
    return(
        <main className="messagingPage__mainContainer">
            <VMenu activePage="messaging" />
            <section className="headernMessagesBox__container">
                <Header format="uncompressed" username="Tony Montana" iban="NL89RABO1289364745" clientID='X458-89995'/>

            </section>

        </main>
    )
}

export default Messaging