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
			  let randBase = Math.floor(Math.random() * 15);
			  let currentBase = this._dna[randBase];
			  let newBase = 'Z';
  
			  //console.log(`randBase: ${randBase}`);
			  //console.log(`base at index randBase: ${currentBase}`);
  
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
  
			  //console.log(`newBase = ${newBase}`);
  
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
			  const origStrandLength = this._dna.length;
			  const compareStrandLength = orgForCompare.dna.length;
			  let matchCount = 0;
			  let percentCommon;
  
			  //console.log(`this dna:      ${this._dna}`);
			  //console.log(`compaison dna: ${orgForCompare.dna}`);
  
			  if (origStrandLength !== compareStrandLength) {
				  console.log(`DNA strand lengths do not match!`)
			  } else {
  
				  for (i = 0; i < origStrandLength; i++) {
					  //console.log(`this organism's DNA base at ${i}: ${this._dna[i]}`);
					  //console.log(`comparison organism's DNA base at ${i}: ${orgForCompare.dna[i]}`)
					  if (orgForCompare.dna[i] === this._dna[i]) {
						  matchCount++;
						  //console.log(`match! matchCount: ${matchCount}`);
					  }
				  }
  
				  percentCommon = Math.round((matchCount/origStrandLength) * 100);
  
				  console.log(`specimen #${this._specimenNum} and specimen #${orgForCompare.specimenNum} have ${percentCommon}% DNA in common`)
			  }	
  
			  return;
		  },
  
		  willLikelySurvive() {
			  const strandLength = this._dna.length;
			  let baseCount = 0;
  
			  for (i = 0; i < strandLength; i++) {
				  if (this._dna[i] === 'C' || this._dna[i] === 'G') {
					  baseCount++;
				  }
			  }
  
			  if (baseCount/strandLength >= 0.6) {
				  return true;
			  } else {
				  return false;
			  }
		  },
	  }
  
	  return organism;
  };
  
  /*
  //make 30:
  let orgArray = [];
  for (i = 1; i <= 30; i++) {
	  orgArray.push(pAequorFactory(i, mockUpStrand()));
  }
  */
  
  // make 30 that will survive:
  let survivorOrgs = []
  let contendCounter = 1;
  
  while (survivorOrgs.length < 30) {
	  let contenderOrg = pAequorFactory(contendCounter, mockUpStrand());
	  //console.log(`contender ${contendCounter} - go! survive: ${contenderOrg.willLikelySurvive()}`)
	  if (contenderOrg.willLikelySurvive()) {
		  survivorOrgs.push(contenderOrg);
	  }
  
	  contendCounter++;
  }
  
  /*
  // Tests
  let DNA0 = mockUpStrand();
  let org0 = pAequorFactory(0, DNA0);
  console.log(org0);
  //org0.mutate();
  
  let DNA1 = mockUpStrand();
  let org1 = pAequorFactory(1, DNA1);
  console.log(org1);
  
  //For some reason this tends to break stuff; not quite sure why. Used to test willLikelySurvive
  let DNA2 = ['G', 'C', 'G', 'C', 'G', 'C', 'G', 'C', 'G', 'T', 'A', 'T', 'A', 'T', 'A'];
  let org2 = pAequorFactory(2, DNA2);
  console.log(org2);
  */
  