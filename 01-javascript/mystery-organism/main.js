// Returns a random DNA base
const returnRandBase = () => {
	const dnaBases = ['A', 'T', 'C', 'G'];
	return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
	const newStrand = [];
	for (let i = 0; i < 15; i++) {
		newStrand.push(returnRandBase());
	}
	return newStrand;
};

/**
 * pAequor Factory
 * return an object that contains the properties 
 * specimenNum and dna that correspond to the parameters provided.
 * 
 * @param int number : no two organisms should have the same number
 * @param array arr : array of 15 DNA bases
 */
const pAequorFactory = (number, arr) => {
	return {
		specimenNum: number,
		dna: arr,
		// change one randomly selected element in dna array
		mutate() {
			// select a base in the dna property
			let select = Math.floor(Math.random() * this.dna.length);
            let newBase = returnRandBase();
            // generated new based value
            while (this.dna[select] === newBase) {
                newBase = returnRandBase();
            }
            this.dna[select] = newBase;
		},
		// compare dna of two different pAequor
		compareDNA(pAequor) {
			let curr = this.dna;
			let past = pAequor.dna;
			let cnt = 0;
			for(let i = 0; i < curr.length; i++) {
				if(curr[i] === past[i]) {
					cnt++;
				}
			}
			let perc = (cnt/(curr.length) * 100).toFixed(2);
			console.log(`specimen #1 and specimen #2 have ${perc}% DNA in common`);
		},
		// check if it will likely survive
		willLikelySurvive() { 
			let cnt = 0;

			for(let each of this.dna) {
				if (each === 'C' || each === 'G') {
					cnt++;
				}
			}
			let perc = (cnt/this.dna.length) * 100;
			// console.log(`percent of survival: ${perc}`);

			if (perc >= 60) {
				return true;
			} else {
				return false;
			}
		},
		// look for complement strands that match DNA strand
		// https://discoveringthegenome.org/discovering-genome/dna-sequencing/dna-complementary-base-pairing
		complementStrand() {
			let compleDNA = this.dna.map(strand => {
				switch(strand) {
					case 'A':
						return 'T';
						break;
					case 'T':
						return 'A';
						break;
					case 'C':
						return 'G';
						break;
					case 'G':
						return 'C';
						break;
					default:
						break;
				}
			});
			return compleDNA;
		},
	};
}

/**
 * Testing
 */
let x = pAequorFactory(1, mockUpStrand());
console.log(x.dna);
console.log(x.complementStrand());

// x.mutate();
// console.log(x.dna);

// let y = pAequorFactory(2, mockUpStrand());
// console.log(y.dna);
// x.compareDNA(y);

// console.log(x.willLikelySurvive());

/**
 * Create 30 survived instance of pAequor
 * 
 */
function survival30() {
	let cnt = 0;
	let spec = 0;
	let survived = [];
	while (cnt < 30) {
		let dna = mockUpStrand();
		let newpAe = pAequorFactory(spec, dna);

		if (newpAe.willLikelySurvive()) {
			survived.push(newpAe);
			cnt++;
		}
		spec++;
	}
	console.log(survived);
	console.log(cnt);
}

// survival30();