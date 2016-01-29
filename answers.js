//**1**
//Write a function called printPositives that takes an array and uses its forEach 
//method to print only the positive numbers.

var myArray = [ 8, -8, 9, -4, ,3, 0, 2]

function printPositives(arr) {
    arr.forEach(function(current) {
        if (current > 0) {
            console.log(current);
        }
    })
}
console.log(printPositives(myArray))