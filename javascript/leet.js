function leetSpeak(word) {
    let currentCharacter= null;
    let newWord = new Array(word.length);
    for(let counter = 0; counter < word.length; counter++){
        //console.log("COUNTER:", counter, word[counter])
        //return leetspeakString;
        currentCharacter = word[counter];

        switch(currentCharacter){
            case "a":
                currentCharacter = 4;
                break;
            case "e":
                currentCharacter = 3;
                break;
            case "g":
                currentCharacter = 6;
                break;
            case "i":
                currentCharacter = 1;
                break;
            case "s":
                currentCharacter = 5;
                break;
            case "t":
                currentCharacter = 7;
                break;
        } 
        newWord.push(currentCharacter);
        //console.log(newWord);
    }
        return newWord.join("");
};
console.log(leetSpeak("This is leet!"));