let injectionSpot = document.getElementById("printMessages")

$.ajax({
    "url": "https://api.github.com/repos/nss-day-cohort-22/movie-history-malicious-humans/commits",
    "method": "GET"
}).then(queryResult => {
   queryResult.forEach(function (result) {
       console.log(result)
   })   
})