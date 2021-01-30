// Write your code here:
function justCoolStuff(array1, array2){
	/*
		I could have omitted the intialization with the empty array,
		but thus far I do prefer to do it this way. Helps me keep it
		straight in my head, what I've declared.
	*/
	let filteredArray = [];
	filteredArray = array1.filter(things => array2.includes(things))
	return filteredArray;
}

// Feel free to uncomment the code below to test your function
///*
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

//*/