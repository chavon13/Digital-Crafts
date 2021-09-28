/*function whatsYourName(firstName) {
    return firstName;
}

const firstNameLength = whatsYourName("Troy").length;

console.log(firstNameLength)*/

/*function makeGroceryList(item1, item2, item3) {
    return [item1, item2, item3]
}

const firstItem = makeGroceryList("bananas", "pears", "apples")[0]

console.log(firstItem)*/

fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=46fbf048ea77cec3537a94244ec91020`)
.then(function(response) {
    return response.json()
})
.then(function(data){
    console.log(data)
})

/*fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=46fbf048ea77cec3537a94244ec91020")
.then(response => response.json())
.then(data => console.log(data))*/
