

const writeProduct = function (fantasmo) {
    const productMarker = document.getElementById("productDisplay")
    let newProduct = document.createElement("div")
    newProduct.className = "productStyle"
    let productImage = document.createElement("img")
    productImage.className = "productImage"
    productImage.src = fantasmo.image
    let productTitle = document.createElement("h1")
    productTitle.appendChild(document.createTextNode(fantasmo.title))
    let productPrice = document.createElement("h2")
    productPrice.appendChild(document.createTextNode(fantasmo.price))
    let productDescription = document.createElement("p")
    productDescription.appendChild(document.createTextNode(fantasmo.description))
    let productQuantity = document.createElement("h5")
    productQuantity.appendChild(document.createTextNode("Only " + fantasmo.quantity + " Waffle Irons Left!!"))
    newProduct.appendChild(productImage)
    newProduct.appendChild(productTitle)
    newProduct.appendChild(productPrice)
    newProduct.appendChild(productQuantity)
    newProduct.appendChild(productDescription)
    console.log(newProduct)
    productMarker.appendChild(newProduct)
}


module.exports = writeProduct