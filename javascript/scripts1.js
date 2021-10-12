//write a function that returns the number of true values in a given array.

/**
 * I need a function
 * I need a return statement to return a number
 * Example input: [true, true, true, false, false]
 */
/*function trueValue (booleans) {
    let value = 0
    booleans.forEach(function(boolean){
        if (boolean === true) {
            value += 1
        }
    })
    return value
}

console.log(trueValue(["true", 1, true, false]))

//Create a function that takes in an integer and converts it in seconds

function convertToSeconds(minute) {
    let seconds = minute * 60
    return(seconds)
}

convertToSeconds(4)

//create a function that takes in an integer(years) and returns the age in days
//same as previous code but with days and years.

//create a function that returns that next number from the integer past

function number(x) {
    let answer = x + 1;
    console.log(answer);
}

number(60)

//make a function that takes the base and height of a triangle and returns its area

function algebra(base, height){
    let area = base * height / 2
    return area
}

console.log(algebra(10, 5))

//arrow version of code above

const triangleArea = (base, height) => (base * height /2)
console.log(triangleArea(10, 5))*/


// create a function that adds all the numbers and returns the sum

/*function addNumbers(x) {
    let newNumber = 0;
    for (let i = 0; i <= x; i++){
        newNumber = newNumber + i
    }
    console.log(newNumber)
}

addNumbers(4)*/

//Using this array of drinks {each drink being 
//an object with two properties: name and price.} 
//Create a function that has the drinks array as 
//an argument and return the drinks 
//objects sorted by price in ascending order.

/*drinks = [
{name: "lemonade",
price: 50},

{name: "lime",
price: 10}
];


let drinkAsc = drinks.sort((a, b) => a.price - b.price);

console.log(drinkAsc)
*/
//create a function that takes in a string and reverses it
/*function reverseString(str) {
    let splitString = str.split("").reverse().join("")
    return splitString
}

console.log(reverseString("hello"))
*/

//Complete the function getPositiveTemperatures 
//such that it returns an array containing the 
//positive temperatures (the temperatures that are above 0).

/*function getPositiveTemperatures(temperatures) {
    return temperatures.filter(function(temperature){
        return temperature > 0
    })
}
console.log(getPositiveTemperatures([1, -3, -2, 4, 10]))
*/

/**
 * create a function that given an array of numbers
 * returns the value in the middle. If there is no middle, 
 * give the last value
 */

function middleNumber(array) {
    //[1, 2 ,3 ,4, 5]
    //[1, 2, 3, 4]
    //this is the if statement. It says: If the length of the array does not have a remainder,
    //show me the last number in the array. 
    if (array.length % 2 === 0) {
        console.log(array[array.length - 1])
    //This else statement says: make a variable of middleIndex and make that variable equal the length
    //of the array, divided by two. then we subtract 0.5 to get rid of the remainder. finally, we console log it.
    } else {
        let middleIndex = (array.length / 2) - 0.5
        console.log(array[middleIndex])
    }
    //return
} 

middleNumber([1, 2, 3, 4])
middleNumber([1, 2, 3, 4, 5])
