export class Bird {

    // private _wing: number;
    // private _leg: number;

    // constructor
    constructor(private _wing: number, private _leg: number) {
    }

    public get wings(): number {
        return this._wing;
    }

    public set wings(wing: number) {
        this._wing = wing;
    }

    public get leg(): number {
        return this._leg;
    }

    public set leg(leg: number) {
        this.leg = leg;
    }

    public fly(): boolean {
        return true;
    }
}