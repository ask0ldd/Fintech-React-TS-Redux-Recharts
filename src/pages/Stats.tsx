import { useParams } from "react-router-dom"
import BalanceBarsChart from "../components/BalanceBarsChart"
import Header from "../components/Header"
import StatsHorizontalMenu from "../components/StatsHorizontalMenu"
import VMenu from "../components/VMenu"
import '../styles/Stats.css'

function Stats(){
    const activeGraph = useParams().id
    
    return(
        <div className="statsPage__mainContainer">
            <VMenu activePage="stats" />
            <div className="headernGraph__container">
                <Header/>
                {activeGraph === 'balance' && <StatsHorizontalMenu activeGraph={activeGraph}/>}
                <BalanceBarsChart/>
            </div>
        </div>
    )
}

export default Stats