class Patient {

    //short cut
    constructor(private _firstname: string, private _lastname: string) {
    }

    public get firstName(): string {
        return this._firstname;
    }

    public set firstName(value: string) {
        this._firstname = value;
    }

    public get lastName(): string {
        return this._lastname;
    }

    public set lastName(value: string) {
        this._lastname = value;
    }
}

let patient = new Patient("Martin", "Dixon");

console.log(patient.firstName);
console.log(patient.lastName);