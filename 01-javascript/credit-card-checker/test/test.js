const main = require('main.js');
const assert = require('./assert.js');

const TEST_NAME = 'convertStringtoArray';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, '_.clamp()', main.convertStringtoArray);

if (!main.convertStringtoArray) {
	assert.terminateTestBlock();
	return;
}

assert.equals(TEST_NAME, '', , );
assert.equals(TEST_NAME, '', , );
assert.equals(TEST_NAME, '', , );

assert.endTestBlock();