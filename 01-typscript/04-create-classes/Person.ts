class Person {
    private _fname: string;
    private _lname: string;
    """ """
    public get firstname(): string {
        return this._fname;
    }

    public set lastname(value: string) {
        return this._lname;
    }
}

// create instance
let customer = new Person("Marson", "Moji");

customer.firstname = "Susan"; 
console.log(customer.firstname);