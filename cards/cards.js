//  create a variable and store the location to inject cards into the html
let cardSpot = document.getElementById("cardMarker")
// create a variable and store the location to add an event listener for the button click
let buttonEvent = document.getElementById("createButton")
// create a generator function to create unique IDs for the cards
let counter = 0
let buttonNumber = function* () {
// use an endless while loop to cycle up the counter as many times as needed
    while (true) {
        counter ++
        yield counter // always use yield in a generator function to return each instance
    }
}
//assign the current instance to a variable so it can be passed into the HTML injection
const uniqueId = buttonNumber()
//add an event listener to the button, and attach a function that executes on click
buttonEvent.addEventListener("click", function () {
    //store the value of the text entered in the text area into a variable
    //so it may be passed into the HTML injection.
    let theMessage = document.getElementById("message").value
    //inject a card into the html with each execution of the function
    //include an onClick event in the button to execute a function that will remove the card
    cardSpot.innerHTML += `
    <article id="article_${uniqueId.next().value}" class="cardStyle">${theMessage}<br>
    <button onClick="byeBye()" id="button_${counter}" class="buttonStyle">
    Delete</button></article>`
}  )

//function to remove button
let byeBye = function () {
    //use 'EVENT.TARGET' to assign event element to variable
    let thisButton = event.target
    //assign parent of event element to variable
    let thisParent = thisButton.parentElement
    //assign parent of event parent to variable
    let grandPappy = thisParent.parentElement
    //remove card by targeting it from it's parent element
    grandPappy.removeChild(thisParent)
}
 
