const HomeInventory = JSON.parse(localStorage.getItem("homeInventory"))

const invLocation = document.getElementsByClassName("inventory")[0]


for (key in HomeInventory) {
    const currentType = HomeInventory[key]
    console.log(currentType)
    for (let i = 0; i < currentType.length; i++) {
      const currentItem = currentType[i]
        invLocation.innerHTML += `<section class="storedItems">
        <h2 class="storedItems_name">
            ${currentItem.name}
        </h2>
        <div class="storedItems_location">
            ${currentItem.location}
        </div>
        <div class="storedItems_description">
            ${currentItem.description}
        </div>
    </section>`
    }   
}