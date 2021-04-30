
// Create array for Order of Operation and precedence
var operators = [['*', '/'],
['+', '-']];

function compute(expression) {
	// TODO - write method definition here
	var output;

	// loop through the operators array
	for (var i = 0, n = operators.length; i < n; i++) {

		/*
		 * Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n
		 * Regex to find number, operator, number ($1 , $2 , $3)
		 * (\\d+\\.?\\d*) = any digit           --> RegExp.$1
		 * ([\\''*'\\'/'\\'+'\\'-''])           --> RegExp.$2
		 * (\\d+\\.?\\d*) = any digit           --> RegExp.$3
		 * 
		 * Source: https://stackoverflow.com/questions/9011524/regex-to-check-whether-a-string-contains-only-numbers
		 *  The "\d+" matches a digit (\d) one or more times.
			The "\.?" is the decimal point (escaped with "\" to devoid it of its magic), zero or one times.
			The last part "\d*" is again a digit, zero or more times.
			All the parts are optional but the first digit, so this group matches numbers like 5. and not .5 which are matched by the other half.
		 */
		var regex = new RegExp('(\\d+\\.?\\d*)([\\' + operators[i].join('\\') + '])(\\d+\\.?\\d*)');
		regex.lastIndex = 0;

		//loop to each expression (start with * or / then + or -)
		while (regex.test(expression)) {

			output = calculate(RegExp.$1, RegExp.$2, RegExp.$3);

			if (isNaN(output) || !isFinite(output)) { // exit early if not a number
				return output;
			}

			expression = expression.replace(regex, output);
		}
	}

	return output;

}
function calculate(a, op, b) {
	//turn into int
	a = a * 1;
	b = b * 1;
	switch (op) {
		case "+":
			return a + b;
			break;
		case "-":
			return a - b;
			break;
		case "/":
			return a / b;
			break;
		case "*":
			return a * b;
			break;
		default:
			null;
	}
}