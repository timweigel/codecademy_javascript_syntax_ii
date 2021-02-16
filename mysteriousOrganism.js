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
			  let origStrandLength = this._dna.length;
			  let compareStrandLength = orgForCompare.dna.length;
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
  
		  /*
			  Added to support the findRelatives function below. Returns an array with
			  the specimen numbers and percentage of matching DNA
		  */
		  compareDNA2(orgForCompare) {
			  let origStrandLength = this._dna.length;
			  let compareStrandLength = orgForCompare.dna.length;
			  let matchCount = 0;
			  let percentCommon;
			  let returnArray = [];
  
			  if (origStrandLength !== compareStrandLength) {
				  console.log(`DNA strand lengths do not match!`)
			  } else {
  
				  for (i = 0; i < origStrandLength; i++) {
					  if (orgForCompare.dna[i] === this._dna[i]) {
						  matchCount++;
					  }
				  }
  
				  // Not rounding this time - may need more precision to identify matches
				  percentCommon = ((matchCount/origStrandLength) * 100);
				  returnArray.push(this.specimenNum, orgForCompare.specimenNum, percentCommon);
  
				  console.log(returnArray);
				  //console.log(`specimen #${this._specimenNum} and specimen #${orgForCompare.specimenNum} have ${percentCommon}% DNA in common`)
			  }	
  
			  return returnArray;
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
  
		  complementStrand() {
			  let newStrand = [];
  
			  for(i = 0; i < this._dna.length; i++) {
				  if (this._dna[i] === 'A') {
					  newStrand.push('T')
				  } else if (this._dna[i] === 'T') {
					  newStrand.push('A')
				  } else if (this._dna[i] === 'G') {
					  newStrand.push('C')
				  } else {
					  newStrand.push('G')
				  }
			  }
  
			  return newStrand;
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
  
  /*
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
  */
  
  /*
	  // make an arbitrary number of surviving organisms
	  I'm doing this to make it easy to generate an arbitrary
	  set of survivors so I can test findRelatives
  */
  function makeSurvivors(numToMake) {
	  let survivorOrgs = []
	  let contendCounter = 1;
  
	  while (survivorOrgs.length < numToMake) {
		  let contenderOrg = pAequorFactory(contendCounter, mockUpStrand());
		  //console.log(`contender ${contendCounter} - go! survive: ${contenderOrg.willLikelySurvive()}`)
		  if (contenderOrg.willLikelySurvive()) {
			  survivorOrgs.push(contenderOrg);
		  }
  
		  contendCounter++;
	  }
  
	  return survivorOrgs;
  }
  
  // try to find most related
  /*
	  I'm going to store the match percentage and the specimen numbers compared as arrays 
	  (format: [specimen ID 1, specimen ID 2, match %] in	an array.
  
	  I'm creating a compareDNA2 function  in the factory function that instead of 
	  logging to the console,	returns an array like the one described above that we can
	  push into an array for later analysis
  */
  function findRelatives(orgArray) {
	  let orgArrayLength = orgArray.length;
	  console.log(`orgArrayLength: ${orgArrayLength}`)
  
	  let matchPairs = [];
	  //console.log(orgArray);
	  
	  /*
		  I'm thinking a nested loop here - we start at index 0, comparing it to
		  index 1 ... index n. Then we go to 1, compare it to 2 ... n. We can start
		  the comparison at i + 1 as we already know how i and i-1 relate, and we
		  don't want to compare i with itself.
	  */
	  console.log(`outer loop beginning`)
	  for	(i = 0; i < orgArrayLength; i++) {
		  
		  console.log(` i: ${i}; specimen ${orgArray[i].specimenNum}`)
		  console.log(`  inner loop beginning`)
		  for (j = i + 1; j < orgArrayLength; j++) {
			  console.log(`   i: ${i}, j: ${j}`);
			  console.log(`   compare specimens ${orgArray[i].specimenNum} and ${orgArray[j].specimenNum}`);
			  //orgArray[i].compareDNA(orgArray[j]);
			  //console.log(orgArray[i].compareDNA2(orgArray[j]))
			  //matchPairs.push(orgArray[i].compareDNA2(orgArray[j]));
		  }
		  console.log(`  inner loop completed`)
	  }
	  console.log(`outer loop completed`)
  
	  //console.log(matchPairs);
	  /*
		  Having built my array of comparisons, it's time to sort it.
	  */
  
	  return;
  
  };
  
  
  // Tests
  //let testArray = makeSurvivors(3);
  //findRelatives(testArray);
  
  /*
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
  