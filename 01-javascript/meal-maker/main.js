const menu = {
	_courses: {
		appetizers: [],
		mains: [],
		desserts: []
	},
	get courses() {
		return {
			appetizers: this.appetizers,
			mains: this.mains,
			desserts: this.desserts
		};
	},
	set courses(coursesIn) {
		this._courses = coursesIn;
	},
	get appetizers() {
		return this.appetizers;
	},
	set appetizers(appetizerIn) {
		this.appetizers = appetizerIn;
	},
	get mains() {
		return this.mains;
	},
	set mains(mainsIn) {
		this.mains = mainsIn;
	},
	get desserts() {
		return this.desserts;
	},
	set desserts(dessertsIn) {
		this.desserts = dessertsIn;
	},
	addDishToCourse(courseName, dishName, dishPrice) {
		const dish = {
			name: dishName,
			price: dishPrice
		};
		this._courses[courseName].push(dish); // also try using your setter method!
	},
	getRandomDishFromCourse(courseName) {
		let dishes = this._courses[courseName];
		let randomIndex = Math.floor(Math.random() * dishes.length);
		return dishes[randomIndex]; // Attention
	},
	generateRandomMeal() {
		let appetizer = this.getRandomDishFromCourse('appetizers');
		let main = this.getRandomDishFromCourse('mains');
		let dessert = this.getRandomDishFromCourse('desserts');
		let total = appetizer.price + main.price + dessert.price;
		console.log(`Appetizer: ${appetizer.name} - ${appetizer.price}`);
		console.log(`Main: ${main.name} - ${main.price}`);
		console.log(`Dessert: ${dessert.name} - ${dessert.price}`);
	}
};

menu.addDishToCourse('appetizers', 'Goi Cuon', 10);
menu.addDishToCourse('mains', 'Xoi', 15);
menu.addDishToCourse('desserts', 'Rau Cau', 5);

menu.addDishToCourse('appetizers', 'Cha Gio', 7);
menu.addDishToCourse('mains', 'Ga Tiem', 17);
menu.addDishToCourse('desserts', 'Tra Sua', 6);

menu.addDishToCourse('appetizers', 'Banh Phong Tom', 12);
menu.addDishToCourse('mains', 'Thit Kho', 20);
menu.addDishToCourse('desserts', 'Banh Kem', 7);

menu.generateRandomMeal();
  // console.log(meal);