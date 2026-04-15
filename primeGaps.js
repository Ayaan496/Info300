//Ayaan Mushtaq
var readLineSync = require('readline-sync')


var n = readLineSync.questionInt("Input a positive number n <= 1000: ")
var numDistance = 0;
var prime = [];
var gapNum1;
var gapNum2;
var sumGap = 0;
var avgGap = 0;

//by positive number i am assuming 0 does not count
if (n <= 0 || n > 1000 ){
    console.log("number does not meet specifications, rerun the program")
    return
}

else{
    
    for (let i = 2; i <= n; i++){
        let isPrime = true;
        for(let j = 2; j < i; j++ ){
            if(i % j == 0){
                isPrime = false;
            }
        }
        if(isPrime){
            prime.push(i);
        }
    }

    for(let i = 0; i < prime.length - 1; i++){
        if(prime[i+1] - prime[i] > numDistance){
            numDistance = prime[i+1] - prime[i]
            gapNum1 = prime[i];
            gapNum2 = prime[i+1];
        }
        
        sumGap += prime[i+1] - prime[i];
        avgGap += 1;
        
    }
    avgGap = sumGap / avgGap;
}

console.log("primes are:")
console.log(prime)
console.log("The largest gap is " + numDistance + ", between " + gapNum1 + " and " + gapNum2)
console.log("The average gap is " + avgGap)
