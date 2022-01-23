const reverseInt = ( num ) => {
	let result = '';
	const str = `${ num }`;

	if ( str[0] === '-' ) result += '-';

	for ( let i = str.length - 1; i >= 0; i-- ) {
		if ( !isNaN ( +str[i] ) && +str[i] !== 0 ) {
			result += str[i];
		}
	}

	return result;
}

console.log ( reverseInt ( -123 ) ); // 13 -> 31, -123 -> -321, 8900 -> 98