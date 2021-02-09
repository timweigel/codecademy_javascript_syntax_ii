const _ = {
	clamp(number, lower, upperBound) {  
	/*
		This was my implementation I came
		up with during the Ideate phase of
		the .clamp() exercise. It passes
		the test, but it is not as
		readable as the method described in
		the Implement phase.
	*/
	//return Math.min(Math.max(number, lower), upperBound);

	/*
		The below is the implementation
		presented in the Implement phase
		of the .clamp() exercise, just 
		with my parameter names - the 
		parameter names provided are
		number, lower, and upper.
	*/
	const lowerClampedValue = Math.max(number, lower);
	const clampedValue = Math.min(upperBound, lowerClampedValue);
	
	return clampedValue;
	},

	inRange(number, start, end) {
		// Leaving all my debugging statements in, commented out

		//let temp = 0; // I declared this here first.
		
		//console.log(`initial number: ${number}`);
		//console.log(`initial start: ${start}`);
		//console.log(`initial end: ${end}`);
		
		//console.log(`entering flow control`)
		if (end === undefined) {
			//console.log(`end is undefined`);
			end = start;
			start = 0;
			//console.log(`new start: ${start}`);
			//console.log(`new end: ${end}`);
		}
		
		if (start > end) {
			//console.log(`start is greater than end`);
			
			/*
				For scope reasons it makes more sense to
				declare this here, as was done in the 
				Implement phase.
			*/
			let temp = start
			
			/*
				Could also start temp as end, as long as I don't
				prematurely assign the values before getting temp
				in play.
			*/
			temp = start;
			start = end;
			end = temp;

			//console.log(`new temp: ${temp}`);
			//console.log(`new start: ${start}`);
			//console.log(`new end: ${end}`);
		}
		//console.log(`leaving flow control`);
		//console.log(`number: ${number}`);
		//console.log(`final start: ${start}`);
		//console.log(`final end: ${end}`);

		/* 
			The commented out block below is my 
			original way of handling the return
			of true or false.
			
			I like the way from the Implement
			phase better, below my commented out
			section.
		*/

		/*
		if (number >= start && number < end) {
			return true;
		} else {
			return false;
		}
		*/

		let isInRange = (number >= start && number < end);
		return isInRange;
	},

	words(stringIn) {
		let wordsOut = [];

		wordsOut = stringIn.split(' ');

		return wordsOut;
	},

	pad(stringIn, length) {
		const strLen = stringIn.length;
		const padLen = length - strLen;
		const padBefore = Math.floor(padLen/2);
		const padAfter = length - (strLen + padBefore);
		let stringOut;
		
		//console.log(`input string: ${stringIn}`);
		//console.log(`string length: ${strLen}`);
		//console.log(`desired length: ${length}`);
		//console.log(`amount of padding needed: ${padLen}`);
		//console.log(`padding before: ${padBefore}`);
		//console.log(`padding after: ${padAfter}`);
		if (padLen <= 0) {
			return stringIn;
		} else {
			/*
				The padStart() and padEnd() methods ARE valid, but the
				Codecademy exercise doesn't accept them - testing
				on my local machine passes the tests, though.

				I rewrote this without the padStart and padEnd
				methods below.
			*/

			stringOut = stringIn.padStart((strLen + padBefore));
			stringOut = stringOut.padEnd((stringOut.length + padAfter));
			
			/*
			let padString = ' ';

			stringOut = padString.repeat(padBefore) + stringIn
				+ padString.repeat(padAfter);
			*/
			
			return stringOut;
		}
	},

	has(objectIn, keyIn) {
		//console.log(`objectIn: ${Object.entries(objectIn)}`);
		//console.log(`keyIn: ${keyIn}`);
		const hasValue = (objectIn[keyIn] != undefined);
		return hasValue;
	},

	invert(objectIn) {
		/*
			I still don't understand objects as well as I'd like.
			This function was hard, but I think this is where
			I've started getting some traction.
		*/
		
		//console.log(objectIn);
		let invObject = {};
		
		for (let key in objectIn) {
			//console.log(`objectIn: ${key} : ${objectIn[key]}`)
			
			let originalValue = objectIn[key];
			//console.log(`originalValue: ${originalValue}`)

			invObject[originalValue] = key;
			}
		
		//console.log(invObject)
		return invObject;
	},

	findKey(objIn, predFunc){
		//console.log(objIn);
		//console.log(predFunc);

		for (let key in objIn){
			let value = objIn[key];
			let predicateReturn = predFunc(value);
			//console.log(key);
			//console.log(value);
			//console.log(predicateReturn);
			
			if (predicateReturn){
				//console.log(`I'm true!`)
				return key;
			}
		}
		return undefined;
	},
};

// Do not write or modify code below this line.
module.exports = _;