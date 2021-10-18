const dns = require("dns")
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Domain Name ", function(url){
    readline.close();
    dns.lookup(url, function(err, address){
        if (err){
            console.log(err.message);
            return;
        }
        console.log("IP Address: ", address);
    })
})

