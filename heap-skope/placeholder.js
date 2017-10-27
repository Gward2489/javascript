const gemHeapSkope = function () { // No parameter needed
    // Resource contained inside
    /*
    The gem mine does not exist outside the barricade of the
    hëap-skopes. The Lexscopistanians build the barricade
    around their facility AND the resource.
    a.k.a.
    Instead of being located in an outer scope to the
    function, the gem mine is enclosed by the scope of
    the `gemHeapSkope` function.
    */
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
    /*
    Instead of processing the entirety of the resources in
    bulk - which is what the stâck-skope does - this skope
    will return an object that has a method for processing
    each type of mineral.
    We're exposing the functionality of this skope to code
    in the outer scope, so that the order in which minerals
    are processed can be customized.
    Hëap-skopes workshops can process 5 kilograms of a
    mineral with each work order. So every time the `process`
    function is invoked, subtract 5 from the amount of the
    requested mineral from the enclosed GemMine above.
    */
    

    return {
        "process": function (requestedMineral) {
            if ( kiloCounter === 0 ) {
                for (mineral in GemMine) {
                    let mineralObject = GemMine[mineral]
                    let currentMineral = mineral
                    
                    if (currentMineral === requestedMineral) {
                        kiloCounter = mineralObject.kilograms
                    }
                }
            }
            
            let kilosSubtracted = 0
            
            if ( kiloCounter > 5 ) {
                kilosSubtracted = 5
                kiloCounter -= 5
            }
            
            
            /*
            Subtract 5 from the total kilograms available in
            the gem mine, but make sure you stop when there
            are no minerals left.
            */
            if (kiloCounter >= 1 & kiloCounter <= 5) {
                let subtractValue = kiloCounter * -1
                kilosSubtracted = subtractValue * -1
                kiloCounter += subtractValue 
                
                
                /* 5kg, or more, of the mineral remaining? */ 
                /*
                You can reference the `GemMine` variable here
                because it lives in an outer scope:
    e.g. GemMine[requestedMineral].kilograms
    */
}
return {
    "mineral": requestedMineral,
    "amount": kilosSubtracted  // Change this to the correct amount
}
}
}
}

let kiloCounter = 0

/*
The SkopeManager variable represents the object with the
`process` method on it.
*/
const SkopeManager = gemHeapSkope()

const heapSkopeContainers = []

let mineIt = SkopeManager.process

let mineArray = ["Onyx", "Amethyst", "Emerald", "Bloodstone"]

/*
Process the gems in any order you like until there none
left in the gem mine.
*/

const mineralContainerGenerator = function* () {
    let currentContainer = 1
    const maximumContainers = 30

    while (currentContainer <= maximumContainers) {
        yield { "id": currentContainer, "type": "order", "orders": [] }
        currentContainer++
    }
}


const mineralContainerFactory = mineralContainerGenerator()

let currentContainer = mineralContainerFactory.next().value

mineArray.forEach( 
    currentMine => {
        
        do {
            let currentOrder = mineIt(currentMine)
            currentContainer.orders.push(currentOrder)
            let weightArray = currentContainer.orders.map(function(orderProperties) {
                    let orderWeight = orderProperties.amount
                    return orderWeight
                }).reduce(function (accumulator, currentValue){
                    return accumulator + currentValue
                })
            console.log(weightArray)
               /* if (currentWeight >= 560 ) {
                    heapSkopeContainers.push(currentContainer)
                    currentContainer = mineralContainerFactory.next().value
                }*/

            } while (kiloCounter > 0)
    }
)

if (currentContainer.orders.length > 0) {
    heapSkopeContainers.push(currentContainer)
}

console.log(heapSkopeContainers)

/*
Create a generator for 30 storage containers, which is how many a hëap-skope
is equipped with.
*/



/*
Place the gems in the storage containers, making sure that
once a container has 565 kilograms of gems, you move to the
next one.
*/