//1. write a function to return the n character from a string


var str = "australia";
var character = str.charAt(4);

function returnCharacterFromString() {
    console.log(character);
}

console.log(character);

//2. WAF (write a function), with 1 parameter x ,  WR (which returns) the char code of character from position x;

var str = "australia";
var position= str.charCodeAt(4);


function getCharCodeAt(){
    return position;
}

console.log(position)

//3. WAF with 2 params x and y, WR the sum of charcodes from position x and y

var x = 1;
var y = 2;
var sum = x + y;
var position = str.charCodeAt(x + y);    

function sumOfCharCodeFromPosition(){
    console.log(position);
}

console.log(position);

//4. WAF with 2 params, input (string), x(number), WR the same string with the character from position x as uppercase;

var str = "australia";
var x = 3;
var litera = str.charAt(3);
var position = litera.toLocaleUpperCase(x);

function characterFromPositionUppercase(){
    return position;
}

console.log(position);

//5. WAF, (string 1, string 2), WR the indexof string 2 within string 1;

var str1 = "australia";
var str2 = "tra";
var position = str1.indexOf(str2);

function indexOfString(){
    return position;
}
console.log(position);


//6. WAF, (string 1, string 2), WR the last indexof string 2 within string 1;

var str1 = "buna dimineata la toata lumea"
var str2 = "lumea"
var position = str1.lastIndexOf(str2);

function lastIndexOfString() {
    return position
}

console.log(position);


//7. WAF, (string) , WR the first 2 characters

var str = "australia";
var position = str.substr(0, 2);

function returnFirstChareacter(){
    return position;
}

console.log(position);

// 8. WAF, (string), WR the characters from position 1 and -1 (previous character from last one)
// varianata 1
var str = "australia";
var position1 = str.charAt(4);
var position2 = str.charAt(4-1);


function getTheCharacterFromPositionToPrewiousPosition(){
    return position1 + position2;
}

getTheCharacterFromPositionToPrewiousPosition();

// varianata 2
var valoare = str.slice(-3, -1)

function log(){
    return valoare;
}

log();


// 9. WAF, (string, start, end), WR the characters between (start and end)

var str = "australia";
var position = str.substring(2, 7);

function getCharacterFromString(){
    return position;
}

console.log(position);

// 10. WAF (string1, string2), to replace the string2 within string1;

var str = "australia este continent";
var str1 = "tara"
var str2 = "continent";
var position = str.replace(str2, str1);

function replaceString(){
    return position;
}

console.log(position);

// 11. WAF(string), WR true if the length is even. (%2 === 0)

var str = "australia";
var strlength = str.length;
var res = strlength %2 === 0;

function isSringLengthEven (){
    console.log(strlength, res);
}

console.log(res);
false


// 12. WAF(string1, s2), WR the sum of lengths of s1 and s2;

var str1 = "australia";
var str2 = "continent"
var str1length = str1.length;
var str2length = str2.length;
var res = str1length + str2length;

function getSumOfLength(){
    return res;
}

console.log(res);


// 13. WAF(string1, s2), WR true if s1 starts with s2;
 
var string = "australia este continent"
 var res =string.startsWith('australia')

 function log (){
     return res;
 }

 console.log(res);


// 14.WAF(string, number) to remove the character from position number using slice

var str ="australiia";
var nr = 7;
var position = str.slice(nr, nr+1)


function removeCharacterPositionAtIndex(){
    return position
}

console.log(position);


// 15.WAF (string, string) WR the number of aparition of string 2 whithin string1.

var str1 ="australia";
var str2 ="a";
var position = str1.match(/a/g);

function numberOfAparition(){
    return position;
}

console.log(position);


// 16. create an array

var array = ['tata', 2, 'mama', 4]


// 17. WAF to add a string into array 

var array = ["rosu", "galben"];
var str = "mov";
var position = array.push(str);

function log(){
    return array;
}

console.log(position);

var position = array.concat(str);

// 18. WAF (arr, string) to add string into array on position 0;

var array = ["rosu", "galben"];
var res = array.splice(0, 0, "mov");

function log(){
   return res;
}

console.log(array);


// 19. WAF (arr, number) to add the number into array

var array = ["rosu", "galben"];
var str = 6;
var res = array.push(str);

function log(){
    return array;
}

console.log(res);

// 20; WAF (arr) WR the last element from array

var array = ["rosu", "galben", "verde", "mov"]
var res = array.slice(3, 4)

function lastElement(){
    return res;
}

console.log(res)

// 21; WAF (string) WR the characters from string as array

var str1 ="australia";
var res = str1.split("")

function log(){
    return res;
}

console.log(res);

// 22. WAF (arr) WR the reversed array 

var array = ["rosu", "galben", "verde", "mov"];
var reversed = array.reverse();

function log(){
    return array;
}

console.log(reversed);

// 23. WAF (string) to return the inversed string. ex: abc ==> cba

var str = "australia";
var split = str.split("");
var reverse = split.reverse();
var join = reverse.join("");
// var split = str.split("").reverse().join("");

function log(){
    return split;
}

console.log(split);

// 24. WAF (arr, x) to remove the value from position x from array

var array = [1, 2, 3, 4, 5];
var x = 2
var res = array.splice(x, 1);

function log(){
    return array;
}

console.log(res);

// 25. WAF (arr, x) WR true if there is any value equal x into the array

var array = [1, 2, 3, 4, 5];
var x = 2
var res = array.indexOf(x);


function log(){
    return res !== x;
}

console.log(res)

// 26. WAF (arr, y) WR an array containing all the values except y

var array = [1, 2, 3, 4, 5];
var x = 2
var res = array.splice(x, 1);

function log(){
    console.log(array);
}

console.log(array);

// 27. WAF (arr) of numbers which returns the sorted array;

var array = ['mere', 'pere', 'cirese'];
var res = array.sort();

function log(){
    return array;
}

console.log(array);

// 28. WAF (arr) WR the rotated array (1 time)

var array = ['mere', 'pere', 'cirese'];
var res = array.reverse();

function log(){
    return array;
}

console.log(array);

// 29. WAF (arr) of numbers WR another array which contains the squared values; [1,2,3] ==> [1,4,9]
// ???????

var array = [1,2,3];
var newarr = array.map(newarray)

function newarray(item, array){
   return item * item
}

console.log(newarr)


// 30. WAF (r: number) WR the  surface of a circle having the raduis equal r;
var r = 5;
var areaOfCircle = Math.PI * r * r;

function log(){
    return areaOfCircle;
}

console.log(areaOfCircle);

// 31. WAF (arr) which prints to the console the value from the array (one by one)

var array = [5,6,7,8,9];
 array.forEach(output);

function output(item, index, array) {
    console.log(item, index);
}


// 32. WAF writeToConsole(value) which prints the value to the console;

var value = "salut"

 function writeToConsole(Value){
     return value
 }

 writeToConsole();

// 33. WAF (arr1, arr2) which returns another array with elements from arr1 and arr2;

var arr1 = [1,2,3,4,5];
var arr2 = [6,7,8,9,10];

var slice1 = arr1.slice(1, 4);
var slice2 = arr2.slice(1, 4);

var concat = slice1.concat(slice2);

function log (){
    return concat;
}

console.log(concat);

// 34; WAF (arr, position) (arr) contains strings, which replace the element from position x with the inversed value; ex: ['ana', 'xy'], 1 ==> ["ana", "yx"]

// var array = ["abc", "xy"]
// var reverse = array[1]
// var reverse = split.reverse()
// var join = reverse.join("")

// function log(){
//     return join
}

// 35. WAF: (arr, value) WR the position of value into the array

var array = [2,3,4,5,6,7]
var value = 5
var res = array.indexOf(value)

function log(){
    return res;
}

console.log(res);

// 36. WAF (n) which returns an array with n elements

// 37. WAF(string) WR string withowt spaces. ex: "    a    bcd   xyzt    " ==> "abcdxyzt";

 var str = "    a    bcd   xyzt    "
 var split = str.split(" ");
 var join = split.join("");
 var filter = join.filter(" ");
 
 function noSpace(){
     return join;
 }
 console.log(join);

// 38. WAF (X) which returns true if x is array

var array = [1,2,3,4];
var n = Array.isArray(x);

function log(x){
    console.log(n);
}

console.log(n);
// 39. WAF (y) which returns true if y is string;

var string = "australia";
var res = (typeof string === "string");

function log(){
    return res;
}
console.log(res);


// 40. WAF (string, number) which returns the string + number

var str = "Antonia";
var nr = 2;


function log(){
    return str+nr;
}

log()

// 41. WAF WR the inverse value; suppose you have a door; write a function which toggle the state door. isOPEN/isClosed

// 42. WAF WR the number of miliseconds of your life;

// 43. WAF WR current date + 2h

// 44. WAF WR day of the week of the current date

// 45. WAF WR 	 the difference between 2 dates



