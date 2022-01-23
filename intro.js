/* ----------------------- 12 ------------------------ */
function isPrime ( n ) {
	if ( n <= 0 ) return false;

	function getMin ( n ) {
		for ( let i = n; i > 0; i-- ) {
			if ( n % i === 0 && i !== n ) {
				console.log ( i )
				return i;
			}
		}
	}

	return getMin ( n ) === 1;
}

// 4, 21, 35 false
// 2, 3, 17 true
// console.log ( "---: ", isPrime ( "35" ) );

/* ----------------------- 15 ------------------------ */
function square ( n ) {
	return n ** 2;
}

function sumOfSquares ( a, b ) {
	return square ( a ) + square ( b );
}

function squareSumOfSquares ( a, b ) {
	return sumOfSquares ( a, b ) ** 2;
}

// console.log(squareSumOfSquares(-3, 7));

/* ----------------------- 16 ------------------------ */
const bigLettersCount = ( str ) => {
	let count = 0;
	[ ...str ].forEach ( i => {
		if ( i.toUpperCase () === i ) {
			count++;
		}
	} );

	return count;
};

const compare = ( first, second ) => {
	const firstCount = bigLettersCount ( first );
	const secondCount = bigLettersCount ( second );

	if ( firstCount > secondCount ) {
		return 1;
	}

	if ( firstCount < secondCount ) {
		return -1;
	}

	return 0;
};

const greaterThan = ( first, second ) => (compare ( first, second ) === 1);
const lessThan = ( first, second ) => (compare ( first, second ) === -1);
const isEqual = ( first, second ) => (compare ( first, second ) === 0);

const str1 = "ASDF";
const str2 = "QWER";
// console.log ('greaterThan: ', greaterThan ( str1, str2 ) );
// console.log ( 'lessThan: ', lessThan ( str1, str2 ) );
// console.log ( 'isEqual: ', isEqual ( str1, str2 ) );


/* ----------------------- 17 ------------------------ */
const addDigits = ( n ) => {
	let result = 0;

	if ( n <= 9 ) {
		result = n;
	} else {
		const num = n.toString ();

		for ( let i = 0; i < num.length; i++ ) {
			result += +num[i];
		}

		if ( result > 9 ) {
			result = addDigits ( result );
		}
	}

	return result;
}

// console.log ( addDigits ( 999999999999 ) );

/* ----------------------- 18 ------------------------ */
const solution = ( str ) => {
	let result = '';

	for ( let i = 0; i < str.length; i++ ) {
		if ( str[i - 1] === ' ' ||
			!str[i - 1] &&
			 str[i].toUpperCase () === str[i].toUpperCase ()
		) {
			result += str[i].toUpperCase ();
		} else {
			result += str[i];
		}
	}

	return result;
}
// 'hello, world!' -> 'Hello, World!'
// '  hello,   world!' ->'  Hello,   World!'
// ' many different words inside sentence' -> ' Many Different Words Inside Sentence'
// console.log ( solution ( ' many different words inside sentence' ) );


