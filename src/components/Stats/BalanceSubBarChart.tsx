import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import '../../styles/stats/BalanceBarsChart.css'
import { IDatas } from "../../pages/Stats"

/*const datas : IDatas = [
    { month: 'Jan', financial : {income:3952, expenses:2927} },
    { month: 'Feb', financial : {income:5053, expenses:3502} },
    { month: 'Mar', financial : {income:4070, expenses:3012} },
    { month: 'Apr', financial : {income:5012, expenses:4231} },
    { month: 'May', financial : {income:3127, expenses:2843} },
    { month: 'Jun', financial : {income:4857, expenses:4152} },
    { month: 'Jul', financial : {income:3888, expenses:3675} },
    { month: 'Aug', financial : {income:4781, expenses:4307} },
    { month: 'Sep', financial : {income:3492, expenses:3210} },
    { month: 'Oct', financial : {income:4313, expenses:4107} },
    { month: 'Nov', financial : {income:4918, expenses:3115} },
    { month: 'Dec', financial : {income:4650, expenses:4153} },
]*/

function BalanceSubBarChart({datas} : {datas : IDatas}){

    const datasSub : Array<IDatasSub> = datas.map((data, index, datas) => { 
        return {
            month : data.month, 
            cumulatedSavings : sumMonthlySavings([...datas].slice(0,index+1)),
            monthlySavings : data.financial.income - data.financial.expenses
        } 
    })

    return(
        <ResponsiveContainer className="graph__container" width="100%" height={680}>
            <ComposedChart data={datasSub}
            barCategoryGap='25%'
            barGap={10}
            margin={{
                top: 102,
                right: 46,
                left: 40,
                bottom: 36,
            }}>                
                <defs>
                    <linearGradient id="GreenUV" x1="0" y1="1" x2="0" y2="0" /* Line Gradient Definition */>
                        <stop offset="0%" stopColor="#3DD683" stopOpacity={0.47} />
                        <stop offset="90%" stopColor="#2AD579" stopOpacity={0.87} />
                        <stop offset="100%" stopColor="#8CEE84" stopOpacity={1} />
                    </linearGradient>
                    <linearGradient id="PurpleUV" x1="0" y1="1" x2="0" y2="0" /* Line Gradient Definition */>
                        <stop offset="0%" stopColor="#946EC2" stopOpacity={0.47} />
                        <stop offset="90%" stopColor="#965DDA" stopOpacity={0.87} />
                        <stop offset="100%" stopColor="#D56EE0" stopOpacity={1} />
                    </linearGradient>
                </defs>
                <YAxis dataKey="monthlySavings" yAxisId={0} tickCount={7} tick={<CustomizedYTick />}/>
                <YAxis dataKey="cumulatedSavings" yAxisId={1} tickCount={7} hide={true}/>
                <XAxis dataKey="month" tickLine={false} tick={<CustomizedXTick />}/>
                <CartesianGrid  strokeDasharray="4 4" vertical={false} stroke="#A4B3C6" />
                <Line dataKey="cumulatedSavings" type="linear" stroke="rgb(92, 57, 170)" strokeDasharray="2 4" strokeWidth={2} yAxisId={1} dot={false}/>
                <Bar dataKey="monthlySavings" fill="url(#GreenUV)" maxBarSize={30} yAxisId={0} radius={[3, 3, 0, 0]} label={CustomLabel}/>
                <Legend align="right" verticalAlign='top' width={400} iconSize={8} wrapperStyle={{top:36, right:36}}
                payload={[{ value: 'Monthly Savings (USD)', type: 'circle', id: 'ID01', color: '#2AD579'}, { value: 'Cumulated Savings', type: 'circle', id: 'ID01', color: 'rgb(92, 57, 170)'}]}
                formatter={resizedLegendValue} />
                <text textAnchor="start" fontSize={26} fontWeight={700} x={40} y={56} fontFamily="Poppins" fill="#5c39aa">
                    Monthly Balances
                </text>
                <Tooltip
                cursor={false}
                wrapperStyle={{outline:'none', border:'none'}}
                itemStyle={{color:'#000', fontSize:'10px'}}
                labelStyle={{color:'#000',display:'none'}}
                content={CustomTooltip}
                />
            </ComposedChart>
        </ResponsiveContainer>
    )
}

function CustomLabel(props: any){
    if(props.value < 1000)
    return(
        <g>
            <text fontSize="14px" fill="rgb(116, 121, 140)" x={props.x-3} y={props.y-16} textAnchor="start">
                {props.value + ' $'}
            </text>
        </g>
    )

    return(
        <g>
            <text fontSize="14px" fill="rgb(116, 121, 140)" x={props.x-7} y={props.y-16} textAnchor="start">
                {props.value + ' $'}
            </text>
        </g>
    )
}

function CustomizedXTick(props: any){
    return(
    <g>
        <text fontSize="14px" x={props.x-14} y={props.y+20} textAnchor="start">
            {props.payload.value}
        </text>
    </g>
    )
}

function CustomizedYTick(props: any){
    return(
    <g>
        <text fontSize="14px" x={props.x-18} y={props.y+5} textAnchor="end">
            {props.payload.value}
        </text>
    </g>
    )
}

const styleTitle = (value: string) => {
    return (<div className="chartTitle">{value}</div>)
}

const resizedLegendValue = (value: string) => {
    return <span style={{fontSize:"14px", color:"#74798C", marginLeft:"6px", display:"inline-block", transform:"translateY(0.5px)"}}>{value}</span>
}

const CustomTooltip = ({payload} : any) => {
    if(payload && payload.length){
        return(
            <div className="balance__tooltip">
                <p>Cumulated Savings : {payload[0].value} $</p>
            </div>
        )
    }
}

function sumMonthlySavings(datasArray : Array<IDataRow>){
    return datasArray.reduce((accumulator, datasObject) => accumulator + (datasObject.financial.income - datasObject.financial.expenses), 0)
}

interface IDataRow{
   month: string
   financial : IFinancial
}

interface IFinancial{
    income: number
    expenses: number
}

interface IDatasSub{
    month : string
    cumulatedSavings : number
    monthlySavings : number
}

export default BalanceSubBarChart
