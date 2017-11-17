$(document).ready(function () {
    let productsDb = {}

    
    $("#seasonSelect").on("change", function () {
        let currentSeason = this.value
        $.ajax({
            "url":"categories.json",
            "method": "GET"
        }).then(
            function (categories) {
                let productsArray = productsDb.products
                let categoriesArray = categories.categories
                let outputEl = $("#output")
                let outputString = `<div>`
                productsArray.forEach(function (product) {
                    categoriesArray.forEach(function (category) {
                        if (product.category_id === category.id) {
                            outputString += `
                            <h1>${product.name}</h1>
                            <h2>${category.name}</h2>
                            <h2 class="${category.name}">${product.price}</h2>
                            `
                        }
                    })
                })
                outputString += `</div>`
                outputEl.html(outputString)

                categoriesArray.forEach(function (category) {
                    if (category.season_discount === currentSeason) {
                        let targetEls = $(`.${category.name}`)
                        let elementArray = []
                        for (i = 0; i < targetEls.length; i++) {
                            elementArray.push(targetEls[i])
                        }
                        elementArray.forEach(function (element) {
                            let currentPrice = parseFloat(element.innerText)
                            productsArray.forEach(function (product) {
                                if (product.category_id === category.id) {
                                    let discountAmt = currentPrice * category.discount
                                    let newPrice = currentPrice - discountAmt
                                    element.innerText = "(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ" + newPrice.toFixed(2)
                                }
                            })
                        })
                    }
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
                let outputEl = $("#output")
                let outputString = `<div>`
                let productsArray = productsDb.products
                let categoriesArray = categoriesDb.categories
                productsArray.forEach(function (product) {
                    categoriesArray.forEach(function (category) {
                        if (product.category_id === category.id) {
                            outputString += `
                            <h1>${product.name}</h1>
                            <h2>${category.name}</h2>
                            <h2 class="${category.name}">${product.price}</h2>
                            `
                        }
                    })
                })
                outputString += `</div>`
                outputEl.html(outputString)

            }
        )
})


