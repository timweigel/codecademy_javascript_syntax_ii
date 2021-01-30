const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
	console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
function declineEverything(foodIn) {
	foodIn.forEach(politelyDecline);
}

declineEverything(veggies);

// Defining a callback function seems like a reasonable approach.
function grudginglyAccept (veg) {
	/* 
		"yOu cAn uSe aNy tEcHnIqUe yOu wAnT" Despite the rubric, 
		the expression below does not pass validation checks.
	*/
	//console.log(`OK, I guess I will eat some ${veg}.`);

	// So, we do it this way.
	console.log('Ok, I guess I will eat some ' + veg + '.')
}

function acceptEverything(foodIn) {
	foodIn.forEach(grudginglyAccept);
}

acceptEverything(veggies);