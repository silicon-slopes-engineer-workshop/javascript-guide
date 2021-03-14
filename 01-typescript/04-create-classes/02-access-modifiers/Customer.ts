/**
 * Class with private properties and constructor
 */
class Customer {
	
	private firstName: string;
	private lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

// create instance
let obama = new Customer("Barack", "Obama");

console.log(`Customer Name: ${obama.firstName} ${obama.lastName}`);