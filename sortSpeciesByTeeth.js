const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:

/*
	I tried both a named compare function outside the sorting
	function as well as the anonymous function within the sorting
	function.
*/

function compareTeeth (a, b) {
	return a.numTeeth - b.numTeeth;
}


function sortSpeciesByTeeth(species) {
	/*
		Again, leaving in how I started out coming to grips
		with getting the values I needed before settling on
		the specific thing I picked to return. Normally I'd
		delete this stuff, of course.
	*/
	//console.log(species);
	//species.forEach(teeth => console.log(teeth.numTeeth));
	//console.log(species.sort(compareTeeth));
	//console.log(species.sort((a, b) => a.numTeeth - b.numTeeth));

	/*
		Of the two methods, I like using the externally-declared
		function better - to my eye it makes what we're actually
		doing a little easier to understand. YMMV, do what works
		best for you!
	*/
	return species.sort(compareTeeth);
	//return species.sort((a, b) => a.numTeeth - b.numTeeth)
}

// Invoking the function without the console log
//sortSpeciesByTeeth(speciesArray)

// Feel free to comment out the code below when you're ready to test your function!
///*
console.log(sortSpeciesByTeeth(speciesArray))

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]

//*/