const sumSquareDifference = (n) => {
	let result = 0;
	let sumSquare = 0;
	let square = 0;

	for ( let i = 0; i <= n; i++ ) {
		sumSquare += i ** 2;
	}

	for ( let i = 0; i <= n; i++ ) {
		square += i;
	}

	square = square ** 2;

	console.log('sumSquare: ', sumSquare);
	console.log('square: ', square);
	console.log('square - sumSquare: ', square - sumSquare);
}

sumSquareDifference(10);