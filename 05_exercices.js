// 1. WAF wr the distinct elements from an array

// function distinctElements(arr){

//     let set = new Set([...arr]);
//     let newArray = [...set];
//     console.log(newArray);

// }
// distinctElements([5,6,4,5,3,7,8,1,3,2,3,1]);


var array = [5,6,4,5,3,7,8,1,3,2,3,1]
let unique = array.filter((item, i, array) => array.indexOf(item) === i);
console.log(unique);


// 2. implement a navigation back and forth mechanism
//  you have an array; ypur function "next" and "previous" willl go next one step and back one step
//  on next, if index is the last one, it will be set to 0 
 
var array1 = [1, 7, 3, "b", "c", 5, "d"];

function backAndForth(direction) {
  if (direction === "forth") {
    for (let i = 0; i < array1.length; i++) {
      setTimeout(function () {
        console.log(array1[i]);
      }, 1000 * i);
    }
  }
  if (direction === "back") {
    array1.reverse();
    for (let i = 0; i < array1.length; i++) {
      setTimeout(function () {
        console.log(array1[i]);
      }, 1000 * i);
    }
  }
}
backAndForth("forth");


// 3. WAF which writes to the console the current date, after 2 seconds
     
var timerId = setInterval(() => {
    console.log(new Date());
}, 2000);

clearInterval(timerId);

// 4. WAF which writes to the console the current date, after x seconds

var timerId = setInterval(() => {
    console.log(new Date());
}, x);

clearInterval(timerId);

// 5.having an array of nummbers, print the current date to the console after x seconds
// [1,5,6], it will print the date after 1 and after that after 5 and after that after 6 sec

// var newDate = new Date()
// var array = [1, 5, 6]
// var newarr = array.map(function(item, index, array){
//     return item
// })

// function mytime(newDate){


// var myTime = setTimeout(newDate, newarr)
// ?????

var printCurrentDate = (arr) =>
  arr.map((el) => setTimeout(() => console.log(new Date()), el * 1000));
printCurrentDate([1, 5, 6]);

// 6. implement double click. WAF WHICH prints to the console "double click" in case the function was triggered twice in a specific iterval

var clickCount = 0;
var tId = setTimeout(() =>{
    if(clickCount >=2) {
        console.log("DOUBLE CLICk");
    } else {
        console.log('NOT DOUBLE CLICK');
    }
}, 10 * 1000)

// 7. count haw many calls of a function has been made in a specific interval

var countFunct = 0;

function numberOfTimes() {
  countFunct++;
  if (countFunct > 10) {
    clearInterval(timeout);
  }
  console.log(countFunct);
}
var timeout = setInterval(numberOfTimes, 1000);

// 8.WAF which returns the sum of elements from an array. (recursively)

function sum(arr){

    sum = 0;

    for(i=0; i<arr.length; i++){
        sum += arr[i];
    }

    return sum;

}

sum([1,2,3,4,5]);


// 9. WAF which calculate the n!   --recursion
//  5! = 5 * 4!
//  4! = 4 * 3!
//  3! = 3 * 2!
//  2! = 2 * 1

function factorial(n){

    if(n === 1){
        return 1;
    }

    return n * factorial(n - 1);

}

factorial(5);

// 10. WAF which returns the longest word from a proposition. use regular expression; we didn't learn but do a search

function findLongestWord(str){

    let arrayOfStrings = str.split(" ");
    let longestString = " ";

    for(i = 0; i < arrayOfStrings.length; i++){
        if(longestString.length < arrayOfStrings[i].length){
            longestString = arrayOfStrings[i];
        }
    }
    str = longestString;
    return str;

}

findLongestWord("Salutare la toata lumea, ce mai faceti?");



// 11. Keep it for later. WAF to determine if a epression is correctly written; 

// (2+3)-5) is bad
// ((2+3)-5) is bad
// (2+3))-5 is bad
// ((2+4)-(3*(7-9))) is good



