let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

const veggieElement = document.getElementById("vegetables")
const bandElement = document.getElementById("boy-bands")


for (let loopTracker = 0; loopTracker < bands.length; loopTracker ++) {
    let currentBand = bands[loopTracker]
    bandElement.innerHTML +=`<h2>${currentBand}</h2>`

    let currentVeggie = vegetables[loopTracker]
    veggieElement.innerHTML +=`<h2>${currentVeggie}</h2>`
}








//Fails

/* let bandsVeg = {
     "bands": bands,
     "vegetables": vegetables
}

  function addText (object) {
    for (let key in object) {
        const currentArray = object[key]
        for (let loopTracker = 0; loopTracker < currentArray.length; loopTracker ++) {
            if (currentArray === "bands") {
                bandElement.innerHTML() += <p>bands.loopTracker</p>
            } else if (currentArray === "vegetables") {
                veggieElement.innerHTML() += <p>vegetables.loopTracker</p>
            }  
        }
    }
}

addText(bandsVeg)

*/
/*

// Get a reference to the appropriate DOM element for bands
const bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
const veggieElement = document.getElementById("vegetables");

// Execute a for loop that will iterate over the arrays
for (let loopTracker = 0; loopTracker < .length; loopTracker += 1) {

  // Get a reference to the current item in the bands array
  const currentBand = ???;

  // Update the innerHTML value of the DOM element for bands

  // Get a reference to the current item in the vegetables array
  const currentVeggie = ???;

  // Update the innerHTML value of the DOM element for vegetables
  */