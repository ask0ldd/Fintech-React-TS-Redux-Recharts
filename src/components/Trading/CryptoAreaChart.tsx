import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import '../../styles/CryptoAreaChart.css'

const data : Array<IDatas> = [
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
            <AreaChart width={300} data={data} margin={{top: 64, right: 38, left: 4, bottom: 48,}}>
                <defs>
                    <linearGradient id="PurpleUV" x1="0" y1="1" x2="0" y2="0" /* Line Gradient Definition */>
                        <stop offset="0%" stopColor="#8B3FAF" stopOpacity={0.47} />
                        <stop offset="100%" stopColor="#703FAF" stopOpacity={1} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#8397AF"/>
                <XAxis dataKey="week" fontSize={14} tickMargin={14} fill="#000000"/>
                <YAxis domain={[5000, 20000]} fontSize={14} fill="#000000" tickCount={4} tickFormatter={CustomYTicks} tickMargin={16} interval="preserveStartEnd"/>
                <Tooltip 
                    cursor={false}
                    wrapperStyle={{outline:'none', border:'none'}}
                    itemStyle={{color:'#000', fontSize:'10px'}}
                    labelStyle={{color:'#000',display:'none'}}
                    content={CustomTooltip}
                />
                <Area type="monotone" dataKey="price" strokeWidth={2} stroke="#441B95" fill="url(#PurpleUV)" />
                <text textAnchor="start" fontSize={26} fontWeight={700} x={16} y={28} fontFamily="Poppins" fill="#5c39aa">
                    BTC Value
                </text>    
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default CryptoAreaChart

export const CustomTooltip = ({payload} : any) => {
    if(payload[0] && payload.length){
        return(
            <div className="areachart__tooltip">
                <p>Week : {payload[0].payload.week[1]}</p>
                <p style={{marginTop:'4px'}}>Price : {payload[0].payload.price} USD</p>
            </div>
        )
    } else {
        return(
            <div style={{display:'none'}}></div>
        )
    }
}

interface IDatas{
    week : string
    price : number
}