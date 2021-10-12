/*var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this);
    }
};

request.open("GET", "./ajax.txt");
request.send();*/

/*fetch("ajax.txt").then(function(response) {
    console.log(response);
}).catch(function(error) {
    console.log(error.message)
})*/

/*fetch("./ajax.txt").then(response => {
    console.log(response);
});*/

//1) Log a string with a characters name and culture like so:
//"(Troy Wilson) was of (black) culture"
//2)Log a string of all characters aliases

fetch("https://anapioficeandfire.com/api/characters/583")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})


fetch(`https://anapioficeandfire.com/api/characters/583`)
.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data.name + " was of " + data.culture + " culture.")
})

