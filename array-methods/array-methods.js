const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const planetEl = document.getElementById("planets")

let printIt = function (planet) {
    planetEl.innerHTML += `
    <section>${planet}</section>
    `
}

planets.forEach(printIt)

/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


const capitalPlanets = planets.map(function (planet) {
    //store first letter from planet name in variable
    let firstLetter = planet.slice(0,1)
    //remove first letter in planet name by replacing it with an empty character
    let sadWord = planet.replace(firstLetter, '')
    //convert the first letter into a capital letter
    let capitalLetter = firstLetter.toUpperCase()
    //add the two strings together and put them into a new variable
    let happyWord = capitalLetter + sadWord
    return happyWord
})

console.log(capitalPlanets)

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const filteredPlanets = planets.filter(function (planet){
    //test current planet to see if it containers the letter e,
    //and store the boolean result of true/false
    //in a variable
    let whatsup = planet.includes("e")
    if (whatsup === true) {
        //if the planet contains an e
        //return it to the new array
        return planet
    } 
})

console.log(filteredPlanets)


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

//when declaring the function for .reduce, the 'currentWords' parameter represents the first array item passed
//into the function, and on every pass of the function after that it will carry the new reduced value with it.
//the 'next' parameter represents the next item in the array (following the index order) that will be
//passed into the function and reduced into 'currentWords'
const fullSentence = words.reduce(function (currentWords, next) {
    //store the reductions into 'newSentence'
    //add a space between the variables  
    //to make the sentence readable
    let newSentence = currentWords + ' ' + next
    //return the reduced sentence 
    return newSentence
})

console.log(fullSentence)