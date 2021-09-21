/*function printSquare(rows) {
    var i, j;
    for ( i = 1; i <= rows; i++) {
        if (i == 1 || i == rows)
            for ( j = 1; j <= rows; j++) console.log("*")
        else
            for (j = 1; j <= rows; j++)
                if(j == 1 || j == rows) console.log("*")
                else console.log("  ")
    }
}

printSquare(5)

*/

function printSquare(rows) {
    console.log("*".repeat(rows));
    for (let i = 1; i < rows - 1; i++) {
        console.log( "*" + " ".repeat(rows-2) + "*");
    }
    console.log("*" .repeat(rows))
}
printSquare(8)