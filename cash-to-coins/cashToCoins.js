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
            while (dollarAmount >= 0) {
                dollarAmount -= .01
                j++
            }
            piggyBank.pennies = j
        }
    }

console.log(piggyBank)
