import '../styles/CreditCardsOptions.css'

interface IProps{
    iconFilename : string
}

function CreditCardsOptions({iconFilename} : IProps){
    return(<div role="button" className='creditcardOption_button'>
        <img src={`./icons/${iconFilename}.png`}/>
    </div>)
}

export default CreditCardsOptions