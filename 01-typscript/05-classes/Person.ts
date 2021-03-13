class Person {
	
	//properties -> public by default
	// firstName: string;
	// lastName: string;
	private firstName: string;
	private lastName: string;

	constructor() {}

	public getFirstName(): string {
		return this.firstName;
	}

	public setFirstName(firstName: string): void {
		this.firstName = firstName;
	}

	public getLastName(): string {
		return this.lastName;
	}

	public setLastName(lastName: string): void {
		this.lastName = lastName;
	}
}

// let michelle = new Person();

// michelle.setFirstName("Michelle");
// michelle.setLastName("Obama");

// console.log("This person is " + michelle.getFirstName() + " " + michelle.getLastName());
