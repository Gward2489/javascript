$(document).ready(function() {

    const outputEl = $("#spot")
    let guitarString = `<div id="guitars">`


    $.ajax({
        "url": "storage.json",
        "method": "GET"
    }).then(
        function (storage) {

        storage.gear.forEach(function(guitar) {
            guitarString += `<div id="guitarName">${guitar.name}</div>
            <div id="guitarMaker">${guitar.manufacturer}</div>
            <div id="guitarType">${guitar.type}</div>`
        })

        guitarString += `</div>`
        outputEl.html(guitarString)
    })

})