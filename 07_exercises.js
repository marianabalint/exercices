// 1. WAF WR 6 random numbers out of 49
//  hint: create an array of objects {number: i, code: random string}. for random string use guid. (take a look over javascript guid function). sort the array by code and take first 6

var lottery = {
  numbers: [],
}
 
var helper = {
  getRandomGuid: function() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
  }

var getRandomNumber = {
    newNumber: function(){
    var min = 1;
    var max = 49;
    return  Math.floor(Math.random() * (max - min) + min);
  }
}

  function number(){
    this.id = helper.getRandomGuid();
    this.number = getRandomNumber.newNumber()
  }
  
var n1 = new number();
var n2 = new number();
var n3 = new number();
var n4 = new number();
var n5 = new number();
var n6 = new number();

// let generate6Numbers = {
//   numbers: [],
// };

// function generatingNumbers() {
//   for (let i = 0; i < 6; i++) {
//     let generateNumbers = Math.floor(Math.random() * 49 + 1);
//     generate6Numbers.numbers.push(generateNumbers);
//   }
// }
// generatingNumbers();

// console.log(generate6Numbers.numbers);


// 2. simulate a 6/49 game. you have the winning 6 numbers and n tickets. return the tickets which has 1 winning number, 2 , .... 6
// hint: you can use :
// winningTickets = {};
// winningTickets[1] = []; ... winningTickets[6] = [];

// let ticketOfNumbers = {
//   name: "Vasile",
//   numbers: [2, 3, 22, 31, 49, 37],
// };

// let game6_49 = {
//   numbersFromTicket: [],
//   ramdomNumbers: [],
//   winnigTicket: "",
// };

// function tickets() {
//   ticketOfNumbers.numbers.map(function (num) {
//     if (num > 0 && num <= 49) {
//       game6_49.numbersFromTicket.push(num);
//     } else {
//       console.log("The numbers must be from 1 to 49 !!!");
//     }
//   });
// }
// tickets();

// function generatingNumbers() {
//   for (let i = 0; i < 6; i++) {
//     let generateNumbers = Math.floor(Math.random() * 49 + 1);
//     game6_49.ramdomNumbers.push(generateNumbers);
//   }
// }
// generatingNumbers();

// function winnigTicket() {
//   let winningNumbers = [];
//   game6_49.numbersFromTicket.map(function (win) {
//     game6_49.ramdomNumbers.map(function (random) {
//       if (win == random) {
//         winningNumbers.push(win);
//         console.log("The winning numbers are " + winningNumbers + " !!!");
//         console.log(
//           "The winning ticket belongs to " + ticketOfNumbers.name + "."
//         );
//         game6_49.winnigTicket = ticketOfNumbers.name;
//       }
//     });
//   });
// }
// winnigTicket();
// console.log(game6_49);

// 3. Create a chat. you have one chat room with many users. 
// - when a user send a message to the chat, every user receive that message. 
// - when a user enters into the room it will receive the existing messages

// hint: use the same approach as descibed with closure at the store example


var helper = {
  getRandomGuid: function() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
  }


var chatRoom = {
    users: [],
    messages: []
}

var usersManagement ={
      addNewUser: function(name){
          chatRoom.users.push(name);
      },
      addNewMessage: function(message){
          chatRoom.messages.push(message);
      }
  }

function user(){
  this.id = helper.getRandomGuid()
  this.name = usersManagement.addNewUser(name) ;
  this.newUserJoin = function(user){
          chatRoom.users.push(user);
      },

  this.newUserMessage = function(mess){
          chatRoom.messages.push(mess);
      }
      return this ;
}

function messages(mess){
  this.newUserMessage = "Hello everyone";

  return chatRoom.messages.push(mess);
}

var user1 = new user 



// // 4. you have an array; please return all pairs of numbers with sum equal n
// // ex: [1,3,2,6, 5], 7 ==> [[1,6],[2,5]]
//  var array = [1, 3, 2, 6, 5];
//  var pairs 

 function getPairs(array){
   var sum = [];
 for (var i = 0; i < array.length; i++) {
  var a = array[i]
  for (var j = 0; j < array.length; j++) {
  var b = array[j]
     if ( (a + b) === 8 && sum.indexOf(a+","+b) == -1 && sum.indexOf(b+","+a ) == -1 ) {
        sum.push( a+","+b )
      }
  }
}
for (var i=0; i < sum.length; i++) {
  sum[i] = sum[i].split(',')
}
return sum
} 

getPairs([1,2,3,4,5,6,7,8,9])

// 5. please design a matrix of n/n numbers containing random numbers between (0, n)
// hint: an array is []
// a matrix is [[], [], []] ...
// this means that arr = []; and after that arr[0] = []; and so on

function listToMatrix(list, elementsPerSubArray) {
  var matrix = [], i, k;

  for (i = 0, k = -1; i < list.length; i++) {
      if (i % elementsPerSubArray === 0) {
          k++;
          matrix[k] = [];
      }

      matrix[k].push(list[i]);
  }

  return matrix;
}

var matrix = listToMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);

// 6. return the sum of numbers

var matrix = [[1,2,3], [4,5,6], [7,8,9]]
var newArray = matrix.map(arr => arr.reduce((sum, item) => sum += item, 0));

console.log(newArray);

var sum = newArray.reduce(function(a,b){
	return a+b;
}, 0);

console.log(sum);


// 7. return the sum of all diagonal numbers
var matrix = [[1,2,3], [4,5,6], [7,8,9]]

function diagonalSums(matrix) {
 
  let mainSum = 0, secondarySum = 0;
  for (let row = 0; row < matrix.length; row++) {
      mainSum += matrix[row][row];
      secondarySum += matrix[row][matrix.length - row - 1];
  }
  console.log(mainSum + ' ' + secondarySum);
}

diagonalSums([[1,2,3], [4,5,6], [7,8,9]]);
   
// sau
var matrix = [
  [1,2,3],
  [4,5,6], 
  [7,8,9]]
;

function sumUpDiagonals(matrix) {
 var sumDiagonals = {main: 0, second: 0},
   matrixLength = matrix.length;

 for (var i = 0; i < matrixLength; i++) {
   sumDiagonals.main += matrix[i][i];
   sumDiagonals.second += matrix[i][matrixLength-i-1];
 }
 return sumDiagonals
}
 
console.log(sumUpDiagonals(matrix))

// 8. return the sum of numbers for every column
var matrix = [
  [1,2,3],
  [4,5,6], 
  [7,8,9]]
;

function sumOfColum(sum){
  rows = matrix.length
  cols = matrix[0].length; 
for(var i = 0; i < cols; i++){  
  sumCol = 0;  
  for(var j = 0; j < rows; j++){  
    sumCol = sumCol + matrix[j][i];  
  }  
  console.log("Sum of " + (i+1) +" column: " + sumCol);  
}  
}  

console.log(sumOfColum())

// 9. WAF WR the "determinantul" :)

var arr = [[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]]
  
// * 
//  *       a b c
//  * arr = d e f
//  *       g h i
//  *  determinant = a*(e*i - f*h) - b*(d*i-f*g) + c*(d*h - e*g)

var determinant = arr[0][0] * (arr[1][1]*arr[2][2] - arr[1][2]*arr[2][1]) -
                  arr[0][1] * (arr[1][0]*arr[2][2] - arr[1][2]*arr[2][0]) +
                  arr[0][2] * (arr[1][0]*arr[2][1] - arr[1][1]*arr[2][0]);
  
 
console.log (determinant);

// 10. WAF which store the selected days of the week.
// hint: you can use: ['monday', 'tuesday' , ...] or assign to every day a value and store as [0, 1], etc OR use bit wise: 1 + 2 + 4 + 8 ... to verify is checked you can use (value & 2 ('tuesday') )  === 2

