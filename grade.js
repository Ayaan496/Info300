
var readLineSync = require('readline-sync')


var average = readLineSync.questionFloat("Input your current grade average: ")
const finalWeight = 0.25
while (true){
    var finalScore = readLineSync.questionInt("Input your final exam score: ")
    //finalgrade = current *.75 + final *.25
    testScore = (average * .75) + (finalScore * .25)
    var letterGrade;
    
    
    if (testScore < 0 || testScore >100){
        console.log("Invalid Score")
        return
    }
    else if(testScore > 89.5){
        letterGrade = "A"
    }
    else if (testScore > 79.5){
        letterGrade = "B"
    }
    else if (testScore > 69.5){
        letterGrade = "C"
    }
    else if (testScore > 59.5){
        letterGrade = "D"
    }
    else{
        letterGrade = "F"
    }


    console.log("\nThe hypothetical final score was " + finalScore)
    console.log("The final course average is " + testScore)
    console.log("The letter grade is " + letterGrade)
    if(testScore > average){
        console.log("The grade improved, good job")
    }
    else if(testScore == average){
        console.log("The grade stayed the same")

    }
    else{
        console.log("The grade declined, work harder")
    }
    console.log("Please input the next score \n\n")
}












