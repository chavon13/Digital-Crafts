var good = .20
var fair = .15
var bad = .10



function totalAmount (bill, service){
    var tip = bill * service
    return bill + tip

}




const billTotal = totalAmount(100, good)
console.log(billTotal) 