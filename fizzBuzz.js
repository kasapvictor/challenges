const fizzBuzz = ( a, b ) => {
	for ( let i = a; i <= b; i++ ) {
		if (  i % 3 === 0 && i % 5 === 0) {
			console.log ( 'FizzBuzz' );
		} else if ( i % 3 === 0) {
			console.log ( 'Fizz' );
		} else if ( i % 5 === 0 ) {
			console.log ( 'Buzz' );
		} else {
			console.log(i);
		}
	}
}
fizzBuzz ( 11, 20 );
