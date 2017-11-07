
const printReviews = function (review) {
    let reviewsMarker = document.getElementById("reviews")
    let newReview = document.createElement("div")
    newReview.className = "reviewClass"
    let reviewTitle = document.createElement("h2")
    reviewTitle.appendChild(document.createTextNode(review.title))
    let reviewRating = document.createElement("h3")
    reviewRating.appendChild(document.createTextNode(review.rating))
    reviewRating.className = "ratingClass"
    let reviewAuthor = document.createElement("h4")
    reviewAuthor.appendChild(document.createTextNode(review.author))
    let reviewComments = document.createElement("p")
    reviewComments.appendChild(document.createTextNode(review.comments))
    newReview.appendChild(reviewTitle)
    newReview.appendChild(reviewRating)
    newReview.appendChild(reviewAuthor)
    newReview.appendChild(reviewComments)
    reviewsMarker.appendChild(newReview)
}

module.exports = printReviews