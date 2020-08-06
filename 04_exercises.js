

// // 1. WAF which logs to the console the numbers smaller than n;  ex: show(4) ==> 0,1,2,3
//     // - use for syntax
      
function smallerThan(array){
     for ( var i = 0; i < 4; i++) {
        console.log(i);
    }
}

smallerThan();


// 	// - use while

function count(){
    let n = 0;
    while (n < 4) {
        console.log(n);
        n++;
    }
}

count();


// 	// - use map
// 	- use forEach

// 2. WAF which logs to the console the numbers smaller than n only if number is even;  ex: show(4) ==> 0,2; HINT use if
// 	- use for syntax

function smallerThan(){
    for ( var i = 0; i < 4; i++) {
        if (i%2 == 0)
       console.log(i);
   }
}

// 	- use while

function smallerThan(){
    var n = 0;
    while (n < 4) {
        if (n%2 === 0)
        console.log(n);
        n++;
    }
}

smallerThan();

// 	- use map


// var array = [1,2,3,4,5,6,7,8,9]
// var res = array.map(smallerThan)

// function smallerThan(array){
//     for ( var n = 0; n < array.length; n++)
//      if( n %2 === 0);
//      return n
//     }


// smallerThan();

// 	- use forEach  

// 3. WAF which logs to the console the numbers smaller than n and iterating over x steps;  ex: show(20, 3) ==> 3, 6, 9, 12, 15, 18
// 	- use for syntax

function smallerThan(array){
    for ( var i = 0; i < 20; i = i + 3)
    console.log(i)
}
 smallerThan()

// 	- use while

function count(){
    let n = 0;
    while (n < 20) {
        if ( n = n + 3 )
        console.log(n);
    }
}

count();

// 	- use map
// 	- use forEach   

// 4. the same as exercise 2 but the input will be an array
// 	- use for syntax
var array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var a = [];

function evenSmalerThan(){
    for (var i = 0; i < array.length; i++) {
        if((array[i] % 2) == 0) { 
            a.push(array[i]);
        }
        return a
    } 
}
    
// 	- use while
var array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function count(arr){
    var i = 0
    while (i % 2 == 0) {
       i < array.length
    }
        console.log(i, array[i]);
        i++;
}

count();
// 	- use map
// 	- use forEach  
    
// var arr = [1, 2, 3, 4, 5, 6];
// arr.forEach(getEvenNumbers);


// 5. WAF which retuns the sum of elements from an array
// 	- while 

function sumOfElements(array){
    var sum = 0;
    var i = 0;
    while( i < array.length) {
    sum += array[i];
    i++;
}
    console.log(sum);
}

sumOfElements([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

// 	- for
var array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function sumOfElements(array){
    var sum = 0;
    for( var i = 0; i < array.length; i++){
    sum += array[i];
}
    console.log(sum);
}

sumOfElements([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])


// 	-forEach

function sumOfElements(array){
    var sum = 0;
    array.forEach(function (item) {
        sum += item;
    });
    console.log(sum);
}

sumOfElements([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

// 	- reduce


// 6. WAF which retuns the sum of elements from an array only if the value is multiple of x
// 	- while 
// 	- for
// 	-forEach
// 	- reduce
// 	- filter -- here it is ok to use filter first...

// 7. rotate an array x times
// 	- use for 
// 	- use while

// 8. WAF which receive an array as input and returns another array  - every time the step will increase with 1. ex;
// 	[3,6,1,8,90,23,4,21,54,2,88, 1,2,3] ==> [3, 6,  8, 4, 88]
// 	- use while

// 9. WAF which receive an array and returns the sum of numbers;
// 	the element from even position will be decreased with his position
// 	the element from ODD position will be INCREASED with his position

// 	EX: [4,5,6] => (4-0) + (5+1) + (6-2) => ..

// 	- use map
// 	- use for
// 	- use forEach
// 	- use reduce

// 10. WAF which returns the maximum element from an array
// - while
// - for
// - map
let array = [6,7,8,3,5,4,9,1];

function findMaxFrom(x, y) {
    if (y > x){
        x = y;
    }
    return x;
}

let findMax = array.reduce(findMaxFrom);
console.log(findMax);

// 11. WAF which returns the MINIMUM element from an array

let array = [6,7,8,3,5,4,9,1];

function findMinFrom(x, y) {
    if (y < x){
        x = y;
    }
    return x;
}

let findMax = array.reduce(findMinFrom);
console.log(findMax)

// 12. WAF with arr as input and returns the position of an element in array; e.g; [4,5,6,4], 6 ==> 2
var array = [4, 5, 6, 4];
var a = array.indexOf(6)

function position(number){
    return number
}
 console.log(a)

// 13. WAF with arr as input and returns ALL positions of an element in array; e.g; [4,5,6,4], 4 ==> [0,3] 
var array = [4,5,6,4]

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

var indexes = getAllIndexes(array, 4);
indexes()


// sau 

var array = [4, 5, 6, 4].reduce(function(array, n, i) { if (n===3) array.push(i); return array; },[] )

// 14. WAF WR the maximum number smaller than n by using multiplications with 2 (starts with 1); 
// 	e.g: (35) ==> 1 * 2
// 		2*2 = 4
// 		4*2 = 8
// 		8*2=16
// 		16*2 = 32
// 		==> (35-32) ==> 3	



// 15. WAF wich receive 2 arrays; combine the two arrays; ([1,2,3], [7,8,9] ) ==> [1,7,2,8,3,9]
// - use for, while, yu can try reduce as wellvar arr1 = [1,2,3];
// var array1= [1,2,3];
// var array2 = [7,8,9];
// var result = [];


// 16. WAF to return true if a number is prime

function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

// 17. WAF to return all prime numbers between min, max

// 18. WAF which returns the sum of elements by using:
// 	- get the first chracter and after that call the same function with remaining elements
// 	e.g. sum([1,2,3,4]) = 1+ sum([2,3,4]) = 3 + sum([3,4])...

// 19. WAF WR the longest word from a proposition. 
// e.g. 'ana are mere         golden    ionatan         extraterestre mirifice' ==> extraterestre
// HINT; se face remove la multiple spatii
// split in fctr de ' '
// map pe length
// aflare maxim element
// returnare valoare din array a elementului de pe pozitia maxim

// 20. WAF WR the a^b mod c
// - this should be made with recursivity. give it a try! 
















