import { Bird } from './Bird';

export class Goose extends Bird {
    
    private _mood: string;

    // constructor
    constructor(wing: number, leg: number, mood: string) {
        super(wing, leg);
        this._mood = mood;
    }

    public get wing(): number {
        return this.wing;
    }

    public set wing(wing: number) {
        this.wing = wing;
    }

    public get leg(): number {
        return this.leg;
    }

    public set leg(leg: number) {
        this.leg = leg;
    }

    public get mood(): string {
        return this._mood;
    }

    public set mood(mood: string) {
        this._mood = mood;
    }

    public fly(): boolean {
        return false;
    }
}