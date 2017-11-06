

const logContainerGenerator = function* () {
    let maxContainers = 10
    let currentContainer = 1

    while (currentContainer <= maxContainers) {
        yield {"id": currentContainer, "type": "logs", "lumber": [],}
        currentContainer ++
    }
}

const logContainerFactory = logContainerGenerator()

let forrest = [
    {
        "wood": "Oak",
        "trees": 9,
    },
    {
        "wood": "Pine",
        "trees": 12,
    },
    {
        "wood": "Ash",
        "trees": 6,
    },
    {
        "wood": "Balsa",
        "trees": 10
    }    
]

const logStackSkope = function(woods) {
    
    let lumberJacked = woods.map(
        currentTree => ({
            "type": currentTree.wood,
            "logs": Math.floor(currentTree.trees * 4)
        })
    )

    return lumberJacked
}

logStackSkope.containers = []

let allLogs = logStackSkope(forrest)

let currentContainer = logContainerFactory.next().value

allLogs.forEach(
    currentLumber => {
        for (let i = 0; i < currentLumber.logs; i ++) {
            const log = {"type": currentLumber.type}
            currentContainer.lumber.push(log)
                if (currentContainer.lumber.length === 15) {
                    logStackSkope.containers.push(currentContainer)
                    currentContainer = logContainerFactory.next().value
                }
        }

    }
)

if (currentContainer.lumber.length > 0) {
    logStackSkope.containers.push(currentContainer)
}

console.log(logStackSkope.containers)