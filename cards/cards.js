//  create a variable and store the location to inject cards into the html
let cardSpot = document.getElementById("cardMarker")
// create a variable and store the location to add an event listener for the button click
let buttonEvent = document.getElementById("createButton")
// create a generator function to create unique IDs for the cards
let buttonNumber = function* () {
    let counter = 0
// use an endless while loop to cycle up the counter as many times as needed
    while (true) {
        counter ++
        yield counter // always use yield in a generator function to return each instance
    }
}
//assign the current instance to a variable so it can be passed into the HTML injection
let uniqueId = buttonNumber()
let currentId = uniqueId.next().value
//add an event listener to the button, and attach a function that executes on click
buttonEvent.addEventListener("click", function (event) {
    //store the value of the text entered in the text area into a variable
    //so it may be passed into the HTML injection.
    let theMessage = document.getElementById("message").value
    //inject a card into the html with each execution of the function
    //include an onClick event in the button to execute a function that will remove the card
    cardSpot.innerHTML += `
    <article id="article_${currentId}" class="cardStyle">${theMessage}<br>
    <button id="button_${currentId}" class="buttonStyle">
    Delete</button></article>`
    
}  )

// add an event listener to the section containing the card marker
//to capture the click event on the delete button when it bubbles up
//to the section element containing the card marker Id
cardSpot.addEventListener("click", function (event) {
    //select the target element with 'event.target' and store it in a variable
    let targetButton = event.target
    //find its parent element and store it in a variable
    let thisParent = targetButton.parentElement
    //get the parent of the parent and store it in a variable
    let grandPappy = thisParent.parentElement
    //remove the child
    grandPappy.removeChild(thisParent)
})


