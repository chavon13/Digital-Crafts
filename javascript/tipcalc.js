var good = .20
var fair = .15
var bad = .10

function tipAmount(bill, service) {
    return bill * service
}

const tip = tipAmount(100, fair)
console.log(tip)