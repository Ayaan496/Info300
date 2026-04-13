
var readLineSync = require('readline-sync')


var name = readLineSync.question("Name?")

var testScore = readLineSync.questionInt("Score?")


var message = "The student" + name + "received a score of " + testScore
console.log(message)
if (testScore < 0 || testScore >100){
    message ="Invalid Score"
}
else if(testScore > 89.5){
    message = "Which earned an A"
}
else if (testScore > 79.5){
    message = "Which earned a B"
}
else if (testScore > 69.5){
    message = "Which earned a C"
}
else if (testScore > 59.5){
    message = "Which earned a D"
}
else{
    message = "Which earned an F"
}

console.log(message)





