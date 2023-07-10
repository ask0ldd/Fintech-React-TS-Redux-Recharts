import { AreaChart, ResponsiveContainer } from "recharts"

const data = [
    {week: 1, price: 12400},
    {week: 2, price: 17300},
    {week: 3, price: 12700},
    {week: 4, price: 19630},
]

function CryptoAreaChart(){
    return(
        <ResponsiveContainer className="cryptoareaChart__container" width="100%" height="100%">
            <AreaChart width={500} height={400} data={data} margin={{top: 10, right: 30, left: 0, bottom: 0,}}>
                
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default CryptoAreaChart