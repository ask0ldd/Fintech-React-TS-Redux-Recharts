import App from '../App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Stats from '../pages/Stats'

/** basename gh pages **/

const CustomRouter = () => {
    return (
        <Router basename="/Fintech-TypeScriptTest/">
            <Routes>
                <Route path='*' element={<App />} />
                <Route path='stats/' element={<Stats />} />
            </Routes>
        </Router>
    )
}

export default CustomRouter