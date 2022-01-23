function towelSort ( matrix ) {

	let count = 1;
	const out = [];

	for ( const i in matrix ) {
		if ( count % 2 === 0 ) {
			matrix[i].reverse();
		}

		out.push(matrix[i]);

		count++;
	}

	console.log(out.flat(2));
	return out.flat(2);
}

// [ 1, 2, 4, 3 ]
// const matrix = [
// 	[ 1, 2 ],
// 	[ 3, 4 ],
// ];



 // [ 1, 2, 3, 6, 5, 4, 7, 8, 9 ]
 // const matrix = [
 // [1, 2, 3],
 // [4, 5, 6],
 // [7, 8, 9],
 // ];



 // [ 1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12, 16, 15, 14, 13 ]
 // const matrix = [
 // [1, 2, 3, 4],
 // [5, 6, 7, 8],
 // [9, 10, 11, 12],
 // [13, 14, 15, 16],
 // ];



 // [ 1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12,]
 const matrix = [
 [1, 2, 3, 4],
 [5, 6, 7, 8],
 [9, 10, 11, 12],
 ];


towelSort ( matrix );
