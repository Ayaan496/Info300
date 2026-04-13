var readLineSync = require('readline-sync')


const overTimeThreshold = 40
const employees = []
var highestIndex = 1
//i hope oop is ok, it is pretty similar to python oop so i just looked at the slight syntax differences in javascript
class employee{
    constructor(name, hoursWorked, hourlyWage){
        this.name = name
        this.hoursWorked = hoursWorked
        this.hourlyWage = hourlyWage
        this.regularPay;
        this.overTimePay;
        this.totalPay;
        this.isHighest;
}
}

for (let i = 0; i < 3; i++){
    employees.push(new employee(readLineSync.question("Employee " + (i+1) + " Name: "), readLineSync.questionInt("Employee " + (i+1) + " Hours worked: "), readLineSync.questionFloat("Employee " + (i+1) + " Hourly wage: ") ))
    console.log("\n")
    if(employees[i].hoursWorked < 0 || employees[i].hoursWorked > 80){
        console.log("inproper hours worked")
        return
    }
    else if(employees[i].hourlyWage < 0 ){
        console.log("inappropriate wage, pay your employees")
    }
    else{
        if(employees[i].hoursWorked > 40){
            let overTimeHours = employees[i].hoursWorked - overTimeThreshold
            let regularHours = employees[i].hoursWorked - overTimeHours

            employees[i].regularPay = regularHours * employees[i].hourlyWage
            employees[i].overTimePay = overTimeHours * (employees[i].hourlyWage * 1.5)
            employees[i].totalPay = employees[i].regularPay + employees[i].overTimePay
        }
        else{
            employees[i].regularPay = employees[i].hoursWorked * employees[i].hourlyWage
            employees[i].overTimePay = 0
            employees[i].totalPay = employees[i].regularPay
        }
    }
    
}
//start at 1 because highest index is 0
for(let i = 1; i < 3; i++){
    if(employees[i].totalPay > employees[highestIndex].totalPay){
        highestIndex = i;
    }
}
employees[highestIndex].isHighest = true

for (let i = 0; i < 3; i++){
    console.log("Employee " + (i+1) + " Name: " + employees[i].name + "\n")
    console.log("Employee " + (i+1) + " Total Hours: " + employees[i].hoursWorked + "\n")
    console.log("Employee " + (i+1) + " Regular Pay: " + employees[i].regularPay + "\n")
    console.log("Employee " + (i+1) + " Overtime Pay: " + employees[i].overTimePay + "\n")
    console.log("Employee " + (i+1) + " Total Pay: " + employees[i].totalPay + "\n")
    if(employees[i].isHighest == true){
        console.log(employees[i].name + " was the highest paid employee")
    }
    console.log("\n\n")
    
}






