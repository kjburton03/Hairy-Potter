// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firedPottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"

// Make 5 pieces of pottery at the wheel
let ashtray = makePottery('ashtray', 4, 1)
console.log(ashtray)

let vase = makePottery('vase', 3, 7 )
console.log(vase)

let plate = makePottery('plate', 9, 2)
console.log(plate)

let bowl = makePottery('bowl', 5, 4)
console.log(bowl)

let mug = makePottery('mug', 8, 4)
console.log(mug)


// Fire each piece of pottery in the kiln
 let firedAshtray = firedPottery(ashtray, 2600)
 let firedVase = firedPottery(vase, 2300)
 let firedPlate = firedPottery(plate, 1500)
 let firedBowl = firedPottery(bowl, 2201)
 let firedMug = firedPottery(mug, 2199)
console.log(firedAshtray)
console.log(firedVase)
console.log(firedPlate)
console.log(firedBowl)
console.log(firedMug)

// Determine which ones should be sold, and their price
toSellOrNotToSell(firedAshtray)
toSellOrNotToSell(firedVase)
toSellOrNotToSell(firedPlate)
toSellOrNotToSell(firedBowl)
toSellOrNotToSell(firedMug)
let potteryCatalog = usePottery()
console.log(potteryCatalog)
// Invoke the component function that renders the HTML list



