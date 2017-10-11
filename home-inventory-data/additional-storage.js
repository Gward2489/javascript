const storedInventory = JSON.parse(localStorage.getItem("homeInventory"))

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

storedInventory.computers.push(iPad)
storedInventory.consoles.push(playStation)
storedInventory.instruments.push(unidrive)


const updatedInv = JSON.stringify(storedInventory)
localStorage.setItem("homeInventory", updatedInv)
