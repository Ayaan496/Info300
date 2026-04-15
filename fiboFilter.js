//Ayaan Mushtaq
var readLineSync = require('readline-sync')

var n = readLineSync.questionInt("Input the number of Fibonacci numbers to generate: ")

var fibonacci = [0,1];
var oddFibo = []

for (let i = 2; i < n; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i - 2]
    if(fibonacci[i] % 2 == 1){
        oddFibo.push(fibonacci[i])
    }
}
console.log("Fibonacci Sequence: ")
console.log(fibonacci)
console.log("Odd Fibonacci Numbers: ")
console.log(oddFibo)