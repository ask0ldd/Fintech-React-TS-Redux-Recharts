import App from '../App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Stats from '../pages/Stats'
import ConversionRates from '../pages/ConversionRates'

/** basename gh pages **/

const CustomRouter = () => {
    return (
        <Router basename="/Fintech-TypeScriptTest/">
            <Routes>
                <Route path='*' element={<App />} />
                <Route path='stats/' element={<Stats />} />
                <Route path='stats/:id' element={<Stats />} />
                <Route path='conversion/' element={<ConversionRates />} />
            </Routes>
        </Router>
    )
}

export default CustomRouter