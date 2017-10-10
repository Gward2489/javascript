const piggyBank = {
    "quarters": 120,
    "nickels": 250,
    "dimes":  350,
    "pennies": 21203
}

let dollarAmount = 0

function total (coin) {  
     if (coin === piggyBank.quarters) {
         dollarAmount = piggyBank.quarters * .25
     } else if (coin === piggyBank.nickels) {
         dollarAmount = piggyBank.nickels * .05
     } else if (coin === piggyBank.dimes) {
         dollarAmount = piggyBank.dimes * .10
     } else if (coin === piggyBank.pennies) {
         dollarAmount = piggyBank.pennies * .01
     }
}

dollarAmount.toFixed(2)

total(piggyBank.pennies)

console.log("$" + dollarAmount)