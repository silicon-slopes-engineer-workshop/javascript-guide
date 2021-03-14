import { Bird } from './Bird';

export class Penguine extends Bird {
    
    constructor(wing: number, leg: number) {
        super(wing, leg);
    }

    fly(): boolean {
        return false;
    }
}