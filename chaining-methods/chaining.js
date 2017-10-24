const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8]

//Sort the numbers in descending order (10, 9, 8, 7, etc).
//Remove any integers greater than 19.
//Multiply each remaining number by 1.5 and then subtract 1.
//Then output (either in the DOM or the console) the sum of all the resulting numbers.

// Use '.sort' to sort intergers, use a function within sort to make sure they are sorted by
//numerical value and not alphebetically 
let newIntegers = integers.sort(function(a,b){return a-b}).filter(function(integer) {
    //use '.filter' and an if statement to filter out intergers larger than 19
    if (integer < 19) {return integer}}).map(function(integer){
        //use '.map' to creat a new array with mathmatically altered value
        let newInteger = (integer * 1.5); let finalInteger = (newInteger - 1); return finalInteger}
    //use '.reduce' to add the integers into a single total
    ).reduce(function(current, next){let newTotal = current + next; return newTotal})

console.log(newIntegers)