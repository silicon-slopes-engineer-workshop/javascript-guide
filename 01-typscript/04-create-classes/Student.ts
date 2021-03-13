class Student {

	private _firstname: string;
	private _lastname: string;

	get firstName(): string {
		return this._firstname;
	}

	set firstName(firstName: string) {
		this._firstname = firstName;
	}

	get lastName(): string {
		return this._lastname;
	}

	set lastName(lastName: string) {
		this._lastname = lastName;
	}

}

let student = new Student();
student.firstName = 'Martin';
student.lastName = 'King';
console.log( student.firstName );

// tsc --target es5 --noEmitOnError [file.ts]
// node [file.js]