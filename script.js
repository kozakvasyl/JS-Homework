/*// ----TASK1
function numFromTenToZero() {
	for (var i = 10; i >= 0; i--) {
		console.log(i);
	}
}
numFromTenToZero();*/



/*// ----TASK2
function pythagoreanTheorem(a,b) {
	var a;
	var b;
	var c = Math.sqrt(a*a + b*b);
	return c;
}
console.log( pythagoreanTheorem(3,4) );*/



/*// ----TASK3
function convertCtoF(celsium) {
	var celsium;
	var fahrenheit = celsium * 1.8 + 32;
	return(fahrenheit);
}
console.log( convertCtoF(42) );*/


/*// ----TASK4
function usingPrompt() {

	var name = prompt('Hi! What is your name?', '');
	var date = prompt('Hi! ' +name+ '. What the time?', '');
	var city = prompt('And what is the sity?', '');
	alert(name+' has a meeting today at '+date+' somewhere in '+city);
}
usingPrompt();*/


/*// ----TASK5
function converter() {
	var change = 26.0375;
	var usd = prompt('What dollars do you have???', '');
	var ua = usd*change;
	alert('It is '+ua+' ukrainian hryvnias!');

	var usd = prompt('What hryvnias do you have???', '');
	var ua = usd/change;
	alert('It is '+ua+' american dollars!');
}
converter();*/


/*// ----TASK6
function pattern() {
	
	var star = '*';
	var resolt = '';
	for (var i = 0; i < 5; i++) {
		resolt += star;
		console.log(resolt);
	}
}
pattern();
*/


/*// ----TASK7
function radiansToDegrees(rad) {
	var deg;
	var pi = Math.PI;
	deg = rad*(180/pi);
	return(deg);
}
console.log( radiansToDegrees(0.7853981633974483) );*/


/*// ----easy TASK1
function onlyPairNumbers(arr) {
	
	var PairNumbers = arr.filter(function(number) {
	return number % 2 == 0;
	});

	console.log(PairNumbers);
}
onlyPairNumbers([1,5,23,4,2,5,6]);*/



// ----easy TASK2
/*function maxMinValue(arr) {
	
	function compareNumeric(a, b) {
		if (a > b) return 1;
		if (a < b) return -1;
	}
arr.sort(compareNumeric);
console.log('max: '+arr[arr.length -1]+', min: '+arr[0]);
}

maxMinValue([1,92,-5,25]);

function maxMinValue(arr) {
	var min = arr[0];
	var max = arr[0];
		for (i = 1; i < arr.length; i++){
			if (arr[i] < min) min = arr[i];
			if (arr[i] > max) max = arr[i];
		}
	console.log('min: '+min+', max: '+max);
}
maxMinValue([1,92,-5,25,100,-7]);*/


// ----easy TASK3
/*function average(arr) {
	var sum =0;
	for (var i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
	console.log(sum/arr.length);
}

average([1,4,2]);*/


/*// ----medium TASK1
function reverseNumber() {
	var value = prompt('Write a number!', '');
	var arr = value.split("").reverse().join("");
	console.log(arr);
}

reverseNumber();*/


/*// ----medium TASK2
function reverseString(str) {
	var str;
	var arr = str.split("").reverse().join("");
	return(arr);
}
console.log(reverseString('Hello, World!'));*/

// ----medium TASK3
/*function genCombString(str) {
	var arr =[];
	for (var i = 0; i < str.length; i++) {
		for (var j = i+1; j <= str.length; j++) {
			arr.push( str.substring(i,j) );
		}
	}
	console.log(arr);
}
genCombString('rock');*/

  
/*// ----medium TASK4
function firstLetterUpperCase(str) {
	var str;
	var arr = str.split(' ');

		  for (var i = 1; i < arr.length; i++) {
		    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
		  }

	var arrJoin = arr.join(' ');
	var ucArr = arrJoin[0].charAt(0).toUpperCase() + arrJoin.slice(1);
	console.log(ucArr);
}
firstLetterUpperCase('the quick brown fox');*/

/*// ----medium TASK5
function repeatedNot(str) {
	var arr = str.split ('').sort();	
	
	function repeeted (a,b) {
		return a = b;
	}
	var notRepeeted = arr.reduce(repeeted);
	alert(notRepeeted);
}
repeatedNot('abakcddbgeceefagbbcf');*/

/*// ----medium TASK5
function repeatedNot(str) {
	var i = 0;
	while (i < str.length) {
		
		if ( str.indexOf ( str[i]) === str.lastIndexOf (str[i]) ) {
			alert(str[i]);
		}
	i++;
	}
}
repeatedNot('abacddbec');*/

// ----medium TASK6
/*function factorial(n) {
	
	if (n != 1) {
		return n * factorial(n - 1);
	} 
	
	else
		return 1;
}
console.log( factorial(5) );*/


/*// ----medium TASK7
function randomNumber(a, b) {
	return Math.floor(Math.random() * (a - b) + b);	
}
console.log( randomNumber(20, 1) );*/


/*// ----medium TASK8
function calcPercentage(per, num) {
	return ( num / 100 ) * per;
}
console.log( calcPercentage(1000, 47.12) );*/



/*// ----hard TASK1
function recursiveNtoO(n) {
	console.log(n);
	if (n === 0) return;
	return recursiveNtoO(n-1);
	
}

console.log( recursiveNtoO(7) );*/

/*// ----hard TASK3
var arr = [3,8,14,19,36,72,144,290,333,490]

function binarySearch (arr, value) {
	var first = arr.indexOf( arr[0] );
	var last = arr.indexOf( arr[arr.length-1] );
	
		while (first <= last) {
			var midle = Math.floor( (first+last)/2 );
			 if (arr[midle] > value)
			 	arr[first] = arr[midle-1];
			 else if (arr[midle] < value)
			 	arr[last] = arr[midle+1];
			 else console.log( arr[midle] );
		}
		console.log('Is not a value!');
	}
binarySearch (arr, 333);*/

/*// ----hard TASK4
function findDublicate(arr) {
	var arrSort = arr.sort();	
	var dublicate = [];
	for (var i = 0; i < arr.length; i++) {
	if (arrSort[i] == arrSort[i+1])
	dublicate.push(arrSort[i]);
	}
	alert(dublicate);
}
findDublicate( [56,1,39,13,37,78,1.3,39] );*/
