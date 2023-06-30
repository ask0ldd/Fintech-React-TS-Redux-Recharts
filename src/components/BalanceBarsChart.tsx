import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import '../styles/BalanceBarsChart.css'

const datas = [
    {
        month: 'Jan', financial : {income:3952, expanses:2927}
    },
    {
        month: 'Feb', financial : {income:5053, expanses:3502}
    },
    {
        month: 'Mar', financial : {income:3952, expanses:2927}
    },
    {
        month: 'Apr', financial : {income:5053, expanses:3502}
    },
    {
        month: 'May', financial : {income:3952, expanses:2927}
    },
    {
        month: 'Jun', financial : {income:5053, expanses:3502}
    },
    {
        month: 'Jul', financial : {income:3952, expanses:2927}
    },
    {
        month: 'Aug', financial : {income:5053, expanses:3502}
    },
    {
        month: 'Sep', financial : {income:3952, expanses:2927}
    },
    {
        month: 'Oct', financial : {income:5053, expanses:3502}
    },
    {
        month: 'Nov', financial : {income:3952, expanses:292}
    },
    {
        month: 'Dec', financial : {income:5053, expanses:3502}
    },
]

function BalanceBarsChart(){

    return(
        <ResponsiveContainer className="graph__container" width="100%" height={680}>
            <BarChart data={datas}
            barCategoryGap='10%'
            barGap={8}>
                <YAxis dataKey="financial.income" yAxisId={0}/>
                <XAxis dataKey="month"/>
                <Bar dataKey="financial.income" fill="#282D30" yAxisId={0}/>
                <Bar dataKey="financial.expenses" fill="#E60000" yAxisId={0}/>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default BalanceBarsChart