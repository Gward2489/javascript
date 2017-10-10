const loadInventory = [{}]

const storedInventory = localStorage.getItem("homeInventory")
loadInventory.push(JSON.parse(storedInventory))



let unidrive = {
    "name": "Jext Telez UniDrive",
    "type": "instrument",
    "location": "studio",
    "description": "A rare and collectable replication of a classic and innovative overdrive."
}

let playStation = {
    "name": "Sony Playstation 3",
    "type": "console",
    "location": "living room",
    "description": "A great console on which I have serval great games like GTAV and Red Dead Redemption."
}

let iPad = {
    "name": "Apple Ipad",
    "type": "computer",
    "location": "Bedroom",
    "description": "A cool tablet made by apple that I receievd as a gift for Christmas in 2015"
}

loadInventory:computers.push(iPad)
loadInventory:instruments.push(unidrive)
loadInventory:consoles.push(playStation)

const updatedInv = JSON.stringify(loadInventory)
localStorage.setItem("homeInventory", updatedInv)
