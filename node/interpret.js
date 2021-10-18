const http = require("http");
const myImportedModule = require('./mymodule')
const cow = require("cowsay")



//Which computer, where, are my files being hosted from???
//Think of this like your house aka myy computer.
const hostname = "127.0.0.1";

//The exact room withing the house aka my computer
const port = 3000

//Let's use the http module to create the server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(myImportedModule.greeting())
});

server.listen(port, hostname, () => {
console.log (cow.say({
    text: `Server running at http://${hostname}:${port}/`
}))
})