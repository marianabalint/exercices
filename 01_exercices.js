
// 1. into the D drive(C in case you don't have D) , create a directory with name 'Work'
// 2. into the 'Work'  directory create a directory named 'Javascript' and also 01_operators. After this you will have d:/Work/Javascript/01_operators

// 3. open the developer tools (you can use chrome/firefox/opera/edge/IE) - every browser has a developer tools. You can open by pressing f12 or right click/inspect and choosing the console tab

// 4. declare a numeric variable representing your age

var claudiuAge = 41;

// 5. declare a string variable representing your first name 
let firstName = 'Mariana';

// 6. declare a string variable representing your last name 

let lastName = 'Balint';

// 7. declare a date variable representing your birhday
let birthDay = new Date(1988,11,16);

// 8. declare another variable representing your name. hint: use the concatenation operator by using the previous declared variables from (5 and 6)

let name = firstName + lastName;

// 9. declare a variable to store your birthday year.

let birthDayYear = 1988;

// 10. declare a variable to store  if (9) is odd. (if your birthday year is impar). Hint: use the modulo operator. What's the type of this variable?

const isOdd = birthDayYear % 2 === 1;

// 11. increase your (9) with 5 units; hint: use + and after that use +=

birthDayYear = birthDayYear +5;

birthDayYear += 5;

// 12. decrease your (9) with 5 units; hint: use - and after that use -=   What's the value of (9)? 

birthDayYear = birthDayYear - 5;

birthDayYear -= 5;


// 13. declare a variable 'gender' which contains if you are a male or female. 

const gender = 'female';

// 14. Let's consider that you are a babysitter and you have to watch a movie with your "children".
	// - declare the following variables:
	// 	- age of the children   
	// 	- movie price for child
	// 	- movie price for adult
	// 	- movie age restriction
	// 	- children money
	// 	- your (adult) money
	// 	- ignoreAgeRestriction (true or false). if true, is my responsability if i watch the movie with the child even his age is smaller than the movie age restriction.



		chAge = 5;
		chMoviePrice = 10;
		adultMoviePrice = 20;
		movieAgeRestriction = 12;
		chMoney = 9;
		adultMoney = 21;
		ignoreAgeRestriction = true;

	// - determine the following scenarios:
	// 	-  child can watch the movie alone if has enought money and his/her age is at least movie restriction age
	// 	-  they can watch the movie if every one has enouht money and the child age restriction is ok OR ignoreAgeRestriction is true
	// 	-  they can watch the movie if amount of their money is at least the tickets price and (the child age restriction is ok OR ignoreAgeRestriction is true)


		let canWatchMovieAlone = chMoney >= chMoviePrice && chAge >= movieAgeRestriction;
		let canWatchMovie = (chMoney >= chMoviePrice) && adultMoney >= adultMoviePrice && (chAge >= movieAgeRestriction || ignoreAgeRestriction === true)
		let canWatchMovie1 = ((chMoney + adultMoney) >= (chMoviePrice + adultMoviePrice) && adultMoney >= adultMoviePrice && (chAge >= movieAgeRestriction || ignoreAgeRestriction === true)

Plase send me your work on this document (on private channel - not directly on the group)

		

