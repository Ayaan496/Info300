var readLineSync = require('readline-sync');

var userString = readLineSync.question("Please enter a string: ");
userString = userString.toLowerCase()
var usedLetters = [];
var letterCounter = []
var doneLetters = []
var answer = []

for (let i = 0; i < userString.length; i++){
    usedLetters[i] = userString[i];
}

for (let i = 0; i < userString.length; i++){
    
    var count = 0;
    
    for(let j = 0; j < userString.length; j++){
        if(userString[j] == usedLetters[i]){
            count += 1;
        }
        
        
        
    }

    if(!doneLetters.includes(usedLetters[i])){
            answer.push(usedLetters[i]);
            letterCounter.push(count);
            doneLetters.push(usedLetters[i])
            continue
    }
    
    
    
}



for (let i = 0; i < answer.length; i++){
    console.log(answer[i] + ": " + letterCounter[i])
}