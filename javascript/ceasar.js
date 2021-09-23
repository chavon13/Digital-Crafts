function cipher(string, offset) {
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    let newString = "";
    let currentIndex = 0;

    for (currentIndex; currentIndex < string.length; currentIndex++){
        newString += letters[offset + letters.indexOf(string[currentIndex])]
    }

    return newString;
}

console.log(cipher("abc", 10));