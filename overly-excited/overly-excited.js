let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"]

let secondSentence = ["The", "wizards", "rapped", "all", "evening", "long", "grammys", "they", "won", "cheer", "they", "had", "stoke", "they", "spread"]

function addExcitement (options) {
    let output = ""
    let j = 0
    let bang = options.punctuation

    for (let i = 0; i < options.array.length; i++) {
        output += options.array[i]
        j++
        if (j % 3 === 0) {
            output += bang
            bang += options.punctuation
            }
            output += " "
            console.log(output)
        } 
          
    }

addExcitement({"array": secondSentence, "punctuation": "!"}) 