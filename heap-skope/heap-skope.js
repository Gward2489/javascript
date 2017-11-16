// Define a counter to keep track of the current amount 
// of kilograms available of the resource currently being mined

let kiloCounter = 0

// define a variable that will hold the amount of kilograms processed per order

const kilosPerOrder = 5

// Create an empty array to push the filled mineral containers into

const heapSkopeContainers = []

// Define an array with string values correspinging to the gems
// we will request

let mineArray = ["Onyx", "Amethyst", "Emerald", "Bloodstone"]

// Define the gemHeapSkope function. This function contains the gems (data) 
// inside and that data can not be effected by the global scope. However, the processeses of this function
// can effect things on the global scope.

const gemHeapSkope = function () {

    // define an object with Gem names for its keys. The key values for these gems are objects
    //with the corresponding gem's kilogram weight for the current key values.

    const GemMine = {
        "Onyx": {
            "kilograms": 453
        },
        "Amethyst": {
            "kilograms": 453
        },
        "Bloodstone": {
            "kilograms": 453
        },
        "Emerald": {
            "kilograms": 453
        }
    }
    
    // return an object contaning a function as a key value. The name of the key holding the function
    //is process

    return {
        "process": function (requestedMineral) {
            // use the initial kiloCounter value of 0 to fun an if loop 
            if ( kiloCounter === 0 ) {
                //itterate through the keys of the GemMine object
                for (mineral in GemMine) {
                    // store the kilograms object corresponding to the mineral in a variable
                    let mineralObject = GemMine[mineral]
                    // store the key name (which will be the mineral name as a string)
                    // into avariable
                    let currentMineral = mineral
                    // run an if loop test to see if the current mineral being itterated
                    // matches the requested mineral 
                    if (currentMineral === requestedMineral) {
                        // if the current mineral matches the requested mineral
                        // store its value (an integer representing kilogram weight)
                        // into the kilocounter variable.
                        kiloCounter = mineralObject.kilograms
                    }
                }
            }
            
            // define a variable to keep track of how many kilograms are removed
            // from kiloCounter with each invocation of the function. Kilos subtracted 
            // used to add the kilogram amount for the current into the order object.

            let kilosSubtracted = 0
            
            // run an if loop that tests if the value of kilo counter is greater than kilosPerOrder.
            // if the value is greater than KilosPerOrder it will remove KilosPerOrder from kiloCounter
            // and set the value of kilosSubtracted to KilosPerOrder

            if ( kiloCounter > kilosPerOrder ) {
                kilosSubtracted = kilosPerOrder
                kiloCounter -= kilosPerOrder
            }
            
            // use an if loop to test and see if the remaining amount of kilograms is less than 
            // the requested kilos per order. If it is less than kilos per order and greater 
            // than zero, store a negative integer equal to the remaining kilos in a variable

            if (kiloCounter > 0 && kiloCounter <= kilosPerOrder) {
                let subtractValue = kiloCounter * -1
                // update the kilosSubtracted value so that it reflects the 
                // remaining amount of kilograms
                kilosSubtracted = subtractValue * -1
                // remove the remaining kilograms by adding the negative interger in subtract value
                // to kiloCounter. The value should be the same value, one negative, and one postive,
                // which will cancel eachother out
                kiloCounter += subtractValue   
            }
            // return the object with the correct mineral title and amount for the current order
            return {
                "mineral": requestedMineral,
                "amount": kilosSubtracted 
            }
        }
    }
}

// Define a generator function to produce unique containers to hold the
// gem orders

const mineralContainerGenerator = function* () {

    // the value stored in currentContainer to set the unique for each container
    let currentContainer = 1
    // set a maximum number of containers so there is never more than 30 containers
    const maximumContainers = 30
    // use a while loop to test the value of currentContainer against the
    // maximum containers value. While the currentContainer value is less
    // than the value of maximumContainers, the generator function will produce
    // a new container with a unique id
    while (currentContainer <= maximumContainers) {
        yield { "id": currentContainer, "type": "order", "orders": [] }
        currentContainer++
    }
}

// invoke the gemHeapSkope function and store the object returned by it into the
// variable SkopeManager

const SkopeManager = gemHeapSkope()

// get the function returned by gemHeapSkope and store it into a variable

let mineIt = SkopeManager.process

// Create an instance of the mineralContainer Generator

const mineralContainerFactory = mineralContainerGenerator()

// generate a new container and store it in the variable currentContainer

let currentContainer = mineralContainerFactory.next().value

// use a for each method to itterate over each string value in the mineArray and 
// execute a function with the string passed in as the value.
// The strings should correlate with the gems to be mined. Therefore, we can pass those
// into the 'requestedMineral' paramter

mineArray.forEach( 
    currentMine => {
        // use a do while loop so we can initilize the loop without a test paramter
        do {
            // evoke the mineIt function and capture the order object returned into 
            // the currentOrder variable
            let currentOrder = mineIt(currentMine)
            // push the order object into the orders array in the container object
            currentContainer.orders.push(currentOrder)
            // use a combination of map and reduce to determine the current weight of
            // each container. Use .map on the array of order objects within the container
            // object to return a new array that holds the order weight as an integer instead of
            // the entire order as an object. Then use reduce to return 
            // a single integer value and capture it in currentWeight  
            let weightArray = currentContainer.orders.map(function(orderProperties) {
                let orderWeight = orderProperties.amount
                return orderWeight
            })
            let currentWeight = weightArray.reduce(function (accumulator, currentValue){
                    return accumulator + currentValue
                })

                // if the current weight gets to close to the maximum weight of 565, push
                // that container into the heapSkopeContainers array and generate a new
                // container 
                if (currentWeight >= 560 ) {
                    heapSkopeContainers.push(currentContainer)
                    currentContainer = mineralContainerFactory.next().value
                }
            // when the mine it function is evoked, kilocounter will be set to the current amount
            // of available kilograms for the given resource. With each execution of the 'do while'
            // loop, it will be reduced by the amount used per order. When the kiloCounter reaches zero
            // the do while loop will finish and the .forEach method will move the the next array item
            // and the run the function again. This will repeat until the final gem in the 
            // array has been 'mined'
            } while (kiloCounter > 0)
        }
)

// push the final container into the heapscop array regardless of how full it is

if (currentContainer.orders.length > 0) {
    heapSkopeContainers.push(currentContainer)
}

//display the containers in the console

console.log(heapSkopeContainers)
