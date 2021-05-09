console.log = function () { };
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
	it('', function () {
		let structureOne = function () {
			button.removeEventListener();
		};

		let structureTwo = function () {
			button.removeEventListener($event);
		};

		let structureThree = function () {
			button.removeEventListener($event, showFortune);
		};

		let varCallbacks = [
			function ($event) {
				if ($event.value !== 'click') {
					return { failure: 'Did you pass in an argument of a `\'click\'` in both the event listener methods?' };
				}
				return true
			}
		]

		let isMatchOne = Structured.match(code, structureOne);
		let isMatchTwo = Structured.match(code, structureTwo, { varCallbacks });
		let isMatchThree = Structured.match(code, structureThree, { varCallbacks });

		assert.isOk(isMatchOne, 'Did you add the `.removeEventListener()` method to the `button` element inside the `showFortune()` function?');
		assert.isOk(isMatchTwo, varCallbacks.failure || 'Did you give the event type and event handler function as the arguments for your `.removeEventListener()` method?');
		assert.isOk(isMatchThree, varCallbacks.failure || 'Did you give `showFortune` as your event handler function for your second argumenet of `.removeEventListener()` method?');
	});
});