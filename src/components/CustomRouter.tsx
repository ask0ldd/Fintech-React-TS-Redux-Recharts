import App from '../App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Stats from '../pages/Stats'
import Trading from '../pages/Trading'

/** basename gh pages **/

const CustomRouter = () => {
    return (
        <Router basename="/Fintech-React-TS-Redux-Recharts/">
            <Routes>
                {/*<Route path='*' element={<Page404 />} />*/}
                <Route path='/' element={<App />} />
                <Route path='stats/' element={<Stats />} />
                <Route path='stats/:id' element={<Stats />} />
                <Route path='trading/' element={<Trading />} />
            </Routes>
        </Router>
    )
}

export default CustomRouter