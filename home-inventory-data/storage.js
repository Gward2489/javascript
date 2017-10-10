
  const gibsonLesPaul = {
    "name": "1958 Gibson Les Paul Reissue",
    "type": "Instrument",
    "location": "Studio",
    "description": "My 16th birthday present and most prized possesion."
  }
  
  const fenderStratocaster = {
    "name": "Artic White Fender Stratocaster",
    "type": "Instrument",
    "location": "Studio",
    "description": "A versatile, good sounding, and good looking guitar."
  }

  const larriveeAcoustic = {
    "name": "Larrivee LR-1 Acoustic Guitar",
    "type": "Instrument",
    "location": "Studio",
    "description": "My 18th birthday present, a rare and high quality acoustic guitar."
  }

  const microsoftXboxone = {
    "name": "Xbox One",
    "type": "Console",
    "location": "Living Room",
    "description": "Important because we use the xbox to watch tv, play video games, and chat with friends"
  }

  const nintendoSwitch = {
    "name": "Nintendo Switch",
    "type": "Console",
    "location": "Living Room",
    "description": "The latest and greatest console from my favorite Japanease video game company."
  }

  const nintendoSixtyFour = {
      "name": "Nintendo 64",
      "type": "Console",
      "location": "Living Room",
      "description": "A possesion I love for its historical impact on gaming and well as its classic games that are still fun."
  }

  const sarahsMacbook = {
      "name": "2013 Apple Macbook",
      "type": "Computer",
      "location": "Bedroom",
      "description": "Sarah's computer, she uses for work and recreation."
  }

 const myXps = {
     "name": "Dell XPS 13",
     "type": "Computer",
     "location": "Studio",
     "description": "My Dell XPS 13 running Ubuntu Linux. Used for NSS and recreation."
 }

 const myOldMacbook = {
     "name": "2008 Apple Macbook",
     "type": "Computer",
     "location": "Living Room",
     "description": "My broken 2008 Apple Macbook used for my degree at UNCW. Currently non-operational but I would like to have the data pulled from its hardrive eventually."
 }

 const gibsonSg = {
     "name": "2014 Gibson SG",
     "type": "Instrument",
     "location": "Bedroom",
     "description": "Another one of my prized possesions. A visually and sonically stunning guitar."
 }
 
let instruments = []
let consoles = []
let computers = []

instruments.push(gibsonSg, gibsonLesPaul, fenderStratocaster, larriveeAcoustic)
consoles.push(microsoftXboxone, nintendoSixtyFour, nintendoSwitch)
computers.push(myXps, sarahsMacbook, myOldMacbook)

let homeInventory = {
  "instruments": instruments,
  "consoles": consoles,
  "computers": computers
}

const homeInventoryString = JSON.stringify(homeInventory)
localStorage.setItem("homeInventory", homeInventoryString)

