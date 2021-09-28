var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this);
    }
};

request.open("GET", "./ajax.txt");
request.send();

/*fetch("ajax.txt").then(function(response) {
    console.log(response);
}).catch(function(error) {
    console.log(error.message)
})*/

/*fetch("./ajax.txt").then(response => {
    console.log(response);
});*/

