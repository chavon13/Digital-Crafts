//This is a  single line comment//
/**
 * this is a multi-line comment
 * this is also a multi-line comment.
 * I can just keep going like this!
 */

/* also a multi-line comment */
console.log("How are you?")

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
function add(x, y) {
    const total = x + y;

    return total;
}
/*This is the action for the bueprint */
const sum = add(5 ,7);

console.log(sum)

/*Create a function that you can pass 3 arguments to,
but returns a sting of "omg" no matter what.
The return value should be saved in a variable that can't be changed. 
*/

function lol(x, y, z) {
    const lingo = x + y + z;
    return lingo;
}

const answer = lol( "O", "M", "G")

console.log(answer)