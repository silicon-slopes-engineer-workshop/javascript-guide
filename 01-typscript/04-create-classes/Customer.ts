class Customer {
	
	//properties -> public by default
	// firstName: string;
	// lastName: string;
	private firstName: string;
	private lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

// Without constructor
// let obama = new Customer();

// obama.firstName = "Barack";
// obama.lastName = "Obama";

// With constructor but public variables
let obama = new Customer("Barack", "Obama");

// With constructor and private variables


console.log(`Customer Name: ${obama.firstName} ${obama.lastName}`);