// https://github.com/rolling-scopes-school/tasks/blob/master/tasks/codewars/data-types.md

/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/find-the-squares
//
/* --------------------- |||| --------------------- */
// 2 * 2 = 4
// 3 * 3 = 9
// 4 * 4 = 16
// 5 * 5 = 25
// 6 * 6 = 36
// 7 * 7 = 49
// 8 * 8 = 64
// 9 * 9 = 81

// 25 - 16 = 9
// 9  -->  "25-16"
// 5  -->  "9-4"
// 7  -->  "16-9"

// Math.pow(2,2)

function getDiff ( n ) {
	let result = "";

	for ( let i = 1; i < n; i++ ) {
		const a = Math.pow ( i, 2 );
		const b = Math.pow ( i + 1, 2 );

		if ( b - a === n ) {
			result = `${ b } - ${ a }`;
		}
	}

	return result;
}

// console.log(getDiff(7));

/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/sum-of-triangular-numbers
//
/* --------------------- |||| --------------------- */

// 6 -> 56
// 34 -> 7140
// -291 -> 0;
// 943 -> 140205240
// -971 -> 0;

function triangleOfNumbers ( n ) {
	if ( n < 0 ) {
		return 0;
	}
	let sum = 0;
	for ( let i = 1; i <= n; i++ ) {
		sum += (i * (i + 1)) / 2;
	}
	return sum;
}

// console.log(triangleOfNumbers(34));

/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/rearrange-number-to-get-its-maximum
//
/* --------------------- |||| --------------------- */

//maxRedigit(123); // returns 321
function maxRedigit ( n ) {
	let result = 0;
	let arrNum = `${ n }`.split ( "" );

	if ( arrNum.length !== 3 ) {
		return null;
	}

	arrNum.sort ( function ( a, b ) {
		return b - a;
	} );

	result = arrNum.join ( "" );

	return +result;
}

//console.log(maxRedigit(146)); // 146 -> 641
// console.log(142); // 142 -> 421
// console.log(maxRedigit(1537)); // 7531
// 1537 => null - Expected: null, instead got: 7531
// 99 => null - Expected: null, instead got: 99
// 1000 => 1000 - Expected: null, instead got: 1000
// 91 => null - Expected: null, instead got: 91

/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/complementary-dna
//
/* --------------------- |||| --------------------- */
// «А» > «Т»
//  «С» > «G»
const dnaToRna = ( str ) => {
	let result = "";

	if ( str === "" ) return "";

	for ( let i = 0; i < str.length; i++ ) {
		switch ( true ) {
			case str[i] === "G":
				result += "C";
				break;
			case str[i] === "C":
				result += "G";
				break;
			case str[i] === "T":
				result += "A";
				break;
			case str[i] === "A":
				result += "T";
				break;
			default:
				return null;
		}
	}
	return result;
};

// console.log ( 'dnaToRna', dnaToRna ( 'GTAT' ) );

/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/credit-card-mask
//
/* --------------------- |||| --------------------- */

/*
 maskify("4556364607935616") == "############5616"
 maskify(     "64607935616") ==      "#######5616"
 maskify(               "1") ==                "1"
 maskify(                "") ==                 ""

 // "What was the name of your first pet?"
 maskify("Skippy")                                   == "##ippy"
 maskify("Nananananananananananananananana Batman!") == "####################################man!"
 */

function maskify ( str ) {
	let result = "";
	const end = str.length - 4;

	if ( str.length < 4 || str === "" ) {
		return str;
	}

	for ( let i = 0; i < end; i++ ) {
		result += "#";
	}

	return `${ result }${ str.substr ( end, 4 ) }`;
}

// console.log(maskify("4556364607935616"));

/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/make-a-function-that-does-arithmetic
//
/* --------------------- |||| --------------------- */
function arithmetic ( a, b, action ) {
	let result = 0;

	switch ( true ) {
		case action === "add":
			result = a + b;
			break;
		case action === "subtract":
			result = a - b;
			break;
		case action === "multiply":
			result = a * b;
			break;
		case action === "divide":
			result = a / b;
			break;
		default:
			result = 0;
	}

	return result;
}

// console.log(arithmetic(5, 2, "divide"));
/*
 arithmetic(5, 2, "add")      => returns 7
 arithmetic(5, 2, "subtract") => returns 3
 arithmetic(5, 2, "multiply") => returns 10
 arithmetic(5, 2, "divide")   => returns 2.5
 */

/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/basic-js-calculating-averages
//
/* --------------------- |||| --------------------- */
function average () {
	const numbers = arguments;
	let sum = 0;

	for ( let i = 0; i < arguments.length; i++ ) {
		sum += arguments[i];
	}

	if ( sum === 0 ) {
		return 0;
	}

	return Math.ceil ( sum / arguments.length );
}

// console.log(average(3, 4, 5));

/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/whose-bicycle
//
/* --------------------- |||| --------------------- */

function whoseBicycle ( a, b, c ) {
	let result = "I need to buy a bicycle for my ";
	const total = {
		a: 0,
		b: 0,
		c: 0
	};

	for ( let i in a ) {
		total.a += a[i];
	}

	for ( let i in a ) {
		total.b += b[i];
	}

	for ( let i in a ) {
		total.c += c[i];
	}

	console.log ( total );

	switch ( true ) {
		case total.a > total.b && total.a > total.c:
			result += "first son.";
			break;
		case (total.b > total.a && total.b > total.c) ||
		(total.a === total.b && total.b > total.c):
			result += "second son.";
			break;
		case total.c > total.a && total.c > total.b:
			result += "third son.";
			break;
		default:
			result += "third son.";
	}

	return result;
}

const a = {
	algebra: 8,
	history: 7,
	physics: 8,
	geography: 9,
	chemistry: 10
};
const b = {
	algebra: 8,
	history: 7,
	physics: 8,
	geography: 9,
	chemistry: 10
};

const c = {
	algebra: 2,
	history: 5,
	physics: 5,
	geography: 9,
	chemistry: 10
};

// console.log(whoseBicycle(a, b, c));

/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/whose-bicycle
//
/* --------------------- |||| --------------------- */
function odds ( a = [] ) {
	if ( a.length === 0 ) {
		return [];
	}

	return a.reduce (
		( prev, curr ) => {
			if ( curr % 2 != 0 ) {
				prev.push ( curr );
			}
			return prev;
		},
		[],
		0
	);
}

// console.log(odds([2, 4, 6])); // []
// console.log(odds([1, 3, 5])); // [1, 3, 5]
// console.log(odds([1, 2, 3, 4, 5, 6])); // [1, 3, 5]

/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/523f5d21c841566fde000009/javascript
//
/* --------------------- |||| --------------------- */
function arrayDiff ( a, b ) {
	if ( a.length < b.length ) {
		return [];
	}

	const arr = [];

	a.forEach ( ( item, index ) => {
		if ( !b.includes ( a[index] ) ) {
			arr.push ( item );
		}
	} );

	return arr;
}

// console.log(arrayDiff([], [4,5])); // []
// console.log(arrayDiff([3,4], [3])); // [4]
// console.log(arrayDiff([1,8,2], [])); // [1,8,2]
// console.log(arrayDiff([1,2,3], [1,2])); // [3]
// console.log(arrayDiff([1, 2, 2], [1])); // [2]

/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/54cb61619b30e88e44001048/train/javascript
//
/* --------------------- |||| --------------------- */

/*
 Функция должна принимать два аргумента:
 аргумент: любой тип
 объект со свойствами:
 param: строковый тип.
 func: строковый тип.

 Эта строка представляет собой тело исполняемой функции
 Функция должна оценивать код строки, переданной как func, с параметром arg,
 переданным в качестве аргумента, и возвращать результат выполнения.
 */
function runYourString ( arg, obj ) {
	const f = new Function ( obj.param, obj.func );
	console.log ( f ( arg ) );
}

// runYourString(4, { param: 'num', func: 'return Math.sqrt(num)' });
// runYourString(true, {param: 'val', func: 'return val'})

/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/factorial-factory
//
/* --------------------- |||| --------------------- */
function factorial ( n ) {
	if ( n < 0 ) {
		return null;
	}

	let result = 1;

	for ( let i = 1; i <= n; i++ ) {
		result = result * i;
	}

	console.log ( result );
}

// factorial ( 2 ) // 2,
// factorial ( 5 ) // 120
// factorial ( -1 )// null


/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/recursion-101
//
/* --------------------- |||| --------------------- */
function solve ( a, b ) {
	let a1 = a;
	let b1 = b;

	if ( a === 0 || b === 0 ) {
		return [ a, b ];
	}

	if ( a >= 2 * b ) {
		a1 = a - 2 * b;
		return solve ( a1, b );
	}

	if ( b >= 2 * a ) {
		b1 = b - 2 * a;
		return solve ( a, b1 );
	}

	return [ a1, b1 ];
}

// console.log(solve ( 6, 19 )); // [6,7];
// console.log(solve(2,1)); // [0,1];
// console.log(solve(22,5)); // [0,1];
// console.log(solve(2,10)); // [2,2];

/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/decimal-to-binary-converter
//
/* --------------------- |||| --------------------- */
function decToBin ( d ) {
	// return Number(d).toString(2); // простое решение но нельзя использовать toString

	if ( d === 0 ) {
		return 0;
	}

	let number = d
	let result = []
	while ( number >= 1 ) {
		result.unshift ( Math.floor ( number % 2 ) )
		number = number / 2
	}

	return result.join ( '' )
}

// console.log(decToBin(0)); // '0'
// console.log(decToBin(1)); // '1'
// console.log(decToBin(2)); // '10'
// console.log(decToBin(3)); // '11'
// console.log ( decToBin ( 21 ) ); // '10101'
// console.log(decToBin(31)); // '11111'

/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/56d344c7fd3a52566700124b/train/javascript
//
/* --------------------- |||| --------------------- */
function add ( a ) {
	return ( b ) => {
		return a + b;
	}
}

// console.log(add(3)(4))  // 7
// console.log(add(12)(20)); // 32

/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/find-the-stray-number
//
/* --------------------- |||| --------------------- */
function stray ( numbers ) {
	let result = 0;

	for ( let i = 0; i < numbers.length; i++ ) {
		if ( numbers[i] !== numbers[i + 1] && numbers[i] !== numbers[i - 1] ) {
			result = numbers[i];
		}
	}
	return result;
}

// stray([1, 1, 2]) // ==> 2
// stray([17, 17, 3, 17, 17, 17, 17]) // ==> 3

/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/euclidean-distance-in-n-dimensions
//
/* --------------------- |||| --------------------- */
function euclideanDistance ( p1, p2 ) {

	// const a = p1[0] - p2[0];
	// const b = p1[1] - p2[1];
	// const c = p1[2] - p2[2];
	// const d = Math.sqrt ( a * a + b * b + c * c ).toFixed ( 2 );
	// console.log("?:", a, b, c, '=>', d);

	let x = [];

	for ( let i = 0; i < p1.length; i++ ) {
		x.push ( p1[i] - p2[i] );
	}

	let res = 0;

	for ( let i = 0; i < x.length; i++ ) {
		res += x[i] * x[i];
	}

	function isInteger ( num ) {
		return (num ^ 0) === num;
	}

	if ( isInteger ( Math.sqrt ( res ) ) ) {
		console.log ( Math.sqrt ( res ) );
	} else {
		console.log ( +Math.sqrt ( res ).toFixed ( 2 ) );
	}

	// console.log('x:', x, '=>', Math.sqrt(res).toFixed(2));
}

// euclideanDistance([-1], [2]); //  3
// euclideanDistance([2], [4]); //  2
// euclideanDistance ( [ -1, 2 ], [ 2, 4 ] ); // 3.61
// euclideanDistance([-1,2,5],[2,4,9]); // 5.39

/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/create-phone-number
//
/* --------------------- |||| --------------------- */
function createPhoneNumber ( numbers ) {
	const n = numbers;
	console.log ( `(${ n[0] }${ n[1] }${ n[2] }) ${ n[3] }${ n[4] }${ n[5] }-${ n[6] }${ n[7] }${ n[8] }${ n[9] }` )
}

// createPhoneNumber ( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ] ); // (123) 456-7890
// createPhoneNumber ( [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] ); // (111) 111-1111
// createPhoneNumber ( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ] ); // (123) 456-7890


/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/bubblesort-once
//
/* --------------------- |||| --------------------- */
function bubblesortOnce ( a ) {
	const arr = a;

	for ( let i = 0, endI = arr.length - 1; i < endI; i++ ) {
		if ( i < 1 ) {
			for ( let j = 0, endJ = endI - i; j < endJ; j++ ) {
				if ( arr[j] > arr[j + 1] ) {
					let swap = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = swap;
				}
			}
		}
	}

	console.log ( arr );
}

// bubblesortOnce ( [ 9, 7, 5, 3, 1, 2, 4, 6, 8 ] ); // [7, 5, 3, 1, 2, 4, 6, 8, 9]


/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/sort-with-arrow-functions
//
/* --------------------- |||| --------------------- */
const OrderPeople = function ( people ) {
	return people.sort ( ( a, b ) => {
		return a.age - b.age;
	} );
}
const people = [ { age: 83, name: 'joel' },
	{ age: 46, name: 'roger' },
	{ age: 99, name: 'vinny' },
	{ age: 26, name: 'don' },
	{ age: 74, name: 'brendan' } ];
// console.log(OrderPeople(people));

/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/whos-online
//
/* --------------------- |||| --------------------- */
const whosOnline = ( friends ) => {
	return friends.reduce ( ( prev, curr ) => {
		/*
		 Если кто-то есть, online но он lastActivity был более 10 минут назад, они должны быть рассмотрены away.
		 */

		if ( curr.lastActivity <= 10 && curr.status === "online" ) {
			if ( !prev.online ) {
				prev.online = [];
			}
			prev.online.push ( curr.username );
		}

		if ( curr.lastActivity > 10 && curr.status === "online" ) {
			if ( !prev.away ) {
				prev.away = [];
			}
			prev.away.push ( curr.username );
		}

		if ( curr.status === "offline" ) {
			if ( !prev.offline ) {
				prev.offline = [];
			}
			prev.offline.push ( curr.username );
		}

		return prev;
	}, {} );

}
const users = [ {
	username: 'David',
	status: 'online',
	lastActivity: 10
}, {
	username: 'Lucy',
	status: 'online',
	lastActivity: 22
}, {
	username: 'Bob',
	status: 'online',
	lastActivity: 104
} ]
// console.log ( whosOnline ( users ) );

/* --------------------- |||| --------------------- */
//
// https://www.codewars.com/kata/homogenous-arrays
//
/* --------------------- |||| --------------------- */
function filterHomogenous ( arrays ) {

	const newArr = [];
	let isArray = false;

	for ( let i = 0; i < arrays.length; i++ ) {
		const arr = arrays[i];

		if ( arr.length > 0 ) {
			const type = typeof arr[0];
			isArray = true;

			for ( let j = 0; j < arr.length; j++ ) {
				if ( typeof arr[j] !== type ) {
					isArray = false;
				}
			}

			if ( isArray ) {
				newArr.push ( arrays[i] );
			}

			isArray = false;
		}
		console.log ( 'newArr:', newArr );
	}

	return arrays;
}


// filterHomogenous ( [ [ 1,2 ], [ 'a', 2 ], [ 'b', 'c' ] ] ); // [[1,2], ['b', 'c]]
// filterHomogenous ( [ [ 1, 5, 4 ], [ 'a', 3, 5 ], [ 'b' ], [], [ '1', 2, 3 ] ] ); // [[1, 5, 4], ['b']]
// filterHomogenous ( [ [ 123, 234, 432 ], [ '', 'abc' ], [ '' ], [ '', 1 ], [ '', '1' ], [] ] ); // [[123, 234, 432], ['', 'abc'], [''], ['', '1']]
/*
 filterHomogenous ([
 ['d', 'o', 'k', 'g', 'n', 'h', 'c', 'z', 'i', 'j', 'o', 's', 'z', 'l', 'i'],
 [1, 0, 2, 2, 4, 3, 6, 3, 3, 7, 5, 5, 4, 1, 4],
 ['r', 9, 8, 7, 4, 4, 7, 5, 't', 'h', 'q', 'n', 'n', 'd'],
 [8, 6, 2, 6, 9, 3, 0, 5, 7, 2, 8, 5, 4, 6, 4],
 [8, 'k', 8, 8, 4, 3, 'h', 'v', 'i', 'd', 6, 'l', 's', 9],
 ['c', 'm', 'y', 'c', 's', 'x', 'z', 't', 'm', 'l', 'h', 'h', 'k', 'x', 'w'],
 ['d', 'n', 't', 's', 'n', 'o', 'k', 'y', 'k', 'q', 'r', 'o', 'o', 'k', 'p']
 ]);
 */

/* --------------------- |||| --------------------- */
//
// https://github.com/rolling-scopes-school/typical-arrays-problems/blob/master/README.md
//
/* --------------------- |||| --------------------- */
function min ( arr = [] ) {
	const data = arr;
	if ( arr.length === 0 ) {
		return 0;
	}

	let res = arr.sort ( function ( a, b ) {
		return a - b;
	} );

	console.log ( res );

	return res[0];
}

function max ( arr = [] ) {
	if ( arr.length === 0 ) {
		return 0;
	}

	let res = arr.sort ( function ( a, b ) {
		return b - a;
	} );

	return res[0];
}

function avg ( arr = [] ) {
	if ( arr.length === 0 ) {
		return 0;
	}

	let res = 0;

	for ( let i = 0; i < arr.length; i++ ) {
		res += arr[i];
	}

	return res / arr.length;
}

// min([1,-2,4,2]);
// min([2,-24,13,-11,16,-12,-16,24,13,-38,19,-16,19,3,2,32,0,-10,-19,-27]); // -38
// min ( 1, 2, 3, 4 ) // returns 1; //
// max ( 1, 2, 3, 4 ) // returns 4;
// avg ( 1, 2, 3, 4 ) // returns 2.5;


/* --------------------- |||| --------------------- */
//
// https://github.com/kasapvictor/morse-decoder
//
/* --------------------- |||| --------------------- */

const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode ( expr ) {
	const code = [ ...expr ];
	const codeArr = getCodeArr ( code );

	// перебираем весь массив codeArr
	// на каждой итерации получаем символ
	// объединяем все элементы через join()
	const phrase = codeArr.map ( item => {
		return getSymbol ( item );
	} ).join ( '' );

	// разбиваем код на слова
	// собираем массив с каждым словом - по 10 символов
	function getCodeArr ( code ) {
		const codeArr = [];

		for ( let i = 0; i < code.length; i += 10 ) {
			const part = code.slice ( i, i + 10 ).join ( '' );

			// обрезаем нули в начале каждого кода
			// и добавляем код(слово) в массив codeArr
			codeArr.push ( part.replace ( /^0+/, '' ) );
		}

		return codeArr;
	}

	// функция разбирает код и возвращает символ
	function getSymbol ( code ) {
		let out = '';
		const s1 = '.';
		const s2 = '-';
		const space = '**********';

		if ( code === space ) {
			return ' ';
		}

		for ( let i = 0; i < code.length; i += 2 ) {
			const part = [ ...code ].slice ( i, i + 2 ).join ( '' );

			if ( part === '10' ) {
				out += s1;
			} else {
				out += s2;
			}
		}

		console.log ( out )

		return MORSE_TABLE[`${ out }`];
	}

	return phrase;
}

let expr = '';
// 4 ....-
// 2 ..---
// decode ( '1010101011' );
// decode ( '1010111111' );
// decode ( '10101010111010111111' );
//"hello world";
// h .... 0010101010
// ----h---------e-----------l----------l----------o------__________-----w----------o----------r----------l----------d-----
// 0010101010 0000000010 0010111010 0010111010 0000111111 ********** 0000101111 0000111111 0000101110 0010111010 0000111010
// 0010101010
// decode ( '00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010' );
// decode('000000001100101010100000000010**********00111110110000101011000000101000111011100000111011**********00111010100000101110000011111100001011110000001110**********001010111000001111110011101011**********00101111110000101011000000111100101111100000101010**********0000111111001010101100000000100000101110**********000000001100101010100000000010**********0010111010000000101100111110100011101111**********000011101000001111110000111110');
// expr = "0000101110000011111100101110100010111010000000101000000011100000111110**********00001010100011101110000011111100101111100000000010**********000010101000111011100010101010000011111100001111110010111010";
// expr = "000000101100000011100000101010000010111100000000100000101110**********00001111110000001110**********000000001100101010100000000010**********00001010110010111010000000001100000010100000001111000000101100000000110000000010**********00111110110000101011000000001000001010100000000011000000101000001111110000001110**********00001111110010101110**********0010111010000000101000101011100000000010**********000000001100101010100000000010**********00001010110000001110000000101000101010110000000010000010111000001010100000000010**********000000101100000011100000111010**********0000000010001010101100000000100000101110001110111100000000110010101010000000101000000011100000111110**********00000010100000101010**********10101010111010111111";
// "answer on the ultimate question of life the universe and everything is 42";
// decode(expr);

/* --------------------- |||| --------------------- */
//
// https://github.com/kasapvictor/reverse-int
//
/* --------------------- |||| --------------------- */
function reverse ( n ) {

	const numbers = [ ...n.toString ().replace ( /\D/, '' ) ];
	console.log ( +numbers.reverse ().join ( '' ) );
}

// reverse(123); // 321
// reverse(233); // 332
// reverse(535); // 535
// reverse(95034); // 43059
// reverse(162); // 261
// reverse(-192); // 291
// reverse(-252); // 252
// reverse(170); // 71
// reverse(-251); // 152
// reverse(165); // 561
// reverse(-425); // 524
// reverse(535); // 535

/* --------------------- |||| --------------------- */
//
// Пример замыкания с условиями
//
/* --------------------- |||| --------------------- */
function makeFunc () {
	const name = "Mozilla";
	const lastname = "Chrome";

	function doing ( f = null ) {
		if ( f === 'displayName' ) {
			return displayName;
		}

		if ( f === 'displayLastName' ) {
			return displayLastName;
		}
	}

	function displayName () {
		console.log ( name );
	}

	function displayLastName () {
		console.log ( lastname );
	}

	return doing;
};

// const myFunc = makeFunc ();
// myFunc ( 'displayName' )();
// myFunc ( 'displayLastName' )();

