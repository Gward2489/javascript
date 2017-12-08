let wow = function () {
    const party = [
        {"a": 1, "b": 1},
        {"a": 1, "b": 2},
        {"a": 1, "b": 3},
        {"a": 1, "b": 4},
        {"a": 2, "b": 1},
        {"a": 2, "b": 2},
        {"a": 2, "b": 3},
        {"a": 2, "b": 4},
    ]

    let results1 = party.filter( function (data) {
        if (data.a === 1) {
            return data
        }
    })

    let results2 = party.filter( function (data) {
        if (data.a === 2) {
            return data
        }
    })

    let results3 = party.filter( function (data) {
        if (data.b === 1) {
            return data
        }
    })

    const mySet = new Set()

    results1.forEach(function (data) {
        if (data.a === 1) {
            mySet.add(data)
        }
    })

    results2.forEach(function (data) {
        if (data.a === 2) {
            mySet.add(data)
        }
    })

    results3.forEach(function (data) {
        if (data.b === 1) {
            mySet.add(data)
        }
    })

    console.log(mySet)
    
}

wow()