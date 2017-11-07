const navMaker = require("./navBuilder")
const writeProduct = require("./productController")
const product = require("./productFactory")
let reviewsArray = require("./reviewFactory")
const printReviews = require("./reviewController")

navMaker()
writeProduct(product)
reviewsArray.forEach(printReviews)