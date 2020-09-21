links with algorithms:
https://www.dailycodingproblem.com/
codewors.com
leetcode.com
hackerrank.com
https://www.algoexpert.io/ - de site-ul asta va spuneam eu




NOTA: la curs am zis ca destructing e aceeasi treaba cu spread. e total fals si nu stiu cum de am spus asta.


destructing: initializarea unor variabile dintr-un object.
	ex:

	var obj = {name: 'ion'};

	destructing inseamna: 
		var {name} = obj;
	ceea ce este echivalent cu var name = obj.name;

	https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8

spread: 
	echivalent cu Object.assign. 
	var newObj = {...obj}



exemple de la curs:


var a = {};

var b = Object.assign(a,{x:1})

b
{x: 1}
var a = {x:1};

var b = a;

b.x = 4
{x: 4}
var b = Object.assign({},a);

{x: 4}
b.x = 5;
{x: 5}
{x: 4}
var c = {...a}

c.x = 8



// object.create de ce pune pe prototype?

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes



exercises:

1. WAF which sort an array of objects by age;

var list = [
	{name: 'karla', age: 6},
	{name: 'antonia', age: 2},
	{name: 'karina', age: 4},
	{name: 'sara', age: 10},
	{name: 'elisa', age: 12}
]

function sortByAge(arr){
	var sortedArray=arr.sort((a,b)=>(a.age - b.age));
	return sortedArray;
}

console.log(sortByAge(list))

2. WAF which sort an array of objects by a property passed as a parameter;

var fruits =[
	{name: 'mar', culoare: 'rosie'},
	{name: 'para', culoare: 'galben'},
	{name: 'strugure', culoare: 'violet'},
	{name: 'portocala', culoare: 'portocaliu'}

]

function compare( a, b ) {
	if ( a.culoare < b.culoare ){
	  return -1;
	}
	if ( a.culoare > b.culoare ){
	  return 1;
	}
	return 0;
  }
  
  fruits.sort(compare);


3. WAF which sort an array of objects by a property and ascendent/descendent passed as a parameter ;
// ascendent
var list = [
	{name: 'karla', age: 6},
	{name: 'antonia', age: 2},
	{name: 'karina', age: 4},
	{name: 'sara', age: 10},
	{name: 'elisa', age: 12}
]
function sortByAge(arr){
	var sortedArray=arr.sort((a,b)=>(a.age - b.age));
	return sortedArray;
}

console.log(sortByAge(list))

// descendent
function sortByAge(arr){
	var sortedArray=arr.sort((a,b)=>(b.age - a.age));
	return sortedArray;
}

console.log(sortByAge(list))

4. WAF WR the distinct values from an array
[1,2,2,2] => [1,2]

var arr = [1,2,2,2]

function getDistinctValueFromArray(value){
 var resArr = []
 resArr = value.filter((el, index, a) => a.indexOf(el) === index);
 return resArr;
}

console.log(getDistinctValueFromArray(arr));


5. take a look over instanceof
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

6. see the difference between instanceof and typeof
https://stackoverflow.com/questions/899574/what-is-the-difference-between-typeof-and-instanceof-and-when-should-one-be-used
http://engblog.yext.com/post/js-type-checking

7. let''s assume that javascript does not contains the new operator;
can you write your own "new" operator?
https://2ality.com/2014/01/new-operator.html

function newOperator(Constr, args) {
	var thisValue = Object.create(Constr.prototype); 
	var result = Constr.apply(thisValue, args);
	if (typeof result === 'object' && result !== null) {
		return result; 
	}
	return thisValue;
}

8. sort a object by key; 
ex: 
{
	zanzi: {test: 1},
	ana: 10,
	balet: 'duminica'
}
 ==>
{
	ana: 10,
	balet: 'duminica',
	zanzi: {test: 1},
}
  
var obj = {
	zanzi: {test: 1},
	ana: 10,
	balet: 'duminica'
}

function sortObjByKey(object){
	Object.keys(object).sort((a,b) => (a > b) ? 1 : -1)
return object;
}

console.log(sortObjByKey(obj))



9. sort an array of numbers by number of 1 from binary representation
hint: 
var d = 10;
console.log( d.toString(2) );


10. 
	- declare a object of type car which contains the method "start"
	- serialize the object as string: hint JSON.stringify
	- deserialize the object as obj1
	- call the start method; ask why the start method is not available
	- create a new object from obj1 having the type Car; the object could be obj2;  hint new Car(obj1); here, yiu can read the properties
	- call obj2.start; explain why you don''t have teh start method;
	- ask yourself how the car object can be create in order to have the start method. hints below
		1. use prototype - recommanded solution
		2. the start method can be declared using this 








