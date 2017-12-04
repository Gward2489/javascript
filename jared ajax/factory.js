$(document).ready(function () {

$.ajax({
    "url": "data.json",
    "method": "GET"
}).then(result => {
    console.log(result)
    
    let domMarker = document.getElementById("printNames")
    
    $("#printNames").on("click", function() { 

    result.students.forEach( student => {
        domMarker.innerHTML += `
        <p class="${student.color}">${student.name} ${student.age}</p>
        `
    })
})

})

})