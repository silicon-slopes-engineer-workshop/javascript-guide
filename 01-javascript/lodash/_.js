const _ = {
	clamp(number, lower, upper) {
		const lowerClampedValue = Math.max(number, lower);
		const clampedValue = Math.min(lowerClampedValue, upper);
		return clampedValue;
	},
	
	inRange(number, start, end) {
		if (end == null || end == undefined) {
			end = start;
			start = 0;
		}
		if (start > end) {
			let temp = start;
			start = end;
			end = temp;
		}
		if (number < start || number >= end) {
			return false;
		} else {
			return true;
		}
	},

	words(string) {
		let words = string.split(' ');
		return words;
	},

	pad(string, length) {
		if (length <= string.length) {
			return string;
		} else {
			let startPaddingLength = Math.floor((length - string.length) / 2);
			let endingPaddingLength = length - string.length - startPaddingLength;
			let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endingPaddingLength);
			return paddedString;
		}
	},

	has(object, key) {
		let hasValue = object.hasOwnProperty(key);
		return hasValue;
	},

	invert(object) {
		let invertedObject = {};
		for (let key in object) {
			let originalValue = object[key];
			invertedObject[originalValue] = key;
		}
		return invertedObject;
	},

	findKey(object, predicate) {
		for (let key in object) {
			let value = object[key];
			let predicateReturnValue = predicate(value);
			if (predicateReturnValue) {
				return key;
			} else {
				return undefined;
			}
		}
	},

	drop(array, n) {
		if (n == undefined || n == null) {
			n = 1
		}
		let droppedArray = array.slice(n);
		return droppedArray;
	},

	dropWhile(array, predicate) {
		let dropNumber = array.findIndex(function (element, index) {
			return !predicate(element, index, array);
		});
		let droppedArray = this.drop(array, dropNumber);
		return droppedArray;
	},

	chunk(array, size) {
		if (size == undefined || size == null) {
			size = 1;
		}
		let arrayChunks = [];
		for (let i = 0; i < array.length; i += size) {
			let arrayChunk = array.slice(i, i + size);
			arrayChunks.push(arrayChunk);
		}
		return arrayChunks;
	},
};

// Do not write or modify code below this line.
module.exports = _;