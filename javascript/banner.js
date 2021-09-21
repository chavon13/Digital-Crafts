function printBanner(message){
    console.log("-".repeat(message.length))
    for (let i = 0; i < 1; i++) {
        console.log("-" + message + "-")
    }
    console.log("_".repeat(message.length))

}

printBanner("Welcome to Digital Crafts!")