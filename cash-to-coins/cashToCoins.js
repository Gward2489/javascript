//Does not work right

//set dollar amount
let dollarAmount = 450.34

//create an object with each key title as a coin type
//and set their key values to 0, representing an empty piggy bank
piggyBank = {
    "quarters": 0,
    "dimes": 0,
    "nickels": 0,
    "pennies": 0
}

//create a 'FOR IN' loop to iterate through the keys.
for (property in piggyBank) {
    //nest an if loop to test the key names for coin type
        if (property === "quarters") {
            //create a counter to tally the amount of coins.
            let j = 0
            //nest a 'WHILE' loop inside the foor loop. This while loop will run while
            // 'dollarAmount' is greater than the value of a quarter
            while (dollarAmount > .25) {
                //subtract 25 cents fom dollar amount with each pass of the loop
                dollarAmount -= .25
                //add a coin for each pass
                j++
            }
            //replace the key value of quarters with the current value of j
            piggyBank.quarters = j

    //repeat for each coin type with an 'ELSE IF' loop
        } else if (property === "dimes") {
            let j = 0
            while (dollarAmount > .10) {
                dollarAmount -= .10
                j++
            }
            piggyBank.dimes = j
        } else if (property === "nickels") {
            let j = 0
            while (dollarAmount > .05) {
                dollarAmount -= .05
                j++
            }
            piggyBank.nickels = j
        } else if (property === "pennies") {
            let j = 0
            while (dollarAmount > .01) {
                dollarAmount -= .01
                j++
            }
            piggyBank.pennies = j
        }
    }

console.log(piggyBank)












/*
function calc (cash) {
    let j = 0
    let i = 0
    let y = 0
    let x = 0

    for (property in piggyBank)
        if (property === "quarters") {
            j = cash / .25
            i = cash - j
            y = (j / 2)
            piggyBank.quarters = j.toFixed(0) - y.toFixed(0)
        } else if (property === "dimes") {
            j = piggyBank.quarters * .25
            i = cash - j
            y = i / .10
            x = (y / 2)
            piggyBank.dimes = y.toFixed(0) - x.toFixed(0) 
        } else if (property === "nickels") {
            j = piggyBank.dimes * .10
            i = cash - j
            y = i / .05
            x = (y / 2)
            piggyBank.nickels = y.toFixed(0) - x.toFixed(0) 
        } else if (property === "pennies") {
            j = piggyBank.nickels * .05
            i = cash - j
            y = i / .01
            x = (y / 2)
            piggyBank.pennies = y.toFixed(0) - x.toFixed(0)
        } 
        
}

calc(dollarAmount)

console.log(piggyBank)

*/

/* Fail #2
function calc (cash) {
    let j = 0

    for (property in piggyBank) {
        if (property === "quarters") {
            j = cash / .25
            Math.floor(j)
            piggyBank.quarters = j
        } else if (property === "dimes") {
            j = cash / .10
            piggyBank.dimes = j.toFixed(0)
        } else if (property === "nickels") {
            j = cash / .05
            piggyBank.nickels = j.toFixed(0)
        } else if (property === "pennies") {
            j = cash / .01
            piggyBank.pennies = j.toFixed(0)
        }
    
        
    }
}

calc(dollarAmount)

console.log(piggyBank)
*/


/* Does not work because const does not lock the 206.66 value, just the variable type 
 of dollarAmount which is a number */ 

/* 
const dollarAmount = 206.66

piggyBank = {
    "quarters": 0,
    "dimes": 0,
    "nickels": 0,
    "pennies": 0
}

let floatingTotal = 0

piggyBank.quarters = (dollarAmount / .25).toFixed(0)
floatingTotal = dollarAmount - (piggyBank.quarters * .25)
piggyBank.dimes = (floatingTotal / .10).toFixed(0)
floatingTotal = dollarAmount - ((piggyBank.quarters * .25) + (piggyBank.dimes * .10))
piggyBank.nickels = (floatingTotal / .05).toFixed(0)
floatingTotal = dollarAmount - ((piggyBank.nickels * .5) + (piggyBank.dimes * .10) + (piggyBank.quarters * .25))
piggyBank.pennies = (floatingTotal / .01).toFixed(0)


console.log(piggyBank)

*/

