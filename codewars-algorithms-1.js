/* --------------------- |||| ---------------------

 https://www.codewars.com/kata/matrix-creation

 --------------------- |||| --------------------- */
/**
 * getMatrix(1), [[1]]
 * getMatrix(2), [
 * [1, 0],
 * [0, 1]
 * ]
 * getMatrix(5), [
 * [1, 0, 0, 0, 0],
 * [0, 1, 0, 0, 0],
 * [0, 0, 1, 0, 0],
 * [0, 0, 0, 1, 0],
 * [0, 0, 0, 0, 1]
 * ]

 (1)  =>  [
 [1]
 ]

(2) => [
 [1,0],
 [0,1]
 ]

 (5) => [
 [1,0,0,0,0],
 [0,1,0,0,0],
 [0,0,1,0,0],
 [0,0,0,1,0],
 [0,0,0,0,1]
 ]
 */
function getMatrix ( number ) {
	const arr = new Array ( number ).fill (
		new Array ( number ).fill ( 0 )
	);
	let count = 0;

	const newArr = arr.reduce ( ( prev, curr, index ) => {
		const copy = [ ...curr ];

		copy[count] = 1;

		prev.push ( copy );

		count++;

		return prev
	}, [] );

	return newArr;

}

// console.log(getMatrix ( 1 ));


/* --------------------- |||| ---------------------

 https://www.codewars.com/kata/basics-04-rotate-matrix

 --------------------- |||| --------------------- */

/*
 Input: {{-1, 4, 5},
 { 2, 3, 4}}

 Output: {{ 5, 4},
 { 4, 3},
 {-1, 2}}

 >>> [ [-1,4,5], [2,3,4] ]
 <<< [ [5,4], [4,3], [-1,2] ]
 */
function rotateMatrix ( arr ) {
	const length = ( a ) => a.length;
	let a = [];
	const b = [];

	for ( let i = 0; i < length ( arr[0] ); i++ ) {

		for ( const k in arr ) {
			a.push ( arr[k][i] );
		}

		b.push ( a );
		a = [];
	}

	return b.reverse ();
}

/*
 [
 [ 81, 58, -65, 96, 3, -65 ],
 [ 2, 49, -71, 59, 44, 114 ],
 [ 87, -17, -120, 26, 70, -109 ],
 [ -91, 117, 30, 78, 32, -118 ],
 [ -85, -106, -5, 83, 25, -123 ],
 [ -8, -110, -15, -75, 100, -19 ],
 [ -19, 73, 27, -65, 63, 122 ]
 ]

 <<<
 [
 [-65, 114, -109, -118, -123, -19, 122],
 [3, 44, 70, 32, 25, 100, 63],
 [96, 59, 26, 78, 83, -75, -65],
 [-65, -71, -120, 30, -5, -15, 27],
 [58, 49, -17, 117, -106, -110, 73],
 [81, 2, 87, -91, -85, -8, -19]
 ]
 */
const arr1 = [ [ -1, 4, 5 ], [ 2, 3, 4 ] ];
const arr2 = [
	[ 81, 58, -65, 96, 3, -65 ],
	[ 2, 49, -71, 59, 44, 114 ],
	[ 87, -17, -120, 26, 70, -109 ],
	[ -91, 117, 30, 78, 32, -118 ],
	[ -85, -106, -5, 83, 25, -123 ],
	[ -8, -110, -15, -75, 100, -19 ],
	[ -19, 73, 27, -65, 63, 122 ]
];
// console.log ( rotateMatrix ( arr1 ) );


/* --------------------- |||| ---------------------

 https://www.codewars.com/kata/convert-hash-to-an-array

 --------------------- |||| --------------------- */
function convertHashToArray ( hash ) {
	const o = Object.entries ( hash );
	return o.sort ();
}

// const hash = {name: 'Jeremy', age: 24, role: 'Software Engineer'};
//[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
// const hash = {name: "Jeremy", age: 24};
// console.log(convertHashToArray(hash))


/* --------------------- |||| ---------------------

 https://www.codewars.com/kata/array-dot-diff

 --------------------- |||| --------------------- */
function arrayDiff ( a, b ) {
	const out = [];
	for ( const i in a ) {
		console.log ( b.includes ( a[i] ) );
		if ( !b.includes ( a[i] ) ) {
			out.push ( a[i] );
		}
	}

	console.log ( out );
	return out;
}

const aDiff = [ 1, 2 ];
const bDiff = [ 1 ]
// console.log ( arrayDiff ( aDiff, bDiff ) ); // 2

/* --------------------- |||| ---------------------

 https://www.codewars.com/kata/element-equals-its-index

 --------------------- |||| --------------------- */
function indexEqualsValue ( a ) {
	let out = -1;

	// 1
	// let count = 0;
	// for ( const i in a ) {
	// 	console.log ( i, a[i], a[i] === count );
	// 	if ( a[i] === count ) {
	// 		out = count;
	// 		break;
	// 	}
	// 	count++;
	// }

	// 2
	// out = a.find((item, index) => {
	// 	return item === index;
	// });
	// console.log(out);
	// return out || out === 0 ? out : -1;

	// 3
	// let i = 0
	// while ( a[i] <= i ) {
	// 	if (a[i] === i) {
	// 		out = i
	// 		break
	// 	}
	//
	// 	i += 1
	// }

	// 4
	// const d = a.findIndex((item, index) => {
	// 	if (item === index) {
	// 		return item === 0 ? '0' : -1;
	// 	}
	// });
	// console.log(d);
	// console.log( d > -1 || d === 0 ? d : -1);

	let first = 0;
	let last = a.length - 1;
	let position = -1;
	let middle;

	while (first <= last) {
		middle = Math.floor ( (first + last) / 2 );

		if ( a[middle] === middle ) {
			position = middle;
			last = middle - 1;
		} else if ( a[middle] > middle ) {
			last = middle - 1;
		} else {
			first = middle + 1;
		}
	}
	return a[position] ?? position;
}

// [-8,0,2,5] >>> 2
// [-1,0,3,6] >>> -1
// [-3,0,1,3,10] >>> 3
// [-5, 1, 2, 3, 4, 5, 7, 10, 15] >>> 1
// [9,10,11,12,13,14] >>> -1
// [0] >>> 0
// const input = [-5, 1, 2, 3, 4, 5, 7, 10, 15]; // 1
// console.log ( indexEqualsValue ( input ) )
