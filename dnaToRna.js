/*
 G -> C
 C -> G
 T -> A
 A -> U
 dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
 dnaToRna('CCGTA'); // 'GGCAU'
 dnaToRna(''); // ''
 dnaToRna('ACNTG'); // null
 */
const dnaToRna = ( str ) => {
	let result = '';

	if ( str === '' ) return '';

	for ( let i = 0; i < str.length; i++ ) {
		switch ( true ) {
			case str[i] === 'G':
				result += 'C'
				break;
			case str[i] === 'C':
				result += 'G'
				break;
			case str[i] === 'T':
				result += 'A'
				break;
			case str[i] === 'A':
				result += 'U'
				break;
			default:
				return null;
		}
	}
	return result;
}

console.log ( dnaToRna ( 'ACNTG' ) )