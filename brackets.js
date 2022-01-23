function hasPare ( expr ) {
	const OPEN = [ '(', '[', '{', '1', '3', '5' ];
	const CLOSE = {
		')': '(',
		'}': '{',
		']': '[',
		'2': '1',
		'4': '3',
		'6': '5'
	}
	let str = [ ...expr ];
	let stack = [];

	for ( let i in str ) {
		const curr = str[i];
		console.log ( '---0---', { curr, CLOSE: CLOSE[curr], stack } );

		if ( OPEN.includes ( curr ) || (curr === '|' || curr === '7' || curr === '8') && !stack.includes ( curr ) ) {
			stack.push ( curr );
			console.log ( '---1---', { curr, CLOSE: CLOSE[curr], stack } );
		} else {
			if ( stack.length === 0 ) {
				console.log ( '---2---', { curr, CLOSE: CLOSE[curr], stack } );
				return false;
			}
			const prev = stack[stack.length - 1];
			console.log ( '---3---', { curr, prev, CLOSE: CLOSE[curr], stack } );

			if ( CLOSE[curr] === prev || (curr === "|" || curr === "7" || curr === "8") ) {
				console.log ( '---4---', { curr, prev, CLOSE: CLOSE[curr], stack } );
				stack.pop ();
			} else {
				console.log ( '---5---', { curr, prev, CLOSE: CLOSE[curr], stack } );
				return false;
			}
		}
	}

	return stack.length === 0;
}

function check ( str, conf ) {
	const b = conf;
	const a = [ ...str ];
	const stack = [];
	const getIdx = ( el ) => {
		let out = -1;
		for ( const i in b ) {
			if ( b[i].indexOf ( el ) > -1 ) {
				out = { i, idx: b[i].indexOf ( el ) };
				break;
			}
		}
		return out;
	}

	for ( const i in a ) {
		const curr = a[i];
		const prev = stack[stack.length - 1];
		const currN = getIdx ( curr ).i;
		const prevN = getIdx ( prev ).i;
		const currIdx = getIdx ( curr ).idx;
		const prevIdx = getIdx ( prev ).idx;

		if ( currIdx === 1 && currN !== prevN ) {
			console.log ( 'false', { c: [ currN, currIdx, curr ], p: [ prevN, prevIdx, prev ], stack } );
			return false;
		}

		if ( currIdx === prevIdx && currN === prevN ) {
			stack.pop ();
		} else if ( prevIdx === 0 && currIdx === 1 ) {
			console.log ( 'pop', { c: [ currN, currIdx, curr ], p: [ prevN, prevIdx, prev ], stack } );
			stack.pop ();
		} else if ( curr === prev || !stack.includes[curr] ) {
			console.log ( 'push', { c: [ currN, currIdx, curr ], p: [ prevN, prevIdx, prev ], stack } );
			stack.push ( curr );
		}

		console.log ( 'END', stack.length === 0, { c: [ currN, currIdx, curr ], p: [ prevN, prevIdx, prev ], stack } );

	}
}

// check("()", [["(", ")"]]); // -> true OK
// check('((()))()', [['(', ')']]) // -> true OK
// check('(())(', [['(', ')']]) // -> false OK
// check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true OK
// check ( '[(])', [ [ '(', ')' ], [ '[', ']' ] ] ) // -> false
// check('[]()', [['(', ')'], ['[', ']']]) // -> true
// check('[]()(', [['(', ')'], ['[', ']']]) // -> false
// check ( '||', [ [ '|', '|' ] ] ) // -> true
// check('|()|', [['(', ')'], ['|', '|']]) // -> true
// check('|(|)', [['(', ')'], ['|', '|']]) // -> false
check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true

/*
 const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
 '|()|' true
 '|(|)' false
 '|()|(||)||' true
 '111115611111111222288888822225577877778775555666677777777776622222' true
 '5555512575557777777555566667888888667661133833448441111222233333444442266666' false
 '8888877878887777777888888887777777887887788788887887777777788888888887788888' false
 '111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222' false
 '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()' false
 '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())' true
 '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))' true


 */
