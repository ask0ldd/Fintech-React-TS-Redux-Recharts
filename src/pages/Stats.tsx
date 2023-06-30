import Header from "../components/Header"
import StatsHorizontalMenu from "../components/StatsHorizontalMenu"
import VMenu from "../components/VMenu"
import '../styles/Stats.css'

function Stats(){
    return(
        <div className="statsPage__mainContainer">
            <VMenu/>
            <div className="headernGraph__container">
                <Header/>
                <StatsHorizontalMenu/>
            </div>
        </div>
    )
}

export default Stats