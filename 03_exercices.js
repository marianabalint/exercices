
// Aceste exercitii se pot rezolva si mai incolo daca acum e mai greut. se pot face si acum. de aia o sa dau niste hinturi.

// TAKE A LOOOK: https://scotch.io/tutorials/coding-exercise-build-javascript-array-methods-from-scratch

// 1. WAF which prints to the console element by element from array
//  1.1. use forEach

 var array = [2,3,4,5,6]
 array.forEach(output)
 
 function output(item, index, array){
    console.log(item, index)
 }
 

//  1.2. use map

 var array = [2,3,4,5,6]
array.map(output)

function output(item, index, array){
   console.log(item, index)
}

//  1.3. use reduce

 var array = [2,3,4,5,6]
 array.reduce(output)
 
 function output(item, index, array){
    console.log(index)
 }

// 2. WAF which receive an array of numbers and returns the sum of elements from array
	2.1 use reduce

	var array = [2,3,4,5,6];
	var sum = array.reduce(function(a,b){
		return a+b;
	}, 0);

	console.log(sum)

	// 2.2 use forEach
		// hint: you need another valiable named 'sum' for example which is equal 0; for each element from array, increase the sum value and as the last step, return the sum value
	
		var array = [2,3,4,5,6];
		var sum = 0
		var total = array.forEach(getSum);

		function getSum(item){
			return sum += item;
		}

		console.log(sum);
	
		// 2.3 use map
		var array = [1,2,3];
		var newarr = array.map(newarray)
		var sum =newarr.reduce(newarray)
		function newarray(newarray){
		   return array[0] + array [1] + array[2]
		}
		
		console.log(sum)
		
// 3. WAF WR the sum of even (%2 ===0) from an array
	// 3.1. use filter and after that use function declared at 2.1
	
var array = [2,3,4,5,6];
var even = array.filter(getEven)

function getEven(number){
	return number %2 == 0
}
console.log(even)

var sum = even.reduce(function(a,b){
	return a+b;
}, 0);

 console.log(sum)

	// 3.2. use filter and after that use function declared at 2.2
	var array = [2,3,4,5,6];
	var sum = 0
	var total = array.forEach(getSum);
	var even = array.filter(getEven)


function getEven(number){
	return number %2 == 0
}
console.log(even)

var sum = even.reduce(function(a,b){
	return a+b;
}, 0);

console.log(sum)

	// 3.3. use filter and after that use function declared at 2.3
	var array = [1,2,3,4];
	var even = array.filter(getEven)
	function getEven(number){
		return number %2 == 0;
	}
	console.log(even)

	var newarr = even.map(newarray)
	var sum =newarr.reduce(newarray)
	function newarray(newarray){
	   return even[0] + even [1];
		}
	
	console.log(sum)


// 4. WAF WR the sum of first n elements from an array
// 	3.1. use slice and after that use function declared at 2.1
var array = [2,3,4,5,6];
var newarr = array.slice(2,4)

	var sum = newarr.reduce(function(a,b){
		return a+b;
	}, 0);

	console.log(sum)

// 	3.2. use slice and after that use function declared at 2.2
var array = [2,3,4,5,6];
var newarr = array.slice(2,4)
		var sum = 0
		var total = newarr.forEach(getSum);

		function getSum(item){
			return sum += item;
		}

		console.log(sum);


// 	3.3. use slice and after that use function declared at 2.3
var array = [1,2,3];
var sli = array.slice(0,1);
		var newarr = sli.map(newarray);
		var sum =newarr.reduce(newarray);
		function newarray(newarray){
		   return array[0] + array [1]; 
		}
		
		console.log(sum);

// 5. what's the differecnce between slice and splice functions?
 The splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, as a new array object.
 The splice() method changes the original array and slice() method doesn’t change the original array.

var array = [7,8,9,10,11]
var newarr = array.splice(3,4)
console.log(newarr)
(2) [10, 11]


var array = [7,8,9,10,11]
var newarr = array.slice(3,4)
console.log(newarr)
[10]


// 6. WAF which returns an array of n elements; ex: createEmptyArray(3) ==> [0,0,0]
//    hint: use array.fill function

var array = [7,8,9,10,11];
var res = array.slice(0,3);
var fill = res.fill(0);

function ArrayOfN(){
	return fill;
}

console.log(ArrayOfN());


// 7. WAF with 2 parameters (min, max) WR a random number between min and max
//    hint: do a search on internet how Math.random can be used

function getRandomArbitrary(min, max) {
	var min = 5;
	var max = 9;
	return Math.floor(Math.random() * (max - min) + min);
}

getRandomArbitrary();


// 8. WAF WR with parameter n which returns an array of random n numbers  between min and max 
//    hint: 
//    use 6. to create the initial array == (1)
//    use forEach(element, index) over (1) and set the element from (1) as the result of 7
//    return (1)





// 9. WAF (write a function) (arr1, arr2) which concatenate 2 arrays
// 	9.1. use concatenate function from array

var arr1 = [1,2,3]
var arr2 = [4,5,6]
var newarray = arr1.concat(arr2)

function ArrayConcat(){
	return newarray;
}

var x = ArrayConcat();
console.log(x);

// 	9.2. use forEach function from array 
// 	     hint: in that function declare use arr1 and forEach element from array2, push the element in arr1 and, in the final step,  return the arr1
 var ar1 = [1,2,3]
 var ar2 = [4,5,6]
 var ar3 = [ar1, ar2]

 var ar4 = []
 ar3.forEach(a=>ar4.push(...a))
 console.log(ar4)

	// 9.3. use reduce function;
// 	     hint: the same as 1.2, but use reduce; Note: reduce receive the initial value and this initial value can be arr1;

var ar1 = [1,2,3];
var ar2 = [4,5,6];
var ar3 = " ";

var ar4 = ar3.reduce((ar1, ar1) => ar1 + ar2);
console.log(ar4);

// 	9.4. use map function;
// 		hint: the same as 1.2 but using map





// 10; use ternary operator over a numeric value n; if n< 18 will return true otherwise false;
//    hint: this should be simple; just use ternary operator documentation

function isAdult(age){
	var age = 9;
	return age > 18 ? 1 : 0;
}

console.log(isAdult);

// 11. sort an array of numbers  ascendent
var array = [2, 10, 35, 21, 100, 325, 117]
array.sort(function(a, b){return a-b});
 console.log(array)

// 12. sort an array of numbers  descendent
var array = [2, 10, 35, 21, 100, 325, 117]
array.sort(function(a, b){return b-a});
console.log(array)

// 13.   WAF which receive as input parameter a boolean value; ascendent; if ascendent is true, it will return the array sorted ascendent otherwise descendent
//    hint: use ternary operator to get the necessary function; if ascendent ==> it will be the function name from 11. otherwise from 12;
//    note. you need only the function name and not have to call by using () during the ternary operation (1)
//    use the function (1) to return the corect value

// 14. WAF which receive a string and returns the sum of charcodes of each character from string
var str = "australia"
var arr = str.split("")

var newarr = arr.map(function(item, index, array){
	return item.length
}
var sum = newarr.reduce(function(a,b){
	return a+b;
}, 0);

console.log(sum)

// 15. WAF which receive an array of numbers and returns a string representing the fromCharCode ...
var arr = [ 189, 43, 190, 61]
String.fromCharCode(189, 43, 190, 61)

// 16. WAF which receive a string and character; the response will be the reversed initial string without character: ex; removeChar('alabalaportocala') => 'lblportocl'
// hint: use split and after that filter and after that reverse and after that join


const ex = ("alabalaportocala");
const char = ("a");

const split = ex.split("");
const reverse = split.reverse();
const filter = reverse.filter(el => el !== char);
const join = filter.join("");

console.log(join);



// 17. having an array of arrays, calculate the sum of all numbers; ex: [[1,2,3],[4],[5,6,7,8],[9,10]] ==> 55



var array = [[1,2,3],[4],[5,6,7,8],[9,10]]
var newArray = array
  .map(arr => arr.reduce((sum, item) => sum += item, 0))

console.log(newArray);

var sum = newArray.reduce(function(a,b){
	return a+b;
}, 0);

console.log(sum)





// //https://www.freecodecamp.org/news/reduce-f47a7da511a9/ for a little bit later






