/*

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
*/

//**2**
//Similar to the previous exercise, write a function called getPositives that takes 
//an array and uses its filter method to return a new array with only the positive numbers

var myArray = [ 8, -8, 9, -4, ,3, 0, 2]

function isPos(num) {
    return num>0;
}

var getPositives = myArray.filter(isPos);

console.log(getPositives)


function getAnyPositives(arr){
    return arr.filter(isPos);
}

console.log(getAnyPositives([8,-3,-2,5]))



// var getPositives = numbers.filter(function(number) {
//     return number > 0;
// });