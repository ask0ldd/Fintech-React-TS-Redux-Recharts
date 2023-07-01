import { useParams } from "react-router-dom"
import BalanceBarsChart from "../components/BalanceBarsChart"
import Header from "../components/Header"
import StatsHorizontalMenu from "../components/StatsHorizontalMenu"
import VMenu from "../components/VMenu"
import '../styles/Stats.css'

function Stats(){
    const graphId = useParams().id
    
    return(
        <div className="statsPage__mainContainer">
            <VMenu/>
            <div className="headernGraph__container">
                <Header/>
                {graphId === 'balance' && <StatsHorizontalMenu graphId={graphId}/>}
                <BalanceBarsChart/>
            </div>
        </div>
    )
}

export default Stats