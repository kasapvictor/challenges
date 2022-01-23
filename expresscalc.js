const OPERATORS = {
	'+': {
		priority: 1,
		eval: (x, y) => x + y
	},
	'-': {
		priority: 1,
		eval: (x, y) => x - y
	},
	'*': {
		priority: 2,
		eval: (x, y) => x * y
	},
	'/': {
		priority: 2,
		eval: (x, y) => {
			if (y == 0) {
				throw new Error("TypeError: Division by zero.")
			}
			return x / y;
		}
	},
	'(': {
		priority: 3
	},
	')': {
		priority: 3
	}
};

function expressionCalculator(expr) {
	if (!isBracketsOk(expr)) {
		throw new Error("ExpressionError: Brackets must be paired")
	}

	let queue = toReversePolishNotation(expr).reverse();
	let stack = [];

	while (queue.length) {
		let item = queue.pop()
		if (typeof(item) === 'number') {
			stack.push(item)
		}
		else {
			let y = stack.pop();
			let x = stack.pop()
			let result = OPERATORS[item].eval(x, y);
			stack.push(result)
		}
	}

	return stack[0];
}

function isBracketsOk(expr) {
	let str = expr.split('');
	let stack = []
	for (let item of str) {
		if (item == '(') {
			stack.push(item);
		}
		else {
			if (item != ')') {
				continue
			}
			if (stack.length == 0) {
				return false;
			}
			else (stack.pop())
		}
	}
	return stack.length == 0;
}

function toReversePolishNotation(expr) {
	expr = expr.split('');
	let operands = [];
	let stack = [];
	let previous = '';

	for (let item of expr) {

		if (item === ' ') {
			continue
		}

		if (OPERATORS[item]) {
			let lastInStack = '';
			if (stack.length) {
				lastInStack = stack[stack.length - 1];
			}
			if (previous) {
				operands.push(+previous);
				previous = ''
			}

			if (!stack.length) {
				stack.push(item)
			}

			else if (OPERATORS[item].priority < 3) {
				if (stack.length == 0) {
					stack.push(item);
				}
				else {
					if (OPERATORS[item].priority <= OPERATORS[lastInStack].priority && lastInStack != '(') {
						operands.push(stack.pop());
						lastInStack = stack[stack.length - 1];

						if (stack.length && OPERATORS[item].priority <= OPERATORS[lastInStack].priority &&
							lastInStack != '(') {
							operands.push(stack.pop());
						}

						stack.push(item)
					}
					else {
						stack.push(item)
					}
				}
			}
			else if (item == '(') {
				stack.push(item)
			}
			else {
				stack.push(item);

				let openingBracketIndex = stack.lastIndexOf('(');
				let closingBracketIndex = stack.indexOf(')');

				for (let j = closingBracketIndex - 1; j > openingBracketIndex; j--) {
					operands.push(stack[j])
				}

				stack.splice(openingBracketIndex, closingBracketIndex - openingBracketIndex + 1)
			}
		}
		else {
			previous += item;
		}
	}

	if (previous) {
		operands.push(+previous);
		previous = '';
	}

	operands.push(...stack.reverse())
	stack = []
	return operands;
}

