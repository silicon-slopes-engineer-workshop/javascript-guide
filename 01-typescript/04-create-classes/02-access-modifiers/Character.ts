/**
 * Class that use underscore name and get set syntax
 */
class Character {

    // can give any property name, use convention `_`
    private _fname: string;
    private _lname: string;

    constructor(first: string, last: string) {
        this._fname = first;
        this._lname = last;
    }

    public get firstname(): string {
        return this._fname;
    }

    public set firstname(first: string) {
        this._fname = first;
    }

    public get lastname(): string {
        return this._lname;
    }

    public set lastname(last: string) {
        this._lname = last;
    }

}

// create instance
let character = new Character("Laila", "Law-Giver");
console.log(`Jarl of Riften is ${character.firstname} ${character.lastname}`);

// You've defined it as a setter, so use it as a property: character.firstname = "name"
character.firstname = "Saerlund";
console.log(`${character.firstname} ${character.lastname} is her son, who sides with the Empire.`);