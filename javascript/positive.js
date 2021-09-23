/*function positiveNumbers(numbers) {
    let answer = numbers.filter()
}

positiveNumbers([1, -3, 5, -3, 0])
*/

/*function positiveNumbers(numbers) {
    var positives = [];

    for(var i = 0; i < numbers.length; i++) {
        if(numbers[i] > 0) {
            positives.push(numbers[i])
        }
    }
    return positives
    
}

positiveNumbers([1, -3, 5, -3, 0])*/

function getPositives(ar){
    const posArr = ar.filter(num => num > -1);
    return posArr;
}

getPositives([1, -3, 5, -3, 0])