export const Formatter =
{
    addCurrencySignToAmount(currencySign : string, amount : number) : string {
        return amount >= 0 ? currencySign + amount.toFixed(2) : '-' + currencySign + amount.toFixed(2).toString().slice(1)
    }
}