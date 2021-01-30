// Write your code here:
function isTheDinnerVegan(dinner) {
	// This was how I built up my expression.
	//console.log(dinner);
	//console.log(dinner.length); // Didn't actually need this. ;)
	//dinner.forEach(food => console.log(food.source))
	//console.log(dinner.every(food => (food.source === 'plant')))
	
	/*
		This is one of those places where I do functions differently - 
		I could have written it
			return dinner.every (function isVegan (food) {
				if (food.source === 'plant') {
					return true;
				} else {
					return false;
				}
			})
		or a few other ways. For some reason, in cases like this I
		prefer the arrow notation, whereas I like the other declaration
		syntax for other use cases.
	*/
	return dinner.every(food => (food.source === 'plant'));

  }


// Feel free to comment out the code below to test your function
///*
const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

//isTheDinnerVegan(dinner)

console.log(isTheDinnerVegan(dinner))
// Should print false
//*/