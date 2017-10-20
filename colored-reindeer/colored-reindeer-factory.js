//Create arrays of reindeer names an color
const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
const color = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
//create an empty array to push reindeer objects into
let coloredReindeer = []
//create a generator function to pass deer colors stored in instances into the
//deer object factory
const colorGenerator = function* () {
    let j = 0  //a counter variable to keep track of which color 
    while (j < color.length) {
        let deerColor = color[j]
        j++
        yield deerColor //YIELD the current color to 'colorGenerator'
    }
}
//call the colorGenerator function and store what it yields into 'colorFactory'
const colorFactory = colorGenerator()
//create a factory function to produce objects with reindeer name and color
const reindeerObjectFactory = function (deerName) {
    return Object.create(null, {
        "name": { value: deerName, enumerable: true }, //pass in deer name through parameter
        "color": { value: colorFactory.next().value, enumerable: true } //retreive instances 
    })                                                                  //of color value                                                                       
}                                                                       //from 'colorFactory'
//create a foor loop to iterate through reindeer names
for (i = 0; i < reindeer.length; i++) {
    //call the factory function and pass the current reindeer name into
    //the function as its parameter, then store the object it returns
    //into the variable 'reindeerObject'
    let reindeerObject = reindeerObjectFactory(reindeer[i])
    coloredReindeer.push(reindeerObject)
}


//stringify object and set to local storage
let fancyDeer = JSON.stringify(coloredReindeer)
localStorage.setItem("fancyDeer", fancyDeer)




