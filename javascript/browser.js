//Create a button that logs "Button Pressed" to the console when clicked.
const button = document.querySelector("#pressed")
button.onclick = function() {
    console.log("Button Pressed")
}


/**Create a button the logs "You Left Clicked" to the console when clicked.
*/

const clickHere = document.querySelector("#clicked")
clickHere.onclick = function() {
    console.log("You Left Clicked")
}

window.addEventListener("scroll", function() {
    console.log("You changed the size of the window!")

})

const listElement = document.createElement("ul")
const itemOne = document.createElement("li")
const itemTwo = document.createElement("li")
const itemThree = document.createElement("li")
const itemFour = document.createElement("li")
const itemFive = document.createElement("li")

const shopping = document.querySelector("#shopping")

shopping.append(listElement)
listElement.append(itemOne, itemTwo, itemThree, itemFour, itemFive)

itemOne.innerText = "Apples"
itemTwo.innerText = "Oranges"
itemThree.innerText = "Carrots"
itemFour.innerText = "Lettuce"
itemFive.innerText = "Celery"   

/**const submit = document.querySelector("#submit")
button.onclick = function(){

}*/

let input = document.getElementsByTagName("input")[0];
let submit = document.getElementsByTagName("button")[2];
listElement.setAttribute("id", "shoppingList")
let removeButton = null

shoppingList.insertAdjacentElement("afterend", listElement)

//function and button for adding items to the list
submit.addEventListener("click", function(event){
    let item = document.createElement("li")
    item.innerHTML = input.value
    
    //creates remove button and gives it a class. Then gives it the remove name 
    removeButton = document.createElement("button")
    removeButton.setAttribute("class", "delete")
    removeButton.innerHTML = "remove"
    removeButton.addEventListener("click", function(event){
        event.target.parentElement.remove()
    })

    item.append(removeButton)
    
    shoppingList.appendChild(item);

    input.value = ""
})

//console.log(submit);