// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

/*
	Uses the Luhn algorithm:
	https://en.wikipedia.org/wiki/Luhn_algorithm#Description
*/

/*
	Some shorter arrays to validate identifying Luhn numbers
*/
//const luhnTest1 = [0, 1, 2, 3, 4];
//const luhnTest2 = [0, 1, 2, 3, 4, 5];
const string1 = '4485635698559639';
const string2 = '4532 4117 2384 9004';
const string3 = '5103-2467-3834-2678';
const string4 = '6011 3612-9227 2820';

function validateCred(card) {
	
    /*
		An array to hold the card digits to validate my manipulations; won't need
		this eventually
    */
	//let holdArray = [];
	//let holdSum = 0;

	const cardLength = card.length;
	const startIndex = cardLength - 1;
	let cardSum = 0;
	
	/*
		Put the 'Luhn number' indices in an array to ensure I'm finding 
		them right
	*/
	//let luhnNum = [];

	//console.log(`card: ${card}`);
	//console.log(`cardLength: ${cardLength}`)

	/*
	for (i = (cardLength - 1); i >= 0; i -= 2){
		luhnNum.push(i);
	}

	console.log(`Luhn numbers are at card indices ${luhnNum}`);
	*/

	/*
		Iterate through the array and populate a holding array with 
		values to calculate the checksum
	*/
	//for (i = (cardLength - 1); i >= 0; i --) {
	for (i = startIndex; i >= 0; i--) {
		//console.log(`value in card[${i}]: ${card[i]}`);
		//console.log(`distance at card[${i}] from startIndex: ${startIndex - i}`);
		
		/*
			Looking over the pseudocode in the Wikipedia entry, I could come back
			and refine how I handle the computation, but this works well enough
			for this exercise. Were I writing code to go into production I'd 
			probably do a similar thing to calculate parity if it meant that the 
			function executed a little faster - if it's called hundreds or 
			thousands of times a day, those fractions of a second add up.
		*/
		if ((startIndex - i)%2 === 0) {
			//console.log(`multiple of 2 from start`)
			//console.log(`pushing ${card[i]} to holdArray`);
			//holdArray.push(card[i]);
			cardSum += card[i];
			//console.log(`adding ${card[i]} to cardSum`)
		} else {
			//console.log(`not multiple of 2 from ${startIndex}`);
			if ((card[i] * 2) > 9) {
				//console.log(`Luhn > 9; pushing ${(card[i] * 2) - 9} to holdArray`);
				//holdArray.push((card[i] * 2) - 9);
				cardSum += ((card[i] * 2) - 9)
				//console.log(`Luhn > 9; adding ${(card[i] * 2) - 9} to cardSum`)
			} else {
				//console.log(`Luhn <= 9; pushing ${card[i] * 2} to holdArray`)
				//holdArray.push(card[i] * 2);
				cardSum += (card[i] * 2);
				//console.log(`Luhn <= 9; adding ${card[i] * 2} to cardSum`)
			}
		}
		//console.log('')
		//holdArray.push(card[i]);
	}

	/*
		Calculate sum of numbers in holdArray to make checksum
	*/
	/*
	for(i = 0; i < holdArray.length; i++) {
		holdSum += holdArray[i];
	}
	*/

	//console.log(`holdArray: ${holdArray}`);
	//console.log(`holdSum: ${holdSum}`)
	//console.log(`cardSum: ${cardSum}`);
	if (cardSum%10 === 0) {
		//console.log(`card valid`)
		return true;
	} else {
		//console.log(`card not valid`)
		return false;
	}
};

/*
	Go through nested array of card numbers and return the invalid ones in 
	a nested array
*/
function findInvalidCards(cardBatch) {
	let invalidCards = [];

	/*
	for (i = 0; i < cardBatch.length; i++) {
		console.log(`validating batch ${cardBatch[i]}`)
		
	}
	*/

	cardBatch.forEach(card => 
			{if (!validateCred(card)) {
				invalidCards.push(card)
			}
		}
	)

	//console.log(invalidCards);
	return invalidCards;
};

function idInvalidCardCompanies(invalidCards) {
	let invalidCompanies = [];

	invalidCards.forEach(card => {
			switch (card[0]) {
				case 3:
					if (!invalidCompanies.includes('Amex (American Express)')) {
						invalidCompanies.push('Amex (American Express)');
					}
					break;
				case 4:
					if (!invalidCompanies.includes('Visa')) {
						invalidCompanies.push('Visa');
					}
					break;
				case 5:
					if (!invalidCompanies.includes('Mastercard')) {
						invalidCompanies.push('Mastercard');
					}
					break;
				case 6:
					if (!invalidCompanies.includes('Discover')) {
						invalidCompanies.push('Discover');
					}
					break;
				default:
					console.log(`Company not found`);
			}
		}
	);

	return invalidCompanies;
};

// CHALLENGES!
function cardStringToArray(cardString) {
	/*
		Attempting to clean up some common card entry patterns
		to get a contiguous string of digits; a regex would be
		better for this (or even better yet, input validation!)
		but I don't know how to do that yet. So, this way.
	*/
	//console.log(`cardString as input: ${cardString}`);
	cardString = cardString.replaceAll(' ', '');
	cardString = cardString.replaceAll('-', '');

	//console.log(`cardString after cleanup: ${cardString}`);

	const cardArray = Array.from(cardString);
	
	//console.log(cardArray);

	return cardArray;
};

function makeCardValid (invalidCard) {
	const cardLength = invalidCard.length;
	// Trying this method for parity based on Wikipedia method
	const parityCheck = cardLength % 2;
	const startIndex = cardLength - 1;
	let cardSum = 0;
	let newCardSum = 0;
	let checkModulo = 0;
	let checkDigit = invalidCard[startIndex];
	let newCheckDigit = 0;
	let validCard = [];
	
	console.log(`invalid: ${invalidCard}`);

	/*
		While I've substantially reused the code from my above 
		validateCred function, I had to flip the control flow
		around. 
	*/
	for (i = startIndex; i >= 0; i--) {
		if(i%2 === parityCheck) {
			if ((invalidCard[i] * 2) > 9) {
				cardSum += ((invalidCard[i] * 2) - 9)
			} else {
				cardSum += (invalidCard[i] * 2);
			}
		} else {
			cardSum += invalidCard[i];
		} 
	}
	//console.log(`original cardSum: ${cardSum}`)

	checkModulo = cardSum % 10;
	//console.log(`checkModulo = ${checkModulo}`);

	if (checkModulo != 0) {
		//console.log(`cardSum: ${cardSum}`)
		//console.log(`checkDigit = ${checkDigit}`);

		// Remove the check digit from the 
		newCardSum = cardSum - checkDigit;
		newCheckDigit = (10 - (newCardSum % 10))
		//console.log(`cardSum after removing check digit: ${newCardSum}`);
		//console.log(`cardSum minus check digit modulo 10: ${newCardSum % 10}`);
		//console.log(`10 minus the above = new check digit: ${10 - (newCardSum % 10)}`)
		for(i = 0; i < startIndex; i++) {
			validCard.push(invalidCard[i]);
		}
		
		if (newCheckDigit === 10) {
			validCard.push(0);
		} else {
			validCard.push(newCheckDigit);
		}
	} else {
		console.log(`card is valid!`);
	}
	
	//console.log(`made valid: ${validCard}`);
	return validCard;
};
