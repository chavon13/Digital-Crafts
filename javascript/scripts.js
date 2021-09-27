//This is a  single line comment//
/**
 * this is a multi-line comment
 * this is also a multi-line comment.
 * I can just keep going like this!
 */

/* also a multi-line comment */
/*console.log("How are you?")

var firstName = "Ashley";
let middleName = "Shavon";
const lastName = "Savage"

console.log(firstName, middleName, lastName)


let age = 33;

const email = "ashley@ashley.com";

console.log(email)


const user = {
    firstName: 'Ashley',
    age: 33
};

console.log(user)


function sayhello() {
    console.log("hello")
    console.log("how are you?")
}

/*sayhello();

function add (x,y) {
    return x + y
}

const sum = add(5, 7)

console.log(sum)

*/
/*Thisis the blueprint for how to trat the variable add */
/*function add(x, y) {
    const total = x + y;

    return total;
}
/*This is the action for the bueprint */
/*const sum = add(5 ,7);

console.log(sum)

/*Create a function that you can pass 3 arguments to,
but returns a sting of "omg" no matter what.
The return value should be saved in a variable that can't be changed. 
*/

/*function lol(x, y, z) {
    const lingo = x + y + z;
    return lingo;
}

const answer = lol( "O", "M", "G")

console.log(answer)


const user = {
    firstName: "Troy"
}

user.firstName = "Jim"
*/

/*const age = 11;

if (age >= 21) {
    console.log("you may enter...")
} else if (age >= 18) {
    console.log("not just yet buddy")
}else {
    console.log("bye")
}*/
//not just yet buddy//

/*const age = 18

switch (age) {
    case 21:
        console.log("you may enter...");
        break;
    case 18:
        console.log("not just yet buddy,...");
        break;
    default:
        console.log("bye...");
        break;
}
*/

//FOR LOOP
//variable/value|condition|iterator
//step 1: get value
//step 2: check the condition
//step 3: if true, execute code block
//step 4: iterate
/*let x = 0

for (x; x < 10; x++) {
    console.log(x); 
}

/*while (x < 10 ){
    console.log(x);

    x++
}*/

/**
 * DOM
 * Document Object Model
 * 
 * BOM
 * Browser Object Model
 */
//This is an example of an object

/*let thisIsAnObject = {
    property: "value"
}*/

//console.log("BOM accessed through window object:")
//console.log(window)

//console.log("DOM accesed through document object:")
//console.log(document)

//console.log(window.location)

//let element = document.getElementsByTagName("h1")

//console.log(element);

/*let myButton = document.getElementById("button2")

myButton.addEventListener("click", function() {
    console.log("hello button 2");
})*/
//prints innerwidth to the console when the page is resized.
/*window.addEventListener("resize", function() {
    console.log(window.innerWidth);
})*/
//This "listens" to the entire document for a click. tells specifically what you are clicking.
//the "event" in the function parenthesis is where the information is passed to. then it is logged to the console.
/*document.addEventListener("click", function(event){
    console.log(event.target);
})*/

/*const request = new XMLHttpRequest();

request.onreadystatechange = function () {
    console.log(this);
};

request.open("GET", "http://placekitten.com/400/400");

const requestButton = document.getElementById("request-button")

requestButton.addEventListener("click", function(){
    request.send();
})*/




fetch("http://placekitten.com/400/400").then(function(response){
    console.log(response)
})


.catch(function(error) {
    console.log(error);
})