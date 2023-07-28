import App from '../App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Stats from '../pages/Stats'
import Trading from '../pages/Trading'
import Settings from '../pages/Settings'
import Messaging from '../pages/Messaging'

// !!!!!!!!! TODO 404 Page!

const CustomRouter = () => {
    return (
        <Router basename="/Fintech-React-TS-Redux-Recharts/">
            <Routes>
                {/*<Route path='*' element={<Page404 />} />*/}
                <Route path='/' element={<App />} />
                <Route path='stats/' element={<Stats />} />
                <Route path='stats/:id' element={<Stats />} />
                <Route path='trading/' element={<Trading />} />
                <Route path='settings/' element={<Settings />} />
                <Route path='messaging/' element={<Messaging />} />
                <Route path='messaging/:id' element={<Messaging />} />
            </Routes>
        </Router>
    )
}

export default CustomRouter