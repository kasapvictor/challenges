// удаляем пробелы
function removeSpace ( str ) {
	return str.replace ( /\s/ig, '' );
}

// проверка на парные скобки
function checkBrackets ( str ) {
	// получаем все скобки
	const brackets = str.match ( /[\(\)]/gm );

	if ( brackets ) {
		return brackets.reduce ( ( prev, curr ) => {
			if ( curr === '(' ) {
				return prev + 1;
			}

			if ( curr === ')' ) {
				return prev - 1;
			}

			return prev;
		}, 0 );
	}

	return 0;
}

// функция считает длинные значения сложения и вычитания 2+3+3+2-4
function calc ( expr ) {

	let chars = `${ expr }`.split ( "" );
	let n = [];
	let op = [];
	let index = 0;
	let oplast = true;

	n[index] = "";

	// Parse the expression
	for ( let i = 0; i < chars.length; i++ ) {
		if ( isNaN ( +chars[i] ) && chars[i] !== "." && !oplast ) {
			op[index] = chars[i];
			index++;
			n[index] = "";
			oplast = true;
		} else {
			n[index] += chars[i];
			oplast = false;
		}
	}

	// Calculate the expression
	expr = +n[0];
	for ( let i = 0; i < op.length; i++ ) {
		let num = +n[i + 1];
		switch ( op[i] ) {
			case "*":
				// console.log ( "****************", expr, num, expr * num )
				expr = expr * num;
				break;
			case "/":
				// console.log ( "////////////////", expr, num, expr / num )
				expr = expr / num;
				break;
			case "+":
				// console.log ( "+++++++++++++++", expr, num, expr + num )
				expr = expr + num;
				break;
			case "-":
				// console.log ( "---------------", expr, num, expr - num )
				expr = expr - num;
				break;
		}
	}

	if ( expr === Infinity ) {
		throw 'TypeError: Division by zero.';
	} else {
		return expr;
	}
}

// проверяет наличие * и /
function hasMulDev ( str ) {
	const re = /((^-)?((?<=[-+*(\/])-)?\d+(\.\d+)?)[\*\/](((?<=[-+*(\/])-)?\d+(\.\d+)?)/gm;
	return str.match ( re );
}

// считает умножение и деление
const replaceMulDev = ( expression ) => {
	let exp = expression;
	const isMulDev = hasMulDev ( exp );

	if ( isMulDev ) {
		isMulDev.forEach ( item => {

			console.log ( { exp, isMulDev, item, calc: calc ( item ) } );


			exp = `${ exp }`.replace ( item, calc ( item ) );

			console.log ( { exp, item, calc: calc ( item ) } );

			if ( hasMulDev ( exp ) ) {
				exp = replaceMulDev ( exp );
			}
		} );
	}

	// console.log('------------------------------------------------------------');
	// console.log({exp, result:exp, calc: calc(exp)});
	// console.log('------------------------------------------------------------');

	return calc ( exp );

	// const has = hasMulDev ( exp );
	//
	// // console.log ( { exp, hasMuDev } );
	//
	// if ( has ) {
	// 	const res = has.reduce ( ( prev, curr ) => {
	// 		prev[curr] = calc ( curr );
	// 		return prev;
	// 	}, {} );
	//
	// 	for ( let key in res ) {
	// 		exp = exp.replace ( key, res[key] );
	// 	}
	// }
	//
	// console.log ( { nohas: "* or /", exp, has:has } );
	//
	// return calc(exp);
}

// проверка на число или точку
const isNumber = ( s ) => {
	return !isNaN ( +s ) || s === '.' ? 1 : 0;
}

// вытаскивает последний оператор и кладет его в стек вывода
function moveOperation ( order, out, operation, current ) {
	out.push ( operation.pop () );

	if ( order[current] <= order[operation[operation.length - 1]] ) {
		moveOperation ( order, out, operation, current )
	} else {
		operation.push ( current );
	}
}

// парсинг
function expressionCalculator ( expression ) {
	console.log ( { expression } );

	if ( checkBrackets ( expression ) !== 0 ) {
		throw 'Brackets must be paired';
	}

	const e = [ ...removeSpace ( expression ) ];
	const order = { '*': 2, '/': 2, '+': 1, '-': 1 };
	const out = [];
	let operation = [];
	let res = [];

	/**
	 * Собираем всю строку в массив разделенный символами
	 */
	const expressionArray = e.reduce ( ( prev, curr, index ) => {
		if ( isNumber ( curr ) // добавить в массив если число
			|| (
				curr === '-' // если знак минус
				&& !isNumber ( e[index - 1] ) // и предыдущее значение не число
				&& e[index - 1] !== ')' // и предыдущее значение скобка
			)
		) {
			operation.push ( curr );
			if ( e[index + 1] === undefined ) { // если следующий элемент = undefined
				if ( operation.length > 0 ) {  // добавить последнее значение в массиве branch в prev
					prev.push ( operation.join ( '' ) );
				}
				operation.splice ( 0, operation.length ); // очистить массив branch
			}
		} else {
			if ( operation.length > 0 ) { // добавить  содержимое branch в prev
				prev.push ( operation.join ( '' ) );
			}
			operation.splice ( 0, operation.length ); // очистить массив branch
			prev.push ( curr ); // добавить текущий символ в prev
		}

		return prev;
	}, [] );

	/**
	 * собираем последовательность символов по логике обратной польской нотации
	 * стек выхода  out
	 * стек операций operation
	 */
	for ( let i = 0; i < expressionArray.length; i++ ) {
		const current = expressionArray[i];
		const lastOp = operation[operation.length - 1];

		if ( isNumber ( current ) ) {
			out.push ( current );
		}

		if ( !isNumber ( current ) ) {
			switch ( true ) {
				case current === ')':
					let start = 0;

					// находим последнюю скобку '(' в массиве operation
					for ( let j = 0; j < operation.length; j++ ) {
						if (operation[j] === '(') {
							start = j;
						}
					}

					console.log({start, operation})
					const end = operation.length;
					const tail = operation.splice ( start, end );
					tail.reverse ();
					tail.pop ();
					out.push ( ...tail );
					break;

				case order[current] <= order[lastOp] :
					moveOperation ( order, out, operation, current );
					break;

				default:
					operation.push ( current );
			}
		}

		// пошаговые действия
		// console.log ( { order: [current, order[current], lastOp, order[lastOp] ], compare: [current, '<=', lastOp, order[current] <= order[lastOp]], out, operation } );
	}

	/**
	 * объединение двух массивов
	 * очищаем массивы out и operation
	 */
	const notation = [ ...out, ...operation.reverse () ];
	out.splice ( 0, out.length );
	operation.splice ( 0, operation.length );

	/**
	 * считаем все выражения из notation
	 */
	for ( let i = 0; i < notation.length; i++ ) {

		 const current = notation[i];
		 let a;
		 let b;

		 if ( isNumber ( current ) ) {
		 res.push ( current );
		 } else {
		 a = res[res.length - 2];
		 b = res[res.length - 1];
		 const r = calc ( `${ a }${ current }${ b }` );
		 res.splice ( res.length - 2, 2, r );
		 }

		 // console.log({ expression, notation: notation.join ( ' ' ), current, a, b, res });
	}

	console.log ( { res, notation: notation.join ( ' ' ) } );
	return res[0];
}

/*
 49 * 63 / 58 * 36 // 1916.0690
 84 + 62 / 33 * 10 + 15 // 117.7879
 48 + 59 * 86 * 92 * 2 // 933664
 16 + 25 - 92 + 54 / 66 // -50.1818
 99 * 55 / 30 + 50 // 231.5000
 20 - 57 * 12 - (  58 + 84 * 32 / 27  ) // -821,5555555556
 77 + 79 / 25 * (  64 * 63 - 89 * 14  ) * 49 // 431461.2400
 100 - 60 / 38 + (  19 / 88 * 97 / 82 / 94  ) * 92 // 98.6710
 57 - 71 + (  14 + 3 - 24 * 100 / 23  ) / 53 // -101,347826087
 (  38 + 52 + 65 - 19  ) * (  72 * 3 / 36 * (  9 / 2 - 17 * 38 / 28  )  ) / 18 / 84 // -10.0227
 93 * 30 / 81 * (  78 * 83 / (  71 * 13 - (  14 + 13 - 28 * 62  ) * 62  ) + 99 - (  80 - 89 + 17 * 42  )  ) // -20871.2470
 (  93 * 79 / (  24 + 83 / (  11 * 45 / 21 * (  (  75 - 15 - (  60 + 94 / (  70 - 27 - 89 + 71  ) - 81  ) * 27 - 73  ) * 92 - 59 - 57  ) + 13  ) * 84 * 49  ) / 22  ) * 27 / 62 + 76 // 81.9728
 20 * 60 + 9 - (  89 * 95 * 3 * (  44 - 51 - 11 - (  62 + 69 - 22 + 21  ) * 9  ) / 50  ) - (  94 - 70 / 29 / 7  ) // 603787.7448
 (  6 + 28 + 18 - (  (  61 + 17 * 64 * 98  ) * (  61 / 53 * 47 / 36 * 98  ) + 82 + (  69 - 55 / (  62 * 77 / 88 - 52 / 10  ) - 42 - (  48 / 84 * 77 + 40 - 13  )  )  )  ) - 4 / 99 // -15710078.0585
 59 - 13 + (  25 * 22 / (  47 / 38 * (  64 / 93 - 91 + 72  ) * 66  ) + 43 - 5  ) * 39 / 55 // 72.6846
 */
// expression1 = "20.5 - 57 * -12 - (  -58 + 84 * 32 / 27  ) - 15"; // 647,9444444444
expression1 = "(  6 + 28 + 18 - (  (  61 + 17 * 64 * 98  ) * (  61 / 53 * 47 / 36 * 98  ) + 82 + (  69 - 55 / (  62 * 77 / 88 - 52 / 10  ) - 42 - (  48 / 84 * 77 + 40 - 13  )  )  )  ) - 4 / 99"; //
console.log ( 'RESULT::933664::', expressionCalculator ( expression1 ) );

