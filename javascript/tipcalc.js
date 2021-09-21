var good = .20
var fair = .15
var bad = .10

function tipAmount(bill, service) {
    return bill * service
}

const tip = tipAmount(100, fair)
console.log(tip)


function tipAmount(billAmount, serviceLevel){
    let serviceLevels = {
        good: .20,
        fair: .15,
        poor: .10
    }
    return billAmount * serviceLevels[serviceLevel]
}

console.log(tipAmount(100, poor))

