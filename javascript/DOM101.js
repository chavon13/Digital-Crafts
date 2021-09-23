document.getElementById("heading").innerHTML="Topping";
document.getElementById("burger").classList.add("list-item")
const foodList = document.getElementById("list")
const newItem = document.createElement("li")
newItem.id = "pickles"
newItem.classList = "green list-item"
newItem.innerHTML = "Pickles"
foodList.append(newItem)
