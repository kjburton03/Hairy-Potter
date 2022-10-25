let potCat = ""
export const toSellOrNotToSell = (pot) =>  {
    if(pot.weight >= 6 && pot.cracked === false ) {
        pot.price = 40
    } else if (pot.weight < 6 && pot.cracked === false ) {
        pot.price = 20
    }
    return pot

} 
export const usePottery = () => {
    let potteryCatalog = potCat

    return potteryCatalog
}