$(document).ready(function () {
    let productsDb = {}
    let outputEl = $("#output")
    let outputString = `<div>`
    
    $("#seasonSelect").on("change", function () {
        let currentSeason = this.value
        $.ajax({
            "url":"categories.json",
            "method": "GET"
        }).then(
            function (categories) {
                let productsArray = productsDb.products
                let categoriesArray = categories.categories
                let priceEls = $(".price")
                let priceArray = []
                for (i = 0; i < priceEls.length; i++) {
                    priceArray.push(priceEls[i])
                }
                priceArray.forEach(function (priceEl) {
                    let currentPrice = parseFloat(priceEl.innerText)
                    productsArray.forEach( function (product) {
                        if (currentPrice === product.price) {
                            categoriesArray.forEach( function (category) {
                                if (product.category_id === category.id) {
                                    if (category.season_discount === currentSeason) {
                                    let discountAmt = currentPrice * category.discount
                                    let newPrice = currentPrice - discountAmt
                                    priceEl.innerText = newPrice.toFixed(2)
                                    }
                                }
                            })
                            
                        }
                    })
                
                    
                })
                
            }
        )
    })
    
    

    $.ajax({
      "url": "products.json",
      "method": "GET"  
    }).then(
        function (products) {
            productsDb = products
        }
    )

        $.ajax({
            "url": "categories.json",
            "method": "GET"
        }).then(
            function (categoriesDb) {
                let productsArray = productsDb.products
                let categoriesArray = categoriesDb.categories
                productsArray.forEach(function (product) {
                    categoriesArray.forEach(function (category) {
                        if (product.category_id === category.id) {
                            outputString += `
                            <h1>${product.name}</h1>
                            <h2>${category.name}</h2>
                            <h2 class="price">${product.price}</h2>
                            `
                        }
                    })
                })
                outputString += `</div>`
                outputEl.html(outputString)
            }
        )
})


