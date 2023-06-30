import App from '../App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/** basename gh pages **/

const CustomRouter = () => {
    return (
        <Router basename="/Fintech-TypeScriptTest/">
            <Routes>
                <Route path='*' element={<App />} />
            </Routes>
        </Router>
    )
}

export default CustomRouter