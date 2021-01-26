const menu = {
	_courses: {
		appetizers: [],
		mains: [], 
		desserts: [], 
	},
	
	get appetizers() {
		return this._courses.appetizers;
	}, 

	set appetizers(appetizerIn) {
		this._courses.appetizers.push(appetizerIn);
	},

	get mains() {
		return this._courses.mains;
	}, 

	set mains(mainIn) {
		this._courses.mains.push(mainIn);
	}, 

	get desserts() {
		return this._courses.desserts;
	}, 

	set desserts(dessertIn) {
		this._courses.desserts.push(dessertIn);
	},

	get courses() {
		return {
			appetizers: this._courses.appetizers,
			mains: this._courses.mains,
			desserts: this._courses.desserts
		};
	},

	addDishToCourse(courseName, dishName, dishPrice){
		const dish = {
			name: dishName, 
			price: dishPrice
		}

		// This validation check wasn't part of the project, but I prefer to validate inputs.
		if (courseName === 'appetizers' || courseName === 'mains' || courseName === 'desserts') {
			this[courseName] = dish;
		} else {
			console.log(`'${courseName}' is not a valid course. Please enter a valid course.`);
		}
	},

	getRandomDishFromCourse(courseName) {
		const dishes = this[courseName];
		const randomIdx = Math.floor(Math.random() * dishes.length)
		return dishes[randomIdx];
	}, 

	generateRandomMeal() {
		const appetizer = this.getRandomDishFromCourse('appetizers');
		const main = this.getRandomDishFromCourse('mains');
		const dessert = this.getRandomDishFromCourse('desserts');
		const total = appetizer.price + main.price + dessert.price
		
		return `Your randomly-chosen meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, for a total price of \$${total}`
	},
}

menu.addDishToCourse('appetizers', 'olives', 3.25);
menu.addDishToCourse('appetizers', 'cheese', 6.75);
menu.addDishToCourse('appetizers', 'edamame', 2.00);
menu.addDishToCourse('mains', 'meatloaf', 8.00);
menu.addDishToCourse('mains', 'stew', 9.25);
menu.addDishToCourse('mains', 'stroganoff', 8.50);
menu.addDishToCourse('desserts', 'bread pudding', 5.00);
menu.addDishToCourse('desserts', 'ice cream', 2.50);
menu.addDishToCourse('desserts', 'cake', 4.00)

const meal = menu.generateRandomMeal();
console.log(meal);