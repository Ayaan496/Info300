//Ayaan Mushtaq
const readlineSync = require('readline-sync');
let start = readlineSync.question("Enter start number: ");
let end = readlineSync.question("Enter end number: ");
let count = 0;
for (let i = start; i <= end; i++) {
    //change from i/2 to i%2 since i/2 just returns the number divided by two while i % 2 is always 0 if even
if (i % 2 == 0) {
    //indent because its ugly not to
    //+= not =+ because it is count = count + 1, count =+ does not increment before assigning value
    count += 1;
}
}
console.log("Even numbers between " + start + " and " + end + ": " +
count);