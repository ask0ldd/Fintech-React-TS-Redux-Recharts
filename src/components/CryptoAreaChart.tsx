import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import '../styles/CryptoAreaChart.css'

const data = [
    {week: 'week 1', price: 12400},
    {week: 'week 2', price: 17300},
    {week: 'week 3', price: 12700},
    {week: 'week 4', price: 19630},
]

function CryptoAreaChart(){
    return(
        <ResponsiveContainer className="cryptoareaChart__container" width="40%" height="100%">
            <AreaChart width={300} height={800} data={data} margin={{top: 10, right: 30, left: 0, bottom: 0,}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />         
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default CryptoAreaChart