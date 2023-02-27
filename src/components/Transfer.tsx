import '../styles/Transfer.css'

const formatAmount = (amount : number) : string => {
    return amount >= 0 ? '$'+amount.toFixed(2) : '-$'+amount.toFixed(2).toString().slice(1)
}

const Transfer = () => {
    return(
        <div className='transfer__container'>aaa
            <div className='grid16'></div>
        </div>
    )

}

export default Transfer