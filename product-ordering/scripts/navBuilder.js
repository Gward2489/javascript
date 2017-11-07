
const navMaker = function () {

    let navMarker = document.getElementById("navBar")

    const navArray = [
        {
            "title": "Categories"
        },
        {
            "title": "Orders"
        },
        {
            "title": "Log Out"
        },
    ]

    let navString = document.createElement("ul")

    navArray.forEach(function (link) {
        const newItem = document.createElement("li")
        newItem.className = "navList_link"
        const newLink = document.createElement("a")
        newLink.href = "#"
        newLink.className = `navList_link_${link.title}`
        newLink.appendChild(document.createTextNode(link.title))
        newItem.appendChild(newLink)
        navString.appendChild(newItem)
    })

    navMarker.appendChild(navString)

}


module.exports = navMaker
