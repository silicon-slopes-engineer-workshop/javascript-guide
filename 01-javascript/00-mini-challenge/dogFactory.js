// Write your code here:
const dogFactory = (name, breed, weight) => {
	return {
		_name: name,
		_breed: breed,
		_weight: weight,

		get name() {
			return this._name;
		},
		set name(name) {
			this._name = name;
		},
		get breed() {
			return this._breed;
		},
		set breed(breed) {
			this._breed = breed;
		},
		get weight() {
			return this._weight;
		},
		set weight(weight) {
			this._weight = weight;
		},
		bark() {
			return 'ruff! ruff!';
		},
		eatTooManyTreats() {
			return this._weight++;
		}
	}

}