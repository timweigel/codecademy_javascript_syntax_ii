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

function pAequorFactory(orgNum, baseArray) {
	const organism = {
		_specimenNum: orgNum, 
		_dna: baseArray,

		get specimenNum() {
			return this._specimenNum;
		},

		set specimenNum(specNum) {
			this._specimenNum = specNum;
		},

		get dna() {
			return this._dna;
		},

		set dna(strand) {
			this._dna = strand;
		},

		mutate() {
			let newDNA = [];
			const randBase = Math.floor(Math.random() * 15);
			let currentBase = this._dna[randBase];
			let newBase = 'Z';

			console.log(`randBase: ${randBase}`);
			console.log(`base at index randBase: ${currentBase}`);

			/*
			for (i = 0; i < randBase; i++) {
				//console.log(`testing iteration: ${this._dna[i]}`)
				newDNA.push(this._dna[i]);
			}
			*/
			//console.log(`current dna:                     ${this._dna}`);
			//console.log(`newDNA up to index randBase - 1: ${newDNA}`);

			do {
				newBase = returnRandBase();
				//console.log(`newBase in do...while: ${newBase}`);
			} while (newBase === currentBase);

			console.log(`newBase = ${newBase}`);

			for (i = 0; i < this._dna.length; i++) {
				if (i === randBase) {
					newDNA.push(newBase);
				} else {
					newDNA.push(this._dna[i]);
				}
			}
			
			//console.log(`current DNA: ${this._dna}`);
			//console.log(`newDNA:      ${newDNA}`);
		},
		
		compareDNA(orgForCompare) {
			return;
		}
	}

	return organism;
};

// Tests
let DNA = mockUpStrand();
let org0 = pAequorFactory(0, DNA);

console.log(org0);
org0.mutate();