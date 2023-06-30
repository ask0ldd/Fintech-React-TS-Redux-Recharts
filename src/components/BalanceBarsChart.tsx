import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"
import '../styles/BalanceBarsChart.css'

const datas = [
    {
        month: 'Jan', financial : {income:3952, expenses:2927}
    },
    {
        month: 'Feb', financial : {income:5053, expenses:3502}
    },
    {
        month: 'Mar', financial : {income:3952, expenses:2927}
    },
    {
        month: 'Apr', financial : {income:5053, expenses:3502}
    },
    {
        month: 'May', financial : {income:3952, expenses:2927}
    },
    {
        month: 'Jun', financial : {income:5053, expenses:3502}
    },
    {
        month: 'Jul', financial : {income:3952, expenses:2927}
    },
    {
        month: 'Aug', financial : {income:5053, expenses:3502}
    },
    {
        month: 'Sep', financial : {income:3952, expenses:2927}
    },
    {
        month: 'Oct', financial : {income:5053, expenses:3502}
    },
    {
        month: 'Nov', financial : {income:3952, expenses:292}
    },
    {
        month: 'Dec', financial : {income:5053, expenses:3502}
    },
]

function BalanceBarsChart(){

    return(
        <ResponsiveContainer className="graph__container" width="100%" height={680}>
            <BarChart data={datas}
            barCategoryGap='25%'
            barGap={12}
            margin={{
                top: 148,
                right: 40,
                left: 24,
                bottom: 20,
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
                <CartesianGrid  strokeDasharray="4 4" vertical={false} stroke="#A4B3C6" />
                <YAxis dataKey="financial.income" yAxisId={0} tickCount={7}/>
                <XAxis dataKey="month" tickLine={false}/>
                <Bar dataKey="financial.income" fill="url(#GreenUV)" yAxisId={0} radius={[3, 3, 0, 0]}/>
                <Bar dataKey="financial.expenses" fill="url(#PurpleUV)" yAxisId={0} radius={[3, 3, 0, 0]}/>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default BalanceBarsChart