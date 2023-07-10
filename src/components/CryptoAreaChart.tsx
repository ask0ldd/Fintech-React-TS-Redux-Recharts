import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import '../styles/CryptoAreaChart.css'

const data = [
    {week: 'w1', price: 12400},
    {week: 'w2', price: 17300},
    {week: 'w3', price: 12700},
    {week: 'w4', price: 19630},
]

function CustomYTicks(value : number) : string{
    return(
        (value/1000).toString()+'k'
    )
}

function CryptoAreaChart(){
    return(
        <ResponsiveContainer className="cryptoareaChart__container" width="40%" height="100%">
            <AreaChart width={300} data={data} margin={{top: 64, right: 32, left: 8, bottom: 48,}}>
                <defs>
                    <linearGradient id="PurpleUV" x1="0" y1="1" x2="0" y2="0" /* Line Gradient Definition */>
                        <stop offset="0%" stopColor="#8B3FAF" stopOpacity={0.47} />
                        <stop offset="100%" stopColor="#703FAF" stopOpacity={1} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#8397AF"/>
                <XAxis dataKey="week" tickMargin={14}/>
                <YAxis domain={[5000, 20000]} tickCount={4} tickFormatter={CustomYTicks} tickMargin={8} interval="preserveStartEnd"/>
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="#441B95" fill="url(#PurpleUV)" />
                <text textAnchor="start" fontSize={26} fontWeight={700} x={29} y={28} fontFamily="Poppins" fill="#5c39aa">
                    BTC Value
                </text>    
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default CryptoAreaChart