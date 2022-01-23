const CONFIG = {
	size: 9,
	sector: 3
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 * https://stackoverflow.com/a/1527820/2124254
 */
function randomInt ( min, max ) {
	min = Math.ceil ( min );
	max = Math.floor ( max );
	return Math.floor ( Math.random () * (max - min + 1) ) + min;
}

// пустая матрица
const emptyMatrix = () => {
	return new Array ( CONFIG.size ).fill ( 0 ).reduce ( ( prev, curr ) => {
		curr = [ ...new Array ( CONFIG.size ).fill ( 0 ) ];
		prev = [...prev, curr];
		return prev;
	}, [] );
}

// возвращает пустые позиции [строк, колонка]
const findEmpty = ( matrix ) => {
	for ( let r = 0; r < CONFIG.size; r++ ) {
		for ( let c = 0; c < CONFIG.size; c++ ) {
			if ( matrix[r][c] === 0 ) {
				return [ r, c ];
			}
		}
	}
	return null;
}

// проверяет можно ли поставить цифру
const valid = ( num, pos, matrix ) => {
	const [ r, c ] = pos;

	// rows
	for ( const i in matrix ) {
		if ( matrix[i][c] === num && i !== r ) {
			return false;
		}
	}

	// cols
	for ( const i in matrix ) {
		if ( matrix[r][i] === num && i !== c ) {
			return false;
		}
	}

	// sector
	const sectorRow = Math.floor ( r / CONFIG.sector ) * CONFIG.sector;
	const sectorCol = Math.floor ( c / CONFIG.sector ) * CONFIG.sector;

	for ( let i = sectorRow; i < sectorRow + CONFIG.sector; i++ ) {
		for ( let j = sectorCol; j < sectorCol + CONFIG.sector; j++ ) {
			if ( matrix[i][j] === num && i !== r && j !== c ) {
				return false;
			}
		}
	}

	return true;
}

// частично заполняет массив матрицы
const fillMatrix = () => {
	const matrix = emptyMatrix();

	for ( let r = 0; r < CONFIG.size; r++ ) {
		const currentPos = findEmpty ( matrix );
		const currentNum = randomInt ( 1, CONFIG.size );

		if ( currentPos !== null ) {
			const isValid = valid ( currentNum, currentPos, matrix );
			const [ x, y ] = currentPos;

			if ( isValid ) {
				matrix[x][y] = currentNum;
			}
		}
	}

	return matrix;
}

// заполняет всю матрицу на основе fillMatrix
function solveMatrix () {
	const matrix = fillMatrix(); // частично заполняет массив матрицы
	const size = CONFIG.size;


	const solve = () => {
		const currentPos = findEmpty ( matrix );

		if ( currentPos === null ) {
			return true;
		}

		for ( let i = 1; i <= size; i++ ) {
			const currentNum = i;
			const isValid = valid ( currentNum, currentPos, matrix );

			if ( isValid ) {
				const [ x, y ] = currentPos;
				matrix[x][y] = currentNum;

				if ( solve () ) {
					return true;
				}

				matrix[x][y] = 0;
			}
		}
		return false;
	}

	solve ();

	return matrix;
}


CONFIG.matrix = solveMatrix ();

console.table(CONFIG.matrix);
console.table(CONFIG.matrix);
console.table(CONFIG.matrix);






