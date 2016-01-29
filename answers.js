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

*/

//**3**
//Write a function called filterArray that takes an array AND a function as arguments. 
//Your filter function should return a new array that contains only the elements where 
//the passed function returns a truthy value.

//NOTE: You are allowed to use Array.prototype.filter to answer this question.

//NOTE 2: This is a bit of a trick question, the answer is a one-liner :)
var myArray = [ 8, -8, 9, -4, ,3, 0, 2]

function fn(num) {
    if (num) {
        return num;
    }
}
function fnPos(num) {
    if (num > 0) {
        return num;
    }
}
function fnNeg(num) {
    if (num < 0) {
        return num;
    }
}



function filterArray(arr,f) {
    return arr.filter(f)
}

/* will this change my original array?
console.log(filterArray(myArray,fn))
console.log(filterArray(myArray,fnPos))
console.log(filterArray(myArray,fnNeg))
*/


var newA1 = filterArray(myArray,fn);
var newA2 = filterArray(myArray,fnPos);
var newA3 = filterArray(myArray,fnNeg);

console.log(newA1,newA2,newA3);

//**4**
//Write a function called longestWord that takes a string as argument, and returns 
//the longest word in the string. You should use Array.prototype.reduce to do your work.

//Hint: You can use String.prototype.split to split the string into an array of words.