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
		// 
		compareDNA() {},
	};
}



