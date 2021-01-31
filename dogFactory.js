// Write your code here:
function dogFactory(name, breed, weight) {
	/*
		The commented-out block below was the solution to step 1
		of the challenge. Putting a copy here for completeness; I
		modified it for the needs of subsequent steps
	*/
	/*
	return {
		name,
		breed,
		weight
	};
	*/
	
	const dog = {
		_name: name,
		_breed: breed,
		_weight: weight,

		get name() {
		return this._name
		},

		set name(name) {
		this._name = name
		},

		get breed() {
		return this._breed
		},

		set breed(breed) {
		this._breed = breed
		},

		get weight() {
		return this._weight
		},

		set weight(weight) {
		this._weight = weight
		},

		bark() {
		return 'ruff! ruff!'
		},

		eatTooManyTreats() {
		this._weight++
		}
	}

	return dog;
}