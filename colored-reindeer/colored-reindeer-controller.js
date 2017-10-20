//retreive reindeer string and parse it back into an array
//store that array in variable 'storedDeer'
let storedDeer = JSON.parse(localStorage.getItem("fancyDeer"))
//store a reference to deerID location in HTML
let sleigh = document.getElementById("deerId")
//create a foor loop to iterate through the retreived array
for (i = 0; i < storedDeer.length; i++) {
    //use deerID reference to inject html with proper deer info
    let santasFavorite = storedDeer[i]
    sleigh.innerHTML += `
    <section style="color: ${santasFavorite.color}">
    ${santasFavorite.name}</section>
    `
}