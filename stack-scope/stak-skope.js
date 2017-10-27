

const cropContainerMaker = function* () {
    let currentCropContainer = 1
    const maxContainers = 10
    
    while (currentCropContainer <= maxContainers) {
        yield {"id": currentCropContainer, "type": "crop","bushels": [] }
        currentCropContainer ++
    }
}

const cropContainerFactory = cropContainerMaker()

const waterContainerMaker = function* () {
    let currentWaterContainer = 1
    const maxContainers = 10

    while (currentWaterContainer <= maxContainers) {
        yield {"id": currentWaterContainer, "type": "water", "jugs": [] }
        currentWaterContainer ++ 
    }
}

const waterContainerFactory = waterContainerMaker()

const furContainerMaker = function* () {
    let currentFurContainer = 1
    const maxContainers = 10

    while (currentFurContainer <= maxContainers) {
        yield {"id": currentFurContainer, "type": "fur", "pelts": []}
        currentFurContainer++
    }
}

const furContainerFactory = furContainerMaker()

let farm = [
    {"type": "Beets",
    "plants": 300 
    },
    {"type": "Squash",
    "plants": 231
    },
    {"type": "Wheat",
    "plants": 200
    },
    {"type": "Hops",
    "plants": 85
    }
]

let river = [
    {"type": "Dirty",
    "buckets": 500
    },
    {"type": "Mostly_Clean",
    "buckets": 900
    },
    {"type": "Clean",
    "buckets": 780
    },
    {"type": "Cleanest",
    "buckets": 500
    },
]

let forest = [
    {"type": "Boar",
    "count": 90
    },
    {"type": "Lion",
    "count": 140
    },
    {"type": "Mastadon",
    "count": 18
    },
    {"type": "Ultimate Dragon",
    "count": 120
    },
]
// 22 lexiscopistanian plants makes 1 bushel
const cropStackSkope = function (rawCrop) {

    const processedCrops = rawCrop.map(
        currentCrop => ({
            "type": currentCrop.type,
            "bushels": Math.floor(currentCrop.plants/22)
        })
    )

    return processedCrops
}

//15 lexiscopistanian water buckets = 1 lexiscopistanian water jug

const waterStackSkope = function (waterHarvest) {

    const claimedWater = waterHarvest.map (
        waterQuality => ({
            "type": waterQuality.type,
            "jugs": Math.floor(waterQuality.buckets/15)
        })
    )

    return claimedWater
}

//in lexiscopistan 1 animal makes 3 pelts

const furStackSkope = function (gameSelection) {

    const slainGame = gameSelection.map (
        currentGame => ({
            "type": currentGame.type,
            "pelts": Math.floor(currentGame.count/3)
        })
    )

    return slainGame
}

cropStackSkope.containers = []

waterStackSkope.containers = []

furStackSkope.containers = []

let allBushels = cropStackSkope(farm)

let allJugs = waterStackSkope(river)

let allPelts = furStackSkope(forest)

let currentCropContainer = cropContainerFactory.next().value

allBushels.forEach( 
    currentBushel => {
        for (i = 0; i < currentBushel.bushels; i++) {
            const bushel = {"type":currentBushel.type}
            currentCropContainer.bushels.push(bushel)

            if (currentCropContainer.bushels.length === 21) {
                cropStackSkope.containers.push(currentCropContainer)
                currentCropContainer = cropContainerFactory.next().value
            }
        }
    }
)

if (currentCropContainer.bushels.length > 0) {
    cropStackSkope.containers.push(currentCropContainer)
}

let currentWaterContainer = waterContainerFactory.next().value

allJugs.forEach(
    currentJug => {
        for (i = 0; i < currentJug.jugs; i++) {
            const jug = {"type":currentJug.type}
            currentWaterContainer.jugs.push(jug)

            if (currentWaterContainer.jugs.length === 150) {
                waterStackSkope.containers.push(currentWaterContainer)
                currentWaterContainer = waterContainerFactory.next().value
            }
        }
    }
)

if (currentWaterContainer.jugs.length > 0) {
    waterStackSkope.containers.push(currentWaterContainer)
}

let currentFurContainer = furContainerFactory.next().value

allPelts.forEach(
    currentPelt => {
        for (i = 0; i < currentPelt.pelts; i ++) {
            const pelt = {"type":currentPelt.type}
            currentFurContainer.pelts.push(pelt)

            if (currentFurContainer.pelts.length === 85) {
            furStackSkope.containers.push(currentFurContainer)
            currentFurContainer = furContainerFactory.next().value
            }
        }
    }
)

if (currentFurContainer.pelts.length > 0) {
    furStackSkope.containers.push(currentFurContainer)
}

console.log(cropStackSkope.containers)
console.log(waterStackSkope.containers)
console.log(furStackSkope.containers)